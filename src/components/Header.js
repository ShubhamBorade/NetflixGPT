import React,{useEffect} from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports'
import { addUser, removeUser } from '../utils/userSlice'
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from '../utils/constants';

const Header = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(store=>store.user)
    
    const handleSignOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful
          }).catch((error) => {
            // An error happened.
      });
    }

    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
            //if block will add the data to redux store when user signIn and else block will remove the user data from redux store when user signOut
            if (user) {

              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
              navigate('/browse');  //after successful singUp/signIn we will take user to browse page
            } else {
              dispatch(removeUser());
              navigate('/');   //after successful signOut we are taking the user to singIn/signOut page
            }
          });
           
          //unsubscribing onAuthStateChanged when our component unmounts
          return ()=> unsubscribe();

    }, [])


    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
           <img className='w-48 ' src={LOGO} alt="logo" />
           {/* it will show below code only when someone is signed in */}
          {user && <div>
              {/* <img src={user?.photoURL} alt="broken logo" /> */}
              <button onClick={handleSignOut} className='px-4 py-1 bg-red-600 mt-3 font-semibold hover:bg-red-700'>Sign Out</button>
           </div>}
        </div>
    )
}

export default Header
