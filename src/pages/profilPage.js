import React , {Component , useEffect, useState} from "react";
import ProfilNavbar from "../components/profil/ProfilNavbar";
import Ilanlarim from "../components/profil/Ilanlarım";
import axios from "axios";

const Profil = () => {

  const [advertisements, setAdvertisements] = useState([]);


    const fetchData = async (user_id) => {
        try {
            // Replace 'API_URL' with the actual URL of your API
            const response = await axios.get(`http://localhost:8080/api/getUserAdvertisements/${user_id}`);
            console.log(response.data);
            setAdvertisements(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(localStorage.getItem("user_id"));

    }, [])

  return (
    <>
      <ProfilNavbar/>
      <Ilanlarim advertisements= {advertisements}/>
    </>
  );
};

export default Profil;
