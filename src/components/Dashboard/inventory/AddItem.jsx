import React,{useState} from 'react'
import {IoIosArrowBack} from "react-icons/io"

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// {/* {Math.floor((Math.random()*1000000)+1)} */}

const AddItem = ({items, setItems, setState}) => {

    const [stage, setStage] = useState(1);

    const [newitem, setNewitem] = useState({
        name:"",
        type:"",
        price:"",
        exp:"",
        in_inventory:"",
        sold:"",
        desc:"",
        image:"none",

    })

    const handleAddItem = ()=>{
        toast.success("OTP sent to your e-mail")
        setStage(2) 
    }

    const handleOtpSubmit = () => {
        toast.success("Item added to inventory")
        setState("inventory")
        // setItems(...items, {newitem})
    }
    console.log(newitem);

  return (
    <div className='mt-8'>

        <button onClick={()=>{setState("inventory")}} className="flex items-center text-gray-600 hover:text-black"><IoIosArrowBack/> Back</button>

        <form className='flex flex-col justify-center items-center my-12'>
            {/* <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'> */}
                <input type='text' name='name' onChange={(e)=>{setNewitem(...newitem, newitem.name=e.target.value)}}  placeholder="Item name" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
            {/* </div> */}
                <input type='text' name='type' onChange={(e)=>{setNewitem(...newitem, newitem.type=e.target.value)}}  placeholder="Item type" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='price' onChange={(e)=>{setNewitem(...newitem, newitem.price=e.target.value)}}  placeholder="Item price in ₹" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='exp' onChange={(e)=>{setNewitem(...newitem, newitem.exp=e.target.value)}}  placeholder="Expiry date" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='in_inventory' onChange={(e)=>{setNewitem(...newitem, newitem.in_inventory=e.target.value)}}  placeholder="Total in inventory" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='sold' onChange={(e)=>{setNewitem(...newitem, newitem.sold=e.target.value)}}  placeholder="total sold" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <textarea type='text' name='desc' onChange={(e)=>{setNewitem(...newitem, newitem.desc=e.target.value)}} rows={3}  placeholder="Item description" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <p className='my-2'>Upload Image: </p>
                <input type='file' name='image'  placeholder="Item image" accept='image/jpg, image/jpg' className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                
                {stage===1 && <button onClick={()=>{handleAddItem()}} className='border-2 border-gray-500 mt-8 text-gray-600 font-semibold rounded-lg px-12 py-2 inline-block hover:bg-gray-500 hover:text-white hover:cursor-pointer'>Add item</button>}
                {stage===2 && <p className='mt-12'>Enter OTP</p>}
                {stage===2 && <input type='text' name='otp'  placeholder="Enter OTP" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />}
                {stage===2 && <button onClick={()=>{handleOtpSubmit()}} className='border-2 border-gray-500 mt-8 text-gray-600 font-semibold rounded-lg px-12 py-2 inline-block hover:bg-gray-500 hover:text-white hover:cursor-pointer'>Submit</button>}

        </form>            
    </div>
  )
}

export default AddItem