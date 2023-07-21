import React, { Component } from 'react'
import home1 from './img/home1.jpg'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SonIlanlar = ({advertisements}) =>  {
    
        
        return (
            <>

<div className="container mx-auto mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {advertisements.map((ilan, index) => (
          <Link key={index} to={`/ilan-detay?id=${ilan.id}`}>
            <div className="bg-white p-4 rounded-lg shadow-lg cursor-pointer">
              <img src={process.env.PUBLIC_URL + `/images/${ilan.photo}`} alt="İlan Fotoğrafı" className="w-full h-48 object-cover mb-2 rounded-lg" />
              <h3 className="text-lg font-semibold mb-2">{ilan.title}</h3>
              <p className="text-gray-700">{ilan.price} ₺</p>
            </div>
          </Link>
                        ))}
                    </div>
                </div>

            </>
        )
        
    
}
export default SonIlanlar;




