import React,{useEffect} from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from "firebase/auth";

const Body = () => {

    const dispatch = useDispatch()

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/browse',
            element: <Browse/>
        }
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            //if block will add the data to redux store when user signIn and else block will remove the user data from redux store when user signOut
            if (user) {

              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
              
            } else {
              dispatch(removeUser());
            }
          });
    }, [])


    return (
        <div>
           <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body
