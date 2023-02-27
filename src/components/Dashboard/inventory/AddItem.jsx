import React,{useEffect, useState} from 'react'
import {IoIosArrowBack} from "react-icons/io"
import cube from "./cube.png"
import Loader from '../../Loader';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { addProduct, allProductsOfShop, getShopDetails} from '../../../Actions/Shop';
import { useNavigate, useParams } from 'react-router-dom';

const AddItem = () => {
    const {loading, error,product} = useSelector((state) => state.product);
    const params=useParams();
    const navigate=useNavigate();
    const dispatch = useDispatch()

    useEffect(()=>{
      if(params.id){
      dispatch(getShopDetails(params.id))
      //setNewitem(product)
      }
  },[])

  // useEffect (()=>{
  //   // setNewitem(item)
  // },[item])
  const oldItem={
    name:null,
    category:null,
    price:null,
    sold:null,
    stock:null,
    description:null,
    image:null
  }
  const [newItem, setNewitem]=useState(oldItem);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // if(name==="image"){
    //   handleImageChange(value); 
    // }
    setNewitem({ ...newItem, [name]: value });
    
  }
    // const handleImageChange = (e) => {
    //     const file = e.target.files[0]

    //     const Reader = new FileReader();
    //     Reader.readAsDataURL(file)

    //     //readyState = 0 => initialState
    //     //readyState = 1 => processing
    //     //readyState = 2 => Processed
    //     Reader.onload = () => {
    //         if(Reader.readyState === 2) {
    //             setImage(Reader.result);
    //         }
    //     }
    // }
    
    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(addProduct(params.id,newItem.name,newItem.category,newItem.price,newItem.sold,newItem.stock,newItem.description,newItem.image));
        await dispatch(allProductsOfShop(params.id))
        navigate(`/dashboard/inventory`)
        
      };
    // const handleAddItem = ()=>{
    //     toast.success("OTP sent to your e-mail")
    // }

    // const handleOtpSubmit = () => {
    //     toast.success("Item added to inventory")
    //     setState("inventory")
    //     // setItems(...items, {newitem})
    // }
    // console.log(newItem);

  return (
    <div className='mt-8'>
        {/* onClick={()=>{setState("inventory")}} */}
        <button className="flex items-center text-gray-600 hover:text-black"><IoIosArrowBack/> Back</button>

        {<form onSubmit={submitHandler} className='flex flex-col justify-center items-center my-12'>
            {/* <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'> */}
                <input type='text' name='name' value={newItem.name} onChange={handleChange}  placeholder="Item name" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
            {/* </div> */}
                <input type='text' name='category' value={newItem.category} onChange={handleChange}  placeholder="Item categry" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='price' value={newItem.price} onChange={handleChange}  placeholder="Item price in ₹" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='stock' value={newItem.stock} onChange={handleChange}  placeholder="Total in inventory" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <input type='number' name='sold' value={newItem.sold} onChange={handleChange}  placeholder="total sold" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                <textarea type='text' name='description' value={newItem.description} onChange={handleChange} rows={3}  placeholder="Item description" className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' />
                {/* <img className='h-[13rem] w-[13rem] mb-4 object-cover rounded-full' src={image || cube} alt="post" /> */}
                <p className='my-2'>Upload Image: </p>
                {/* <input 
                    type='file' 
                    name='image'  
                    placeholder="Item image" 
                    accept='image/*' 
                    onChange={handleImageChange}
                    className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' 
                /> */}
                
                <button type="submit" className='border-2 border-gray-500 mt-8 text-gray-600 font-semibold rounded-lg px-12 py-2 inline-block hover:bg-gray-500 hover:text-white hover:cursor-pointer'>Add item</button>

        </form> }           
    </div>
  )
}

export default AddItem