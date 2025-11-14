import React, { useState } from 'react'
import axios from '../api/axios'    
import { Link } from 'react-router-dom';

function Register() {


    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [message, setMessage] = useState("")

    const handleRegister = async (e)=>{
        e.preventDefault();

        try{
            const res = await axios.post("/auth/register",{email,password});
            setMessage("User Registered Successfully!");
        }
        catch(err){
            setMessage("User already exists or error occurred.");
        }
    }

  return (
    <div className='bg-red-600 w-max mx-auto text-center p-10 mt-10'>
       <h2 className='font-bold text-white underline'>Register Page</h2>
       <form onSubmit={handleRegister}>
         <div className='flex flex-col gap-5 mt-10'>
            <input className='p-2 rounded-2xl' type="email" value={email} placeholder='Enter the Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input className='p-2 rounded-2xl' type="password" value={password} placeholder='Set Password' onChange={(e)=>setPassword(e.target.value)}/>
         </div>
         <button className='mt-5 bg-white text-red-500 font-bold px-2 py-1 rounded-xl' type="submit">Register Now</button>
       </form>
       {message && <p style={{ color: "green" }}>{message}</p>}
        <p className='mt-5 text-white'>Already Have an Account ? <Link to="/" className='text-slate-900'>Login Now</Link></p>
    </div>
  )
}

export default Register