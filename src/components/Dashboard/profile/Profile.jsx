import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMerchantProfile } from '../../../Actions/Merchant'

import Storeprofile from './storeprofile/Storeprofile'
import Userprofile from './userprofile/Userprofile'

const Profile = () => {
  const dispatch = useDispatch()
  const params=useParams();
  
  const {merchant}=useSelector(state=>state.merchant)
  const {shop, loading} = useSelector(state => state.shop)
  //console.log(params.id);
  useEffect  (()=>{
    dispatch(getMerchantProfile())
},[])
    console.log(merchant);
    // const [UserDetails, setUserDetails] = useState({
    //     name: "",//merchant.name,
    //     dob: "12-jan-2022",
    //     email: "",// merchant.email,
    //     contact: (1079654321),
    //     address: "Fatehpur, Gujarat -01"
    //   })
    
    //   const [StoreDetails, setStoreDetails] = useState({
    //     name: "AMMU-NATION",
    //     description: "Got some rare things on sale, stranger",
    //     website: "shopend.netlify.app",
    //     ratings: (4),
    //     email: "contact@noammunation.com",
    //     contact: (2345567891),
    //     address: "Fatehpur, Gujarat -01",
    //     gmaps: "demoLink",
    //     zipcode: (365601),
    //     daysopened: "Mon-Fri",
    //     timing: "9AM to 10PM",
    //   })
    

  return (
    <div>
        {<div className='p-3 grid grid-cols-1 mt-4 md:mt-8 md:grid-cols-6 gap-6'>
        <div className='col-span-1 md:col-span-2 border shadow-xl rounded-md min-h-[80vh]'>
         {merchant && <Userprofile merchant={merchant}/>}
        </div>
        <div className='col-span-1 md:col-span-4 border shadow-xl rounded-md min-h-[80vh]'>
        {shop && <Storeprofile shop={shop}/>}
        </div>
      </div>
      }
    </div>
  )
}

export default Profile