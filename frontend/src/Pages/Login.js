import React,{useState} from 'react'
import axios from '../api/axios'
import { Link } from 'react-router-dom';

function Login() {  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleLogin = async(e) =>{
        e.preventDefault();

        try{
            const res =await axios.post("/user/login",{email,password});

            localStorage.setItem("token",res.data.token);
            localStorage.setItem("role",res.data.role);

            if(res.data.role === "admin"){
                window.location.href = "/admin";
            }
            else{
                window.location.href = "/user";
            }
        }
        catch(err){
            setError("Invalid email or password");
        }


    }


  return (  
    <div>
       <div className='bg-red-600 w-max mx-auto text-center p-10 mt-10'>
         <h2 className='font-bold text-white underline'>Login Page</h2>
        <form onSubmit={handleLogin} className=''>
         <div className='flex flex-col gap-5 mt-10'>
            <input className='p-2 rounded-2xl' type="text" placeholder='Enter the Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input className='p-2 rounded-2xl' type="password" placeholder='Enter the password' onChange={(e)=>setPassword(e.target.value)}/>
         </div>
         <button className='mt-5 bg-white text-red-500 font-bold px-2 py-1 rounded-xl' type='submit'>Login</button>
         {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
         <p className='mt-5 text-white'>Not Have an Account ? <Link to="/register" className='text-slate-900'>Register Now</Link></p>
       </div>
    </div>
  )
}

export default Login
