import React from 'react'
import Header from './Header'

const Login = () => {
    return (
        <div>
         <Header/>
          <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bgimage" />
          </div>

          <form className='absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black flex-col text-white bg-opacity-90'>
            <h1 className='text-3xl font-bold'>Sign In</h1>
            <input className='w-full my-3 h-8 outline-none rounded-sm px-2 bg-gray-700' type="text" placeholder='Email Address' name="" id="" />
             <input className='w-full my-3 h-8 outline-none rounded-sm px-2 bg-gray-700' type="password" placeholder='Password' name="" id=""/>
             <button className='w-full my-3 h-8 bg-red-600 font-semibold rounded-sm'>Sign In</button>
             <p>New to Netflix? Sign up Now</p>
          </form>
        </div>
    )
}

export default Login
