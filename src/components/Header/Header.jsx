import React,{useState} from 'react'
import {BsDropletFill} from "react-icons/bs"

const Header = () => {


  const [active, setActive] = useState(false);

  const gotohome =()=>{
    // navigate("/");
}


  return (
    <nav className="w-full top-0 bg-gray-300 shadow-md fixed text-gray-600">
      <div className="relative py-3 px-3 sm:px-5 flex flex-row items-center justify-between max-w-7xl m-auto nav_container">
        <div onClick={gotohome} className="cursor-pointer">
          <p className='font-bold flex items-center text-xl'>DHANDA PAANI <BsDropletFill className='text-blue-500'/></p>
        </div>
        <div>
          {/* <div className={`nav_dropLinks ${active && location.pathname!="/businessprofile"?'show':'hide'} `}>
              <div className="absolute top-20 left-0 right-0 w-full px-2 rounded-b-md">
                  <ul className="bg-gray-200 flex flex-col items-center text-lg rounded-md transition-all">
                      <li className="p-1 cursor-pointer hover:text-black"><a href="https://community.cryptonaukri.com/" target='_blank' className="hover:text-black">Community</a></li>
                      <li className="p-1 cursor-pointer hover:text-black"><a href="/jobspage" className="hover:text-black">Jobs</a></li>
                      <li className="p-1 cursor-pointer hover:text-black"><a href="/internships" className="hover:text-black">Internships</a></li>
                      <li className="p-1 cursor-pointer hover:text-black"><a href="/aboutus" className="hover:text-black">About us</a></li>
                  </ul>
              </div>
            </div>
            <div className="nav_horizontalLinks" >
              {location.pathname==="/businessprofile" ? <></> : 
                <ul className="flex gap-4">
                  <li className="cursor-pointer hover:text-black hover:underline hover:underline-offset-4"><a href="https://community.cryptonaukri.com/" target='_blank' className="hover:text-black">Community</a></li>
                  <li className="cursor-pointer hover:text-black hover:underline hover:underline-offset-4"><a href="/jobspage" className="hover:text-black">Jobs</a></li>
                  <li className="cursor-pointer hover:text-black hover:underline hover:underline-offset-4"><a href="/internships" className="hover:text-black">Internships</a></li>
                  <li className="cursor-pointer hover:text-black hover:underline hover:underline-offset-4"><a href="/aboutus" className="hover:text-black">About us</a></li>
                </ul>
              }
            </div> */}
        </div>
      </div>
    </nav>
  )
}

export default Header