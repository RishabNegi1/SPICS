import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const Login = () => {
  const [email , setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {user, logIn} = UserAuth()
  const navigate = useNavigate()
  const [randomImg, setRandomImg] = useState()

  const handleSubmit =  async(e)=>{
    e.preventDefault()
    setError('')
    try{
      await logIn(email, password)
      navigate('/')
    }catch(error){
      console.log(error)
      setError(error.message)
    }
  }

  useEffect(()=>{
    const fetchRandomImg = async () => {
      const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`);
      const data = await response.json();
      if (data.urls && data.urls.full) {
        setRandomImg(data.urls.full);
      }
    };
    fetchRandomImg();
  }, [])

  return (
    <div className=' w-full h-screen'>
    <img
      className=' hidden sm:block absolute w-full h-screen object-cover'
       src={randomImg}
       alt='/' />
       <div className=' fixed w-full px-4 py-28'>
        <div className=' max-w-[400px] h-[550px] mx-auto bg-slate-50 text-black'>
         <div className=' max-w-[250px] xl:max-w-[350px] l:max-w-[350px] mx-auto py-16'>
           <h1 className=' text-3xl font-bold'>Welcome Back</h1>
           {error ? 
           <p className=' p-2 bg-red-400 my-2'>
            {error}</p>: null}
           <form 
           onSubmit={handleSubmit}
           className=' w-full my-6 flex flex-col py-4'>
            <input
            onChange={(e)=> setEmail(e.target.value)}
             className=' p-2 my-2 l:p-3 l:my-2 xl:p-3 xl:my-2 bg-gray-200 text-white rounded-3xl'
             type="email"
             placeholder='Email' 
             autoComplete='email'/>
            <input
            onChange={(e)=> setPassword(e.target.value)}
             className=' p-2 my-2 l:p-3 l:my-2 xl:p-3 xl:my-2 bg-gray-200 text-white rounded-3xl'
             type="password"
             placeholder='Password'/>
             <button
              className=' p-2 my-2 l:p-3 l:my-2 xl:p-3 xl:my-2 bg-red-500 rounded-3xl cursor-pointer'>Sign In</button>
             <div className=' my-4 flex justify-between items-center text-base text-gray-600'>
             <p>
              <input 
               className=' mr-2' 
               type='checkbox'/>Remember Me</p>
             <p className='  '>Need Help?</p>
             </div>
             
             <p 
              className=' text-base text-gray-600'>
              New to SPICS?
              <Link to="/join">
              <button className=' text-xl text-black mx-1'>Sign up now.</button>
              </Link>
              </p>
             
           </form>
         </div>
        </div>
       </div>
    </div>
  )
}

export default Login