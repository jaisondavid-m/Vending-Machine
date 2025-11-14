import React,{useEffect, useState} from 'react'
import axios from "../api/axios"
function UserHome() {

    const [products,setProducts]=useState([]);

    const getProducts = async ()=>{
    const res = await axios.get("/user/product");
    setProducts(res.data)};

    useEffect(()=>{
        getProducts();
    },[])


  return (
    <div>
        <h2 className='text-5xl text-white p-5 font-bold bg-red-500 text-center '>Vending Machine</h2>
        <div className='flex flex-wrap gap-5 lg:gap-10 mt-10 justify-center'>
          {products.map((p,i)=>(
            <div key={i} className='border-2 text-center p-5 lg:p-10 flex flex-col justify-between gap-y-6'>
                <div>
                    <h2 className="">{p.product_name}</h2>
                    <h3>${p.product_price}</h3>
                </div>
                <button className='bg-red-500 px-2 py-1 rounded-xl text-white font-bold'>Buy Now</button>
            </div>
          ))}
        </div>
    </div>
    
  )
}

export default UserHome
