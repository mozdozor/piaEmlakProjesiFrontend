import React, { Component } from 'react'
import resim from "./img/ev1.jpg"

const Photo = ({advertisement}) => { 
 
    
    return (
        <>
        <div class="justify-center ">
          <img class="object-cover w-full"  src={process.env.PUBLIC_URL + `/images/${advertisement.firstImagePath}`}/>
        </div>
        </>
    )
  }



export default Photo;
