import React,{useState} from 'react'
import {IoIosArrowBack} from "react-icons/io"
// {/* {Math.floor((Math.random()*1000000)+1)} */}

const AddItem = ({items, setItems, setState}) => {

    const [stage, setStage] = useState(1);

  return (
    <div>

        <button onClick={()=>{setState("inventory")}} className="flex items-center text-gray-600 hover:text-black"><IoIosArrowBack/> Back</button>

        <form className='flex flex-col justify-center items-center my-12'>
            {/* <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'> */}
                <input type='text' name='name'  placeholder="Item name" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
            {/* </div> */}
                <input type='text' name='type'  placeholder="Item type" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='price'  placeholder="Item price in ₹" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='exp'  placeholder="Expiry date" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='in_inventory'  placeholder="Total in inventory" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='sold'  placeholder="total sold" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <textarea type='text' name='desc' rows={3}  placeholder="Item description" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <p className='my-2'>Upload Image: </p>
                <input type='file' name='image'  placeholder="Item image" accept='image/jpg, image/jpg' className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                
                {stage===1 && <button onClick={()=>{setStage(2)}} className='border-2 border-gray-500 mt-8 text-gray-600 font-semibold rounded-lg px-12 py-2 inline-block hover:bg-gray-500 hover:text-white hover:cursor-pointer'>Add item</button>}
                {stage===2 && <p className='mt-12'>Enter OTP</p>}
                {stage===2 && <input type='text' name='otp'  placeholder="Enter OTP" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />}
                {stage===2 && <button onClick={()=>{setStage(1) }} className='border-2 border-gray-500 mt-8 text-gray-600 font-semibold rounded-lg px-12 py-2 inline-block hover:bg-gray-500 hover:text-white hover:cursor-pointer'>Submit</button>}

        </form>            
    </div>
  )
}

export default AddItem