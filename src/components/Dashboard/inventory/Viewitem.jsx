import React from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai"

const Viewitem = ({showModal, setShowModal, item}) => {

  if(!showModal) return null;

  return (
    <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      
      <div className="bg-white shadow-lg p-8 z-50">
        <button className='w-full text-right relative' onClick={()=>{setShowModal(false)}}><AiOutlineCloseCircle className='text-2xl right-0 absolute'/></button>

        <div className='mt-3 flex flex-col '>
          <img src={item.image} alt={`${item.name}`} className="h-[10rem] object-cover" />
          <p className='my-1'><b>Name:</b>  {item.name}</p>
          <p className='my-1'><b>Type:</b>  {item.type}</p>
          <p className='my-1'><b>Price:</b>  ₹ {item.price}</p>
          <p className='my-1'><b>Sold:</b>  {item.sold}</p>
          <p className='my-1'><b>In inventory:</b>  {item.in_inventory}</p>
          <p className='mt-2'><b>Item description:</b>  {item.desc}</p>
        </div>
      </div>

    </div>
  )
}

export default Viewitem