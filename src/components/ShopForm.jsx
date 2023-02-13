import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addShop } from '../Actions/Merchant'
import { myShops } from '../Actions/Shop'

const ShopForm = () => {

    const navigate= useNavigate()
    const dispatch = useDispatch()

    const {loading, message} = useSelector(state => state.shop)

    const[name, setName] = useState("")
    const[gstin, setGstin] = useState(null)
    const[description, setDescription] = useState(null)
    const[category, setCategory] = useState(null)
    const[state, setState] = useState(null)
    const[city, setCity] = useState(null)
    const[pincode, setPincode] = useState(null)

    const handleSubmit = async (e) => {

      e.preventDefault()

      await dispatch(addShop(name, description, category,gstin, state,city, pincode))
      await dispatch(myShops())
      navigate("/dashboard")
        
      // navigate("/dashboard/profile")
    }

    useEffect(()=>{
      if(message){
        toast.success(message)
      }
    },[message])


  return (
    <div className='flex items-center min-h-screen justify-center'>
        <form onSubmit={handleSubmit} className=''>
            <p className='text-xl'>Enter shop details</p>

            <input type='text' name='type' value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Shop name" className='bg-gray-100 mt-6 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
            <input type='text' name='price' value={gstin} onChange={(e)=>setGstin(e.target.value)}  placeholder="GSTIN" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
            <input type='text' name='description' value={description} onChange={(e)=>setDescription(e.target.value)}  placeholder="Description" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
            <input type='text' name='category' value={category} onChange={(e)=>setCategory(e.target.value)}  placeholder="Category" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
            <input type='text' name='state' value={state} onChange={(e)=>setState(e.target.value)}  placeholder="State" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
            <input type='text' name='city' value={city} onChange={(e)=>setCity(e.target.value)}  placeholder="City" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
            <input type='text' name='pin code' value={pincode} onChange={(e)=>setPincode(e.target.value)}  placeholder="Pin code" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />

            <button type='submit' disabled={loading} className='border-2 w-full border-gray-500 mt-8 text-gray-600 font-semibold rounded-lg px-12 py-2 inline-block hover:bg-gray-500 hover:text-white hover:cursor-pointer'>{loading? "Loading..." : "Add Shop"}</button>
        
        </form>
    </div>
  )
}

export default ShopForm