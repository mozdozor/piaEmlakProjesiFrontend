import React, {Component , useEffect, useState} from "react";
import Search from "../components/anasayfa/Search";
import SonIlanlar from "../components/anasayfa/SonIlanlar";
import axios from "axios";



const Home = () =>{


    const [advertisements, setAdvertisements] = useState([]);


    const fetchData = async () => {
        try {
            // Replace 'API_URL' with the actual URL of your API
            const response = await axios.get("http://localhost:8080/api/getLastTenAdvertisement");
            console.log(response.data);
            setAdvertisements(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();

    }, [])

  
        return(
            <div>
                <Search/>
                <SonIlanlar advertisements={advertisements}/>
            </div>
        )
    
}

export default Home;