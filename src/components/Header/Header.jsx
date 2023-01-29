import React,{useState} from 'react'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {GiShoppingBag} from "react-icons/gi"
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {CgProfile} from "react-icons/cg"
import "./header.scss"
import {MdOutlineSpaceDashboard, MdLogout} from 'react-icons/md';
import {AiFillCaretDown} from 'react-icons/ai'
import {IoIosNotifications} from 'react-icons/io'

const Header = ({sidebarOpen,setSidebarOpen}) => {

  const navigate = useNavigate();
  const location = useLocation();

  const [active, setActive] = useState(false);
  const [loginActive, setloginActive] = useState(false);
  const [signupActive, setSignupActive] = useState(false);
  const [ open, setOpen] = useState(false);
  const [ notify, setNotify] = useState(false);

  const gotohome =()=>{
    navigate("/");
  }

  const logout = () => {
    navigate("/");
    toast.success("Logout successful!");
  };

  const toggle = ()=>{
    if(loginActive) setloginActive(false)
    if(signupActive) setSignupActive(false)
    setActive(!active)
  }


  return (
    <nav className="w-full top-0 bg-gray-300 shadow-md fixed text-gray-600">
      <div className="relative py-3 px-3 font-semibold sm:px-5 h-16 flex flex-row items-center justify-between  m-auto nav_container">

        {location.pathname==="/dashboard" ?
          <div onClick={()=> {setSidebarOpen(!sidebarOpen)}} className="hamburger w-7 ml-2 md:hidden cursor-pointer">
            <div className="w-full h-0.5 bg-gray-800 line rounded-md"></div>
            <div className="w-full h-0.5 bg-gray-800 my-1.5 rounded-md"></div>
            <div className="w-full h-0.5 bg-gray-800 rounded-md"></div>
          </div> : <></>
        }

        <div onClick={gotohome} className="cursor-pointer">
          <p className='font-bold flex items-center text-xl'>Dhanda Paani <GiShoppingBag className='text-gray-800 ml-2'/></p>
        </div>
        <div>
          <div className={`nav_dropLinks ${active && location.pathname!=="/dashboard"?'show':'hide'} `}>
              <div className="absolute top-20 left-0 right-0 w-full px-2 rounded-b-md">
                  <ul className="bg-gray-200 flex flex-col items-center text-lg rounded-md transition-all">
                      <li className="p-1 cursor-pointer hover:text-black"><a href="/our-mission" className="hover:text-black">Our mission</a></li>
                      <li className="p-1 cursor-pointer hover:text-black"><a href="/about-us" className="hover:text-black">About us</a></li>
                      <li className="p-1 cursor-pointer hover:text-black"><a href="/our-services" className="hover:text-black">Our services</a></li>
                      <li className="p-1 cursor-pointer hover:text-black"><a href="/why-us" className="hover:text-black">Why us?</a></li>
                  </ul>
              </div>
            </div>
            <div className="nav_horizontalLinks" >
              {location.pathname==="/dashboard" ? <></> : 
                <ul className="flex gap-4">
                  <li className="cursor-pointer hover:text-black hover:underline hover:underline-offset-4"><a href="/our-mission" className="hover:text-black">Our mission</a></li>
                  <li className="cursor-pointer hover:text-black hover:underline hover:underline-offset-4"><a href="/about-us" className="hover:text-black">About us</a></li>
                  <li className="cursor-pointer hover:text-black hover:underline hover:underline-offset-4"><a href="/our-services" className="hover:text-black">Our services</a></li>
                  <li className="cursor-pointer hover:text-black hover:underline hover:underline-offset-4"><a href="/why-us" className="hover:text-black">Why us?</a></li>
                </ul>
              }
            </div>
        </div>

        <div className="flex items-center gap-2">
                    {
                        // need to access from cookies when cookies applied over whole site
                        (location.pathname==="/dashboard") ?
                        <div className="flex relative items-center text-gray-600 gap-2">
                              <div className='hover:cursor-pointer relative hover:text-black'>
                                <div onClick={()=>{setNotify(!notify); setOpen(false)}}>
                                 <IoIosNotifications className='text-2xl mr-2' />
                                </div>
                                { notify &&
                                <div className="bg-white absolute right-4 min-h-[6rem] p-2 text-gray-600 shadow-lg top-8 w-[153px] rounded-lg py-1">
                                  <p>No notifications</p>
                                </div>
                                }
                              </div>

                              <div  className='cursor-pointer hover:text-black'>
                                <div onClick={()=> {setOpen(!open); setNotify(false)}} className="flex items-center relative">
                                  <CgProfile size={30}/>
                                  <AiFillCaretDown size={13}  /> 
                                </div> 
                              </div> 

                              {/* Dropdown Content */}
                              
                              { open &&
                                <div className="bg-white absolute right-4 shadow-lg top-8 w-[153px] rounded-lg py-1">
                                  <div onClick={() => {navigate("/dashboard"); setOpen(!open)} } className="flex flex-row px-3 py-1 text-gray-600 hover:text-black hover:bg-gray-100 hover:cursor-pointer"><MdOutlineSpaceDashboard className="h-6 mr-2" /> Dashboard</div>
                                  <div onClick={()=>{setOpen(!open); logout()} } className="flex flex-row px-3 py-1 text-gray-600 hover:text-black hover:bg-gray-100 hover:cursor-pointer"><MdLogout className="h-6 mr-2" /> Sign out</div>
                                </div>
                              }
                            

                            {/* <div onClick={()=>logout()} className="cursor-pointer hover:text-black">Sign out</div> */}
                        </div>
                        :
                        <div className="flex items-center gap-3">
                            <Link to="/login"><li className="mt-2 flex gap-2 items-center hover:text-black cursor-pointer"><span>Login</span></li></Link>
                            <Link to="/signup"><li className="mt-2 flex gap-2 border border-gray-400 rounded-md p-2 items-center hover:border-black hover:text-black cursor-pointer"><span>Sign up</span></li></Link>
                        </div>
                    }
                    {location.pathname==="/dashboard" ? <></> :
                      <div onClick={toggle} className="hamburger w-7 ml-2 md:hidden cursor-pointer">
                        <div className="w-full h-0.5 bg-gray-800 line rounded-md"></div>
                        <div className="w-full h-0.5 bg-gray-800 my-1.5 rounded-md"></div>
                        <div className="w-full h-0.5 bg-gray-800 rounded-md"></div>
                     </div>
                    }
                </div>
      </div>
    </nav>
  )
}

export default Header