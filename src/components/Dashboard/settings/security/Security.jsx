import React, { useState } from 'react'
import {MdLockOutline} from 'react-icons/md'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Security = ({UserDetails, setUserDetails}) => {

  const[pass, setPass]=useState(UserDetails.password);
  const[newpass, setNewpass]=useState("");
  const[confirmpass, setConfirmpass]=useState("");

  const[view, setView] = useState(false);
  const[viewnew, setViewnew] = useState(false);
  const[viewconf, setViewconf] = useState(false);
  const[otp, setOtp] = useState("Enter OTP");
  const[viewotp, setViewotp] = useState(false);

  const[state,setState] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(pass && newpass && confirmpass){
      if(pass === UserDetails.password){
        if(newpass === confirmpass){
          UserDetails.password=pass;
          toast.success("OTP sent to your mail");
          setState(2);
        }
        else{
          toast.error("New and Confirm pasword should be same!");
        }
      }
      else{
        toast.error("Current password is invalid!");
      }
    }
    else{
      toast.error("All fields are required!");
    }
  }

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setUserDetails({...UserDetails, password: pass});
    toast.success("Password changed successfully!");
    setState(1);
  }

  return (
    <form className='flex flex-col items-center justify-center min-h-[70vh]'>

      <p className='text-left w-[256px]'>Current password</p>
      <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
        <MdLockOutline className='text-gray-400 m-2' />
        <input type={`${view? "text":"password"}`} value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="Password" className='bg-gray-100 outline-none text-sm flex-1' />
        <button onClick={(e)=>{e.preventDefault(); setView(!view)}}>
          {!view?<AiOutlineEyeInvisible className='text-gray-400 m-2' /> :
            <AiOutlineEye className='text-gray-400 m-2' />
          }
        </button>
      </div>


      <p className='text-left w-[256px] mt-3 mb-1'>New password</p>
      <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
        <MdLockOutline className='text-gray-400 m-2' />
        <input type={`${viewnew? "text":"password"}`} value={newpass} onChange={(e)=>setNewpass(e.target.value)} placeholder="Password" className='bg-gray-100 outline-none text-sm flex-1' />
        <button onClick={(e)=>{e.preventDefault(); setViewnew(!viewnew)}}>
          {!viewnew?<AiOutlineEyeInvisible className='text-gray-400 m-2' /> :
            <AiOutlineEye className='text-gray-400 m-2' />
          }
        </button>
      </div>


      <p className='text-left w-[256px] mt-3 mb-1'>Confirm password</p>
      <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
        <MdLockOutline className='text-gray-400 m-2' />
        <input type={`${viewconf? "text":"password"}`} value={confirmpass} onChange={(e)=>setConfirmpass(e.target.value)} placeholder="Password" className='bg-gray-100 outline-none text-sm flex-1' />
        <button onClick={(e)=>{e.preventDefault(); setViewconf(!viewconf)}}>
          {!viewconf?<AiOutlineEyeInvisible className='text-gray-400 m-2' /> :
            <AiOutlineEye className='text-gray-400 m-2' />
          }
        </button>
      </div>

      { state===1?  <button onClick={handleSubmit} className="border py-2 px-4 hover:bg-gray-100 text-gray-700 rounded-md">Submit</button> :
        <div>
          <p className='text-left w-[256px] mt-3 mb-1'>Enter OTP</p>
          <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
            <MdLockOutline className='text-gray-400 m-2' />
            <input type={`${viewotp? "text":"password"}`} value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder="Password" className='bg-gray-100 outline-none text-sm flex-1' />
            <button onClick={(e)=>{e.preventDefault(); setViewotp(!viewotp)}}>
              {!viewotp?<AiOutlineEyeInvisible className='text-gray-400 m-2' /> :
                <AiOutlineEye className='text-gray-400 m-2' />
              }
            </button>
          </div>

          <button onClick={handleOtpSubmit} className="border py-2 px-4 hover:bg-gray-100 text-gray-700 rounded-md">Submit OTP</button>
        </div>
      }

      <ToastContainer /> 
    </form>
  )
}

export default Security
