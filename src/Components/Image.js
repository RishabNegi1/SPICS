import React from 'react'
import LazyLoad from 'react-lazyload'

const Image = (props) => {
  return (
    <div className=' shadow-md bg-red-100 rounded-3xl p-5'>
      <LazyLoad>
        <img 
        src= {props.urls.full} 
        alt={props.user.name}
        className=' h-60 w-full object-cover rounded-3xl'
        />
      </LazyLoad>
    </div>
  )
}

export default Image