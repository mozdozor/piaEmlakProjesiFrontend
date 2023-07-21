import React, { Component } from 'react'

const Contact = ({advertisement}) => {

    
    return (
        <>
            <div className="flex gap-x-4">
            {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> */}
            <div className="min-w-0 flex-auto p-2">
              <p className="text-base text-left text-sm font-semibold leading-6 text-white font-mono"></p>
              <p className="text-xl text-left text-sm font-semibold leading-6 text-white font-mono">{advertisement.name}- {advertisement.lastName}</p>
              <p className="text-xl text-left mt-1 truncate leading-5 text-white font-mono">{advertisement.phoneNumber} - {advertisement.email}</p>
            </div>
          </div>
        </>
    )
  }



export default Contact;
