import React, {useState} from 'react'
import Storeprofile from './storeprofile/Storeprofile'
import Userprofile from './userprofile/Userprofile'

function Profile() {

  const [UserDetails,setUserDetails] = useState( {
    name: "Raees Alam",
    dob: ("12-jan-2022"),
    email: "raees786@ameen.com",
    contact: "0123456789",
    address: "Fatehpur, Gujarat -01"
  })

  const [StoreDetails, setStoreDetails] = useState({
    storename: 'Apni duniya',
    description: "Koi dhanda chhota nhi hota or dhande se bada koi dharm nahi hota"
  })

  return (
    <div className='p-3 grid grid-cols-1 mt-8 md:grid-cols-5 gap-6'>
      <div className='col-span-2 border rounded-md min-h-[80vh]'>
        <Userprofile user={UserDetails} setUser={setUserDetails} />
      </div>
      <div className='col-span-3 border rounded-md min-h-[80vh]'>
        <Storeprofile store={StoreDetails} setStore={setStoreDetails} />
      </div>
    </div>
  )
}

export default Profile
