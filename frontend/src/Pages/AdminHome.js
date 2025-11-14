import React, { useState ,useEffect} from 'react'
import axios from '../api/axios'
function AdminHome() {
    const [product_name,setProduct_name]=useState("")
    const [product_price,setProduct_price]=useState(0)

    const addProducts = async (e)=>{
        e.preventDefault();
        await axios.post("/admin/product", { product_name, product_price },{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});
        alert("Product Added!");
        setProduct_name("");
        setProduct_price("");
    }
    const [products,setProducts]=useState([]);
    
        const getProducts = async ()=>{
        const res = await axios.get("/admin/product");
        setProducts(res.data)};
    
    useEffect(()=>{
       getProducts();
    },[])

  return (
    <div>
        <div className='text-center'>
            <h2 className='text-5xl text-white p-5 font-bold bg-red-500'>Admin Dashboard</h2>
            <h3 className='text-3xl font-mono text-red-500 p-10 font-bold'>Add Product</h3>
            <div className='border border-red-500 p-10 w-max  mx-auto'>
                <form onSubmit={addProducts} className=' flex flex-col gap-y-5'>
                    <input className='border p-4' type="text" value={product_name} onChange={(e)=>setProduct_name(e.target.value)} placeholder='Enter Product Name'/>
                    <input className='border p-4' type="number" value={product_price} onChange={(e)=>setProduct_price(e.target.value)} placeholder='Enter Product Price' />
                    <button className='border bg-red-500 hover:bg-white hover:text-red-500 font-bold hover:border-red-500 text-white p-2 rounded-xl' type="submit" >Add Product</button>
                </form>
                
            </div>
        </div>
        <h2 className='mt-10 text-5xl text-white p-5 font-bold bg-red-500 text-center '>Vending Machine Items</h2>
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

export default AdminHome
