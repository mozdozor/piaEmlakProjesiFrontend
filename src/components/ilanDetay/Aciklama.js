import React, { Component } from 'react'

const Aciklama = ({advertisement}) => {
 
    return (
        <>
          <div className='flex-grow'>
            <p className="text-left font-semibold leading-7 text-gray-900 text-3xl font-mono">
            İlan Açıklaması: {advertisement.advContent}</p>
          </div>
        </>
    )
  
}


export default Aciklama;
