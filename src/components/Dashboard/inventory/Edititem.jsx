import React, { useEffect,useState } from 'react';
import {AiOutlineCloseCircle} from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { editProductDetail, showProductDetail } from '../../../Actions/Shop';
import Loader from '../../Loader';

const Edititem = () => {
  const { loading, error, product} = useSelector((state) => state.product);
  const params=useParams();
  useEffect (()=>{
    dispatch(showProductDetail(params.id))
    setProduct(product)
},[])
//console.log(product);
const oldProduct={
  name:null,
  category:null,
  price:null,
  sold:null,
  stock:null,
  description:null,
  previmage:null,
  image:null
}
const [newProduct,setProduct]=useState(oldProduct);
  // const [name, setName] = useState("");
  // const [category, setCategory] = useState(product.category);
  // const [price, setPrice] = useState(product.price);
  // const [sold, setSold] = useState(product.sold);
  // const [stock, setStock] = useState(product.stock);
  // const [description, setDescription] = useState(product.description);
  // const [previmage, setPrevImage] = useState(product.image.url);
  // const [image, setImage] = useState("");
  const dispatch = useDispatch();
  
const handleImageChange = (value) => {
  const file = value;

  const Reader = new FileReader();
  Reader.readAsDataURL(file);

  Reader.onload = () => {
    if (Reader.readyState === 2) {
      // setPrevImage(Reader.result);

      // setImage(Reader.result);
      setProduct({...newProduct,image:Reader.result});
    }
  };
};
const handleChange = (e) => {
  const { name, value } = e.target;
  if(name==="image"){
    handleImageChange(value); 
  }
  setProduct({ ...newProduct, [name]: value });
  
}
const submitHandler = async (e) => {
  e.preventDefault();
  await dispatch(editProductDetail(params.id,{...newProduct}));
  console.log(newProduct);
};
  return (
    <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      
      {loading? <Loader/>:<div className='p-8 bg-white shadow-lg '>
      <Link to={`/dashboard/inventory`} className='w-full flex justify-end item-right relative'><AiOutlineCloseCircle className='text-2xl right-0 absolute'/></Link>
      <button className='w-full text-right relative'></button>

        {product && <form onSubmit={submitHandler} className='flex flex-col justify-center w-[70%] items-center mt-4'>
            {/* <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'> */}
                <p className='my-2'>Upload Image: </p>
                {/* <input type='file' name='image'  value={newProduct.image} accept='image/jpg, image/jpg' className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' onChange={handleImageChange}/> */}

                <input type='text' name='name' value={newProduct.name} className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' onChange={handleChange}/>
            {/* </div> */}
                <input type='text' name='type' value={newProduct.category} className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' onChange={handleChange}/>
                <input type='number' name='price' value={newProduct.price} className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' onChange={handleChange}/>
                <input type='number' name='sold' value={newProduct.sold} className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' onChange={handleChange} />
                <input type='number' name='stock' value={newProduct.stock} className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' onChange={handleChange}/>
                <textarea type='text' name='description' rows={3}  value={newProduct.description} className='bg-gray-100 w-64 p-2 flex items-center mb-3 outline-none text-sm flex-1' onChange={handleChange}/>
                <button type="submit"className='border-2 border-gray-500 mt-8 text-gray-600 font-semibold rounded-lg px-12 py-2 inline-block hover:bg-gray-500 hover:text-white hover:cursor-pointer'>Update details</button>

        </form>}          
      </div>
      }
    </div>
  )
}

export default Edititem