import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { allProductsOfShop } from '../Actions/Shop';
import { addToCart, getCartDetails } from '../Actions/User';
import Loader from './Loader';
import { AiOutlineMinusCircle, AiOutlinePlusCircle, AiOutlineDelete, AiOutlineCloseCircle } from 'react-icons/ai';
// import { AiOutlineArrowLeft } from 'react-icons/ai';

const Cart = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { products, loading, error } = useSelector(state => state.product);
    const { cart, message } = useSelector(state => state.user);
    const [item, setItem] = useState(
        // [
        //     { id: "fjlkvsdsd", imageUrl: 'https://res.cloudinary.com/dmuh5orcw/image/upload/v1683395966/product/kntc0bd57oa04dkixpwg.png', name: "Teddy Bear", category: "toys", description: "Brown Teddy Bear for Kids", cost: 200, count: 1 },
        //     { id: "fjlkvsdsd", imageUrl: 'https://res.cloudinary.com/dmuh5orcw/image/upload/v1683478084/product/apovg3otbrob2nmmdbxa.jpg', name: "Cube", category: "toys", description: "Rubix's cube", cost: 100, count: 3 }
        // ]

    )

    const [total, setTotal] = useState(0);
    const [open, setOpen] = useState(false);
    const [todelete, setTodelete] = useState(null);


    const handleAdd = (id) => {
        const itemToIncrease = item.filter((item) => item.id === id)[0];
        const quantity = itemToIncrease.count + 1;
        // routetoApi(itemid, quantity)
    }

    const handleRemove = (id) => {
        const itemToIncrease = item.filter((item) => item.id === id)[0];
        const quantity = itemToIncrease.count - 1;
        // routetoApi(itemid, quantity)
    }

    useEffect(() => {
        dispatch(getCartDetails())
    }, [])

    useEffect(() => {
        console.log("Card madarchod", cart)
        setItem(cart.products)
        console.log("Card", item)
    }, [cart])


    return (
        <div className='m-12 mt-24'>
            <div className='flex justify-between mb-10'>
                <p className='text-xl text-bold'>Your Cart items</p>
                <button className="border rounded py-2 px-4 gap-2" onClick={() => { window.location.href = "/" }}>
                    {/* <AiOutlineArrowLeft /> */}
                    Add more items
                </button>
            </div>
            {item ?
                <div className="flex flex-col max-w-md m-auto gap-6">
                    {item.map((item) => {
                        return (
                            <>
                                <div key={item.id} className="flex flex-row shadow-sm justify-start items-center h-[120px] p-2 gap-2 mb-2">
                                    <div>
                                        <img src={item.imageUrl} alt={item.name} className="h-[50px] w-[50px] object-cover mr-4" />
                                        <p className="text-bold mr-4 mt-2">Rs {item.cost} /-</p>
                                        <button className='flex border px-2 items-center my-3 border-red-500 hover:border-red-700 hover:bg-red-200 rounded-lg' onClick={() => { setOpen(true); setTodelete(item) }}>
                                            <p className='mr-1'>Remove</p>
                                            <AiOutlineDelete fontSize="20px" /></button>
                                    </div>
                                    <div className='flex flex-col' style={{ flex: 1 }}>
                                        <p className='text-bold'>{item.name}</p>
                                        <p className='text-gray-500'>{item.category}</p>
                                    </div>
                                    <div className='flex mr-4 gap-1'>
                                        <button onClick={() => { handleRemove(item.id) }}><AiOutlineMinusCircle fontSize="20px" color="green" /></button>
                                        <p className='text-xl'>{item.count}</p>
                                        <button onClick={() => { handleAdd(item.id) }}><AiOutlinePlusCircle fontSize="20px" color="green" /></button>
                                    </div>
                                    <p className=''>Rs {item.cost * item.count} /-</p>
                                </div>
                                <ConfirmDelete open={open} setOpen={setOpen} item={todelete} />
                            </>
                        )
                    })}
                    {item && <div>
                        <hr class="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <div className="flex flex-row justify-between items-center h-[80px] p-2 gap-2 mb-2">
                            <button className="flex border p-2 border-green-500 rounded-lg bg-green-200">
                                <p>Place Order</p>
                            </button>
                            <div className="flex">
                                <p className="text-bold">Total Price</p>
                                <p className="mx-4">Rs {total} /-</p>
                            </div>
                        </div>
                    </div>}
                </div>
                :
                <p className="text-xxl flex justify-center">Your Cart is empty, add items</p>
            }
        </div >
    )
}

export default Cart

const ConfirmDelete = ({ open, setOpen, item }) => {
    const deleteTheProduct = (item) => {
        const quantity = 0;
        // routetoApi(item.id, quantity)
    }

    return (
        item && open && <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>

            <div className="bg-white shadow-lg p-8 z-50">
                <div className='flex flex-col '>
                    <p>Are you sure you want to remove {item.name}?</p>
                </div>
                <div className='flex justify-between items-center'>
                    <button onClick={() => { setOpen(false) }} className="bg-green-600 w-[7 rem] text-white px-2 py-1 rounded-lg mt-4 hover:bg-green-800">Keep</button>
                    <button onClick={() => { deleteTheProduct(item) }} className="bg-red-600 w-[5rem] text-white px-2 py-1 rounded-lg mt-4 hover:bg-red-800">Remove</button>
                </div>
            </div>


        </div>
    )
}