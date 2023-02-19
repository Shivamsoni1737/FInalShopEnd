import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { showAllShops } from '../Actions/Shop';
import Loader from './Loader';

const Home = () => {


  const dispatch = useDispatch();
  const { allShops, loading, error } = useSelector(state => state.shop);
  useEffect(()=>{
    dispatch(showAllShops())
    if(error)
    {
      toast.error(error);
    }

  },[allShops,error,dispatch])
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex flex-wrap items-center justify-center'>
        
        {/* {loading && <Loader></Loader>} */}
        {allShops && allShops.map((shop) => (
          <Link
            className='relative shadow-lg rounded-md h-[348px] w-[282px] m-6 hover:cursor-pointer'
            // onClick={() => { setShowModal(true); setMovie(shop) }}
            to={`/shop/${shop._id}`}
            key={shop._id}
          >
            <div className='absolute border border-black top-2 left-3 rounded-full bg-white h-[34px] w-[34px] flex justify-center items-center'>
              {shop.rating}
            </div>
            <img
              src={shop.shopimage.url}
              alt={shop.shopname}
              className='rounded-md h-[348px] w-[282px] object-cover'
            />
            <div className={`absolute bottom-0 bg-white w-full px-1 text-center py-2 rounded-b-md`}>
            <p className="text-xl">{shop.shopname}</p>
            <p>{shop.description}</p>
            </div>
          </Link>
        ))}

        {allShops && allShops.length === 0 && <p className='flex items-center justify-center text-3xl h-[70vh]'>No shops found..</p>}

      </div>
    </div>
  )
}

export default Home