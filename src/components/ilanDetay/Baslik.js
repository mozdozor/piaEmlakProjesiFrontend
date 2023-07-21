import React, { Component } from 'react'

const Baslik = ({advertisement}) => {

    
    return (
      <div className="flex-grow">
        <h4 className="text-left font-semibold leading-7 text-gray-900 text-3xl font-mono">{advertisement.title}</h4>
      </div>
        
    )
    
  }



export default Baslik;
