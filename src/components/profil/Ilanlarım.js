import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Ilanlarim = ({ advertisements }) => {
  // Örnek olarak kullanıcı ilanlarını varsayılan bir dizi içinde tutalım

  const [message, setMessage] = useState();

  const deleteAdvertisement = async (adv_id) => {

    await axios.delete(`http://localhost:8080/api/deleteAdvertisement/${adv_id}`)
      .then((response) => {
        console.log(response.data);
        if (!response.data.isSuccess) {
          console.log("hatalı");
          setMessage("İlan silinirken bir hata ile karşılaşıldı")

        } else {
          setMessage("İlan başarıyla silindi")
          window.location.reload();

        }

      });
  }




  return (
    <div className="container mx-auto mt-4">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">İlanlarım</h2>
        <div className="message-div-register">

          {

            message ? (
              <div className="ml-24 warning-container register-message" >
                <span className="warning-icon"></span>
                <p className="warning-text">{message}</p>
              </div>
            ) : null}

        </div>


        {advertisements.map((ilan) => (
          <NavLink to={`/ilan-detay?id=${ilan.id}`}>
          <div key={ilan.id} className="flex items-center border-b py-4">
            <img
              src={process.env.PUBLIC_URL + `/images/${ilan.photo}`}
              alt={ilan.title}
              className="w-20 h-20 object-cover rounded-md mr-4"
            />
            <div className="flex-1">
              <h3 className="text-lg font-bold">{ilan.title}</h3>
              <p className="text-gray-600">{ilan.price} ₺</p>
            </div>
            <div className="flex space-x-2">
              {/* <button className="text-green-500 hover:text-green-600">
                <FaEdit />
              </button> */}
              <button onClick={() => deleteAdvertisement(ilan.id)} className="text-red-500 hover:text-red-600">
                <FaTrash />
              </button>
            </div>
          </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Ilanlarim;
