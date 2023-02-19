import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allProductsOfShop, myShops } from '../../Actions/Shop';

import {IoMdArrowDropdown, IoMdArrowDropup} from "react-icons/io"
import {BsPlusCircle} from "react-icons/bs"
import { Link, useLocation } from 'react-router-dom';

const ShopDropdown = () => {

    const dispatch = useDispatch()
    const location = useLocation()
    const {shops} = useSelector(state => state.shop)
    const {isAuthenticated} = useSelector(state => state.user)

    const [ shop, setShop] = useState(null);
    // console.log(shop)
    const [ openShopBar, setOpenShopBar] = useState(false);

    const clickHandler = (item) => {
        setShop(item)
        // console.log(item)
        setOpenShopBar(!openShopBar);
        dispatch(allProductsOfShop(item._id))
    }

    useEffect(()=>{
        dispatch(myShops())
        if(shops){
            setShop(shops[0])
        }
        shops && shops[0] && dispatch(allProductsOfShop(shops[0]._id))
    },[])

  return (!isAuthenticated ? <></> :
    <div className={`text-lg w-full relative ${location.pathname==="/dashboard/inventory"?"block" : 'hidden' } `}>
        { <div onClick={()=>setOpenShopBar(!openShopBar)} className="hover:cursor-pointer flex items-center">
            {shop? shop.shopname : 'No shop found'}
            {openShopBar ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>}
        { <div className="bg-white w-full absolute right-4 shadow-lg top-8 rounded-lg">
                {openShopBar && shops && shop && shops.map((item)=>(
                    <div 
                        key={item._id}
                        onClick={()=>clickHandler(item)} 
                        className="flex flex-row px-3 py-1 text-gray-600 hover:text-black hover:bg-gray-100 hover:cursor-pointer"
                    > 
                        {item.shopname}
                </div>))}
                {openShopBar && <Link
                    to="/list-shop"
                    className="flex px-3 py-1 text-gray-600 items-center hover:text-black hover:bg-gray-100 hover:cursor-pointer"
                > 
                    Add Shop <BsPlusCircle className='ml-2' />
                </Link>}
            </div>
        }
    </div>
  )
}

export default ShopDropdown