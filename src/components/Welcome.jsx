import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowUpRight, BsShopWindow} from "react-icons/bs"

const Welcome = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <Link to="/" className='border flex flex-col items-center justify-center hover:shadow-xl transition-all duration-700 hover:scale-110 hover:bg-gray-100 text-xl p-12 rounded-md'>
        <p className='mb-3'>Continue to Shopify</p>
        <BsArrowUpRight />
      </Link>
      <p className='mx-8'>OR</p>
      <Link to="/list-shop" className='border flex flex-col items-center justify-center hover:shadow-xl transition-all duration-700 hover:scale-110 hover:bg-gray-100 text-xl p-12 rounded-md '>
        <p className='mb-3'>List your shop/business</p>
        <BsShopWindow />
      </Link>
    </div>
  )
}

export default Welcome
