import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const Join = () => {
  const [email , setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signUp} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit =  async(e)=>{
    e.preventDefault()
    try{
      await signUp(email, password)
      navigate('/')
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className=' w-full h-screen'>
    <img
      className=' hidden sm:block absolute w-full h-screen object-cover'
       src="https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       alt='/' />
       <div className=' fixed w-full px-4 py-28 z-50'>
        <div className=' max-w-[400px] h-[550px] mx-auto bg-slate-50 text-black'>
         <div className=' max-w-[320px] mx-auto py-16'>
           <h1 className=' text-3xl font-bold'>Join SPICS Family</h1>
           <form onSubmit={handleSubmit} className=' w-full my-6 flex flex-col py-4'>
            <input
            onChange={(e)=> setEmail(e.target.value)}
             className=' p-3 my-2 bg-gray-800 text-white rounded-3xl'
             type="email"
             placeholder='Email' 
             autoComplete='email'/>
            <input
            onChange={(e)=> setPassword(e.target.value)}
             className=' p-3 my-2 bg-gray-800 text-white rounded-3xl'
             type="password"
             placeholder='Password' 
             autoComplete='email'/>
             <button className=' my-6 py-3 bg-red-500 rounded-3xl cursor-pointer'>Create an account</button>
             <div className=' my-4 flex justify-between items-center text-base text-gray-600'>
             <p>
              <input 
               className=' mr-2' 
               type='checkbox'/>Remember Me</p>
             <p className='  '>Need Help?</p>
             </div>
             
             <p 
              className=' text-base text-gray-600'>
              Already a Member? 
              <Link to="/login">
              <button className=' text-xl text-black mx-1'>SignIn.</button>
              </Link>
              </p>
             
           </form>
         </div>
        </div>
       </div>
    </div>
  )
}

export default Join