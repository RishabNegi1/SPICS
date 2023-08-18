import React from 'react';

const Main = ({ photos }) => {
  return (
      <div className=' h-[60vh] w-full'>
        <div className=' absolute w-full h-[60vh] bg-gradient-to-r from-black'></div>
        <img
         className='object-cover w-screen h-[60vh] ' 
         src={`https://images.pexels.com/photos/1632780/pexels-photo-1632780.jpeg`}
         alt=''
        />

        <div className=' absolute w-full top-[40%]'>
            <p className=' text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold text-lime-50'>The best free stock photos, royalty free</p>
            <p className=' text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold text-lime-50'>images & videos shared by creators.</p>
        </div>

      <div className='font-serif'>
      <h1 className=' font-bold text-2xl md:text-3xl underline mt-10'>GALLERY</h1>
        <div className=' mt-10 max-w-[1360px] mx-auto lg:grid grid-cols-3 grid-rows-2 lg:w-[70%] md:w-[60%] sm:w-[70%] items-center'>
        {photos?.map((photo, index) => (
        <img
          className=' w-[100%] h-[100%] object-cover p-2'
          key={index}
          src={photo.preview}
          alt=''
        />
      ))}
    </div>
        </div>
</div>
  )
}

export default Main