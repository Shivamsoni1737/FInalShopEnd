import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ShopForm = () => {

    const navigate= useNavigate()

    const[name, setName] = useState("")
    const[price, setPrice] = useState(null)
    const[description, setDescription] = useState(null)
    const[category, setCategory] = useState(null)
    const[state, setState] = useState(null)
    const[city, setCity] = useState(null)
    const[pincode, setPincode] = useState(null)

    const handleSubmit = () => {
        navigate("/dashboard/profile")
    }


  return (
    <div className='flex items-center min-h-screen justify-center'>
        <form onSubmit={handleSubmit} className=''>
            <p className='text-xl'>Enter shop details</p>

            <input type='text' name='type' value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Shop name" className='bg-gray-100 mt-6 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
            <input type='text' name='price' value={price} onChange={(e)=>setPrice(e.target.value)}  placeholder="GSTIN" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
            <input type='text' name='description' value={description} onChange={(e)=>setDescription(e.target.value)}  placeholder="Description" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
            <input type='text' name='category' value={category} onChange={(e)=>setCategory(e.target.value)}  placeholder="Category" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
            <input type='text' name='state' value={state} onChange={(e)=>setState(e.target.value)}  placeholder="State" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
            <input type='text' name='city' value={city} onChange={(e)=>setCity(e.target.value)}  placeholder="City" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
            <input type='text' name='pin code' value={pincode} onChange={(e)=>setPincode(e.target.value)}  placeholder="Pin code" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />

            <button type='submit' className='border-2 w-full border-gray-500 mt-8 text-gray-600 font-semibold rounded-lg px-12 py-2 inline-block hover:bg-gray-500 hover:text-white hover:cursor-pointer'>Add shop</button>
        
        </form>
    </div>
  )
}

export default ShopForm