import React,{useState} from 'react'

import {FaRegEnvelope} from 'react-icons/fa'
import {MdLockOutline} from 'react-icons/md'
import {FcGoogle} from 'react-icons/fc'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");


  const handleEmailChange = (e) => {
    setEmail(e.target.value.toLowerCase());
  };
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  return (
    <div className="mt-16  bg-white">
      <div className='w-full flex flex-col md:flex-row items-center justify-center flex-1 text-center '>

      <div className='w-full md:w-3/5 p-5'>
      <div className='py-10 items-center flex flex-col justify-center'>
            <h2 className='text-3xl font-bold text-[#003979] mb-8'>Sign in to account</h2>
            <div className='border-4 w-10 border-[#003979] inline-block mb-2' />
            <div className='flex items-center my-3 mb-8 hover:cursor-pointer'><p>Login via google </p><FcGoogle className='text-blue-500 text-2xl ml-3' /></div>

                {/* Input Divs below */}
                <div className='flex flex-col items-center '>
                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                        <FaRegEnvelope className='text-gray-400 m-2' />
                        <input type='email' name='email' value={email} onChange={handleEmailChange} placeholder="Email" className='bg-gray-100 outline-none text-sm flex-1' />
                        {/* using flex-1 above to expand full width */}
                    </div>
                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                        <MdLockOutline className='text-gray-400 m-2' />
                        <input type='password' name='password' value={password} onChange={handlePassChange} placeholder="Password" className='bg-gray-100 outline-none text-sm flex-1' />
                        {/* using flex-1 above to expand full width */}
                    </div>
                    <div className='flex justify-between w-64 mb-5'>
                        <div className='text-xs hover:cursor-pointer'>Forgot Password?</div>
                    </div>
                    <a href='/dashboard'  className='border-2 border-[#003979] text-[#003979] font-semibold rounded-full px-12 py-2 inline-block hover:bg-[#003979] hover:text-white hover:cursor-pointer'>Login</a>
                </div>
            </div>
      </div>

      <div className='w-full md:w-2/5 md:h-[492px] bg-[#003979] text-white px-12 py-36'>  {/* signup Section */}
            <h2 className='text-3xl text-white font-bold mb-2'>Hello, Store!</h2>
            <div className='border-4 w-10 border-white inline-block mb-2' />
            <div className='90%'>
              <p className='text-xl mb-3'>Post jobs and internships for your company</p>
              <p className='text-xl mb-6'>Hire our trained and skilled WEB3 developers</p>
              <p className='mb-10'>expand your business horizon, Join us nows!</p>
            </div>
            <a href='/companySignUp' className='border-2 border-white font-semibold rounded-full px-12 py-2 inline-block hover:bg-white hover:text-[#003979]'>Signup</a>
        </div>

      </div>
    </div>
  )
}

export default Login
