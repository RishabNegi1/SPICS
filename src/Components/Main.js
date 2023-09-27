import React, { useEffect, useState } from 'react';
import Image from './Image';
import Footer from './Footer';

const Main = () => {
  const [img, setImg] = useState([])
  const [randomImg, setRandomImg] = useState(null)
  const perPage = 60;

  useEffect(()=>{
    const fetchImg  = async () =>{
      const response = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=${perPage}`)
      const data = await response.json()
      setImg(data)
    }
    fetchImg()
  }, [])

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
      <div className=' h-[60vh] w-full'>
        <div className=' absolute w-full h-[60vh] bg-gradient-to-r from-black'></div>
        <img
         className='object-cover w-screen h-[60vh] ' 
         src={randomImg}
         alt=''
        />

        <div className=' absolute w-full top-[40%]'>
            <p className=' text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold text-lime-50'>The best free stock photos, royalty free</p>
            <p className=' text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold text-lime-50'>images & videos shared by creators.</p>
        </div>
  
      <div className="container mx-auto px-5 2xl:px-0">
        <h1 className="text-slate-800 font-bold text-3xl md:text-4xl lg:text-5xl my-10 lg:mt-20 lg:mb-14">
          Recommended For You
        </h1>

        {!img ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 pb-20 lg:container">
            {img.map((image) => (
              <Image key={image.id} {...image}/>
            ))}
          </div>
        )}
        
      </div>
      <Footer/>
</div>
  )
}

export default Main