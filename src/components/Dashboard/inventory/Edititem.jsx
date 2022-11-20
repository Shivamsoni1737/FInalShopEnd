import React,{useState} from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai"

const Edititem = ({showModal, setShowModal, item}) => {

  const [stage, setStage] = useState(1);

  if(!showModal) return null;

  return (
    <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      
      <div className='p-8 bg-white shadow-lg '>

      <button className='w-full text-right relative' onClick={()=>{setShowModal(false)}}><AiOutlineCloseCircle className='text-2xl right-0 absolute'/></button>

        <form className='flex flex-col justify-center w-[70%] items-center mt-4'>
            {/* <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'> */}
                <input type='text' name='name'  placeholder="Item name" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
            {/* </div> */}
                <input type='text' name='type'  placeholder="Item type" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='price'  placeholder="Item price in ₹" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='exp'  placeholder="Expiry date" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='in_inventory' placeholder="Total in inventory" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='sold'  placeholder="total sold" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <textarea type='text' name='desc' rows={3}  placeholder="Item description" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <p className='my-2'>Upload Image: </p>
                <input type='file' name='image'  placeholder="Item image" accept='image/jpg, image/jpg' className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                
                {stage===1 && <button className='border-2 border-gray-500 mt-8 text-gray-600 font-semibold rounded-lg px-12 py-2 inline-block hover:bg-gray-500 hover:text-white hover:cursor-pointer'>Add item</button>}
                {stage===2 && <p className='mt-12'>Enter OTP</p>}
                {stage===2 && <input type='text' name='otp'  placeholder="Enter OTP" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />}
                {stage===2 && <button className='border-2 border-gray-500 mt-8 text-gray-600 font-semibold rounded-lg px-12 py-2 inline-block hover:bg-gray-500 hover:text-white hover:cursor-pointer'>Submit</button>}

        </form>            
      </div>

    </div>
  )
}

export default Edititem