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
            <div className='flex flex-col flex-wrap items-center justify-center'>
                {products && products.map((shop) => (
                     <div
                         className='flex h-[150px] w-full shadow-xl hover:cursor-pointer mb-4'
                         to={`/shop/${shop._id}`}
                         key={shop._id}
                     >
                     <img src={shop.image.url} alt={shop.shopname} className="h-[150px] w-[150px] object-cover" />
                     <div>
                        <p className="mt-2">{shop.name}</p>
                        <p className=''>{shop.category}</p>
                        <p className=''>{shop.description}</p>

                        <p>Price: Rs {shop.price}</p>
                        <p>Status: {shop.stock > 0 ? "In Stock" : "Out of Stock"}</p>
                     </div>
                    {/* <h1>{shop.name}</h1> */}
                    </div>
                ))}

                {products && products.length === 0 && <p className='flex items-center justify-center text-3xl h-[70vh]'>no items in the shop</p>}

            </div>
        </div>
    )
}

export default Home