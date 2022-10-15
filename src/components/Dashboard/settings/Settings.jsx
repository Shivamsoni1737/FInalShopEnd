import React, {useState} from 'react'
import Navbar from './navbar/Navbar'
import Security from './security/Security'
import Storeprofile from './storeprofile/Storeprofile'
import Userprofile from './userprofile/Userprofile'
import Users from './users/Users'

function Settings() {

  const [navitem, setNavitem] = useState("profile")

  const [UserDetails,setUserDetails] = useState( {
    name: "Raees Alam",
    dob: "12-jan-2022",
    email: "raees786@ameen.com",
    contact: (1079654321),
    address: "Fatehpur, Gujarat -01"
  })

  const [StoreDetails, setStoreDetails] = useState({
    name: "AMMU-NATION",
    description: "Koi dhanda chhota nhi hota or dhande se bada koi dharm nahi hota",
    website: "shopend.netlify.app",
    ratings: (4),
    email: "contact@noammunation.com",
    contact: (2345567891),
    address: "Fatehpur, Gujarat -01",
    gmaps: "demoLink",
    zipcode: (365601),
    daysopened: "Mon-Fri",
    timing: "9AM to 10PM",
  })

  return (
    <>
    <Navbar setNavitem={setNavitem} navitem={navitem} />

      {navitem === "profile" && <div className='p-3 grid grid-cols-1 mt-4 md:mt-8 md:grid-cols-6 gap-6'>
        <div className='col-span-1 md:col-span-2 border shadow-xl rounded-md min-h-[80vh]'>
          <Userprofile user={UserDetails} setUser={setUserDetails} />
        </div>
        <div className='col-span-1 md:col-span-4 border shadow-xl rounded-md min-h-[80vh]'>
          <Storeprofile store={StoreDetails} setStore={setStoreDetails} />
        </div>
      </div>
      }
      {navitem==="security" && <Security />}
      {navitem==="users" && <Users />}
    </>
  )
}

export default Settings
