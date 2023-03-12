import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { allProductsOfShop } from '../Actions/Shop';
import Loader from './Loader';

const Home = () => {


    const dispatch = useDispatch();
    const params = useParams();
    const { products, loading, error } = useSelector(state => state.product);

    useEffect(() => {
        // dispatch(allProductsOfShop(params.id))
        if (error) {
            toast.error(error);
        }
        dispatch({
            type: "clearErrors"
        })

    }, [error])

    useEffect(() => {
        dispatch(allProductsOfShop(params.id))
    }, [])

    console.log(products);
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='flex flex-wrap items-center justify-center'>
                {products && products.map((shop) => (
                    // <Link
                    //     className='relative shadow-lg rounded-md h-[348px] w-[282px] m-6 hover:cursor-pointer'
                    //     to={`/shop/${shop._id}`}
                    //     key={shop._id}
                    // >
                    //     <div className='absolute border border-black top-2 left-3 rounded-full bg-white h-[34px] w-[34px] flex justify-center items-center'>
                    //         {shop.rating}
                    //     </div>
                    //     <img
                    //         src={shop.shopimage.url}
                    //         alt={shop.shopname}
                    //         className='rounded-md h-[348px] w-[282px] object-cover'
                    //     />
                    //     <div className={`absolute bottom-0 bg-white w-full px-1 text-center py-2 rounded-b-md`}>
                    //         <p className="text-xl">{shop.shopname}</p>
                    //         <p>{shop.description}</p>
                    //     </div>
                    // </Link>
                    <h1>{shop.name}</h1>
                ))}

                {products && products.length === 0 && <p className='flex items-center justify-center text-3xl h-[70vh]'>No shops found..</p>}

            </div>
        </div>
    )
}

export default Home