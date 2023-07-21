import React, { Component, useEffect, useState } from "react";
import Aciklama from "../components/ilanDetay/Aciklama";
import Baslik from "../components/ilanDetay/Baslik";
import Photo from "../components/ilanDetay/Photo";
import Contact from "../components/ilanDetay/Iletisim";
import Ozellik from "../components/ilanDetay/Ozellik";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const Detay = () => {

    const [searchParams] = useSearchParams();
    const idIlan = searchParams.get('id')


    const [advertisement, setAdvertisement] = useState([]);


    const fetchData = async () => {
        try {
            // Replace 'API_URL' with the actual URL of your API
            const response = await axios.get(`http://localhost:8080/api/getAdvertisementDetail/${idIlan}`);
            console.log(response.data);
            setAdvertisement(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
       console.log(idIlan);
       fetchData();

    }, [])




    return (
        <div class="flex mb-auto ">
            <div class="w-3/4 ml-2 pt-2 pr-4 space-y-4">
                <div class="border-2 h-4/4"><Photo advertisement={advertisement} /></div>
                <div class="mt-6 border-2 flex flex-col "><Baslik advertisement={advertisement} /></div>
                <div class="mt-6 border-2 flex flex-col "><Aciklama advertisement={advertisement} /></div>
            </div>

            <div class="pt-2">
                <div class="border-2 rounded bg-blue-500"><Contact advertisement={advertisement} /></div>
                <div class="pt-10 h-full"><Ozellik advertisement={advertisement}  /></div>
            </div>
        </div>
    )
}


export default Detay;