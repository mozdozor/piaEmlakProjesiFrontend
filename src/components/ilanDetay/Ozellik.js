import React from 'react'

const Ozellik = ({advertisement}) => {
  return (
    <>
    <div class="text-left mt-1 max-w-2xl text-sm leading-6 text-gray-500 text-xl font-mono "> EVİN ÖZELLİKLERİ
      <ul>
        
        <li>
         İlan Türü : {advertisement.advertisementType}
        </li>
        <li>
         Mülk Türü : {advertisement.estateTypee}
        </li>
        <li>
         Fiyat : {advertisement.price} ₺
        </li>
        <li>
         Metrekare : {advertisement.size}
        </li>
        <li>
          İl : {advertisement.city}
        </li>
        <li>
          İlçe : {advertisement.state}
        </li>
        <li>
          Kat Durumu : {advertisement.floor}
        </li>
        <li>
          Odasayısı : {advertisement.room}
        </li>
        <li>
          Isıtma Durumu : {advertisement.heatingType}
        </li>
        <li>
          Eşya Durumu : {advertisement.isFurniture ? "Eşyalı" : "Eşyasız"}
        </li>
       

      </ul>
    </div>
</>
  )
}

export default Ozellik