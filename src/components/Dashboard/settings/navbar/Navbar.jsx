import React from 'react'

import {ImProfile} from 'react-icons/im';
import {FiUsers} from 'react-icons/fi';
import {MdSecurity} from 'react-icons/md';

const Navbar = ({navitem ,setNavitem}) => {
  return (
    <div className='grid grid-cols-3 text-lg'>
      <button onClick={()=>setNavitem("profile")} className={`flex ${navitem==="profile"? "bg-gray-200" : ""} hover:bg-gray-200 justify-center border py-4 items-center text-center`}>Profile <ImProfile className="ml-1" /> </button>
      <button onClick={()=>setNavitem("security")} className={`flex ${navitem==="security"? "bg-gray-200" : ""} hover:bg-gray-200 justify-center border py-4 items-center text-center`}>Security<MdSecurity className="ml-1"/></button>
      <button onClick={()=>setNavitem("users")} className={`flex ${navitem==="users"? "bg-gray-200" : ""} hover:bg-gray-200 justify-center border py-4 items-center text-center`}>Users <FiUsers className="ml-1" /></button>
    </div>
  )
}

export default Navbar
