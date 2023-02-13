import React,{useState} from 'react'
import {IoIosArrowBack} from "react-icons/io"
import cube from "./cube.png"

import { useDispatch, useSelector } from 'react-redux';

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { addProduct } from '../../../Actions/Shop';
// {/* {Math.floor((Math.random()*1000000)+1)} */}

const AddItem = ({setState}) => {

    const dispatch = useDispatch()

    const [image, setImage] = useState(null)
    const [newitem, setNewitem] = useState({
        name:"",
        category:"",
        price:"",
        stock:"",
        sold:"",
        description:"",
    })

    const handleImageChange = (e) => {
        const file = e.target.files[0]

        const Reader = new FileReader();
        Reader.readAsDataURL(file)

        //readyState = 0 => initialState
        //readyState = 1 => processing
        //readyState = 2 => Processed
        Reader.onload = () => {
            if(Reader.readyState === 2) {
                setImage(Reader.result);
            }
        }
    }

    const handleAddItem = ()=>{
        toast.success("OTP sent to your e-mail")
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
                <input type='text' name='category' onChange={(e)=>{setNewitem(...newitem, newitem.category=e.target.value)}}  placeholder="Item categry" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='price' onChange={(e)=>{setNewitem(...newitem, newitem.price=e.target.value)}}  placeholder="Item price in ₹" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='stock' onChange={(e)=>{setNewitem(...newitem, newitem.stock=e.target.value)}}  placeholder="Total in inventory" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='sold' onChange={(e)=>{setNewitem(...newitem, newitem.sold=e.target.value)}}  placeholder="total sold" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <textarea type='text' name='desc' onChange={(e)=>{setNewitem(...newitem, newitem.description=e.target.value)}} rows={3}  placeholder="Item description" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <img className='h-[13rem] w-[13rem] mb-4 object-cover rounded-full' src={image || cube} alt="post" />
                <p className='my-2'>Upload Image: </p>
                <input 
                    type='file' 
                    name='image'  
                    placeholder="Item image" 
                    accept='image/*' 
                    onChange={handleImageChange}
                    className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' 
                />
                
                <button onClick={()=>{handleAddItem()}} className='border-2 border-gray-500 mt-8 text-gray-600 font-semibold rounded-lg px-12 py-2 inline-block hover:bg-gray-500 hover:text-white hover:cursor-pointer'>Add item</button>

        </form>            
    </div>
  )
}

export default AddItem