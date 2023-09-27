import React, { lazy } from 'react'

const Image = (props) => {
  return (
    <div className=' shadow-md bg-white rounded-3xl p-5'>
        <img 
        src= {props.urls.full} 
        alt={props.user.name}
        loading= "lazy"
        className=' h-60 w-full object-cover rounded-3xl'
        />
    </div>
  )
}

export default Image