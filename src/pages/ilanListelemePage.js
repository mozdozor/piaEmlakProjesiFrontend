import React, { Component, useState, useEffect } from "react";
import Menu from '../components/ilanListeleme/Menu'
import axios from "axios";

const Liste = () => {
  const [advertisements, setAdvertisements] = useState([]);


  const fetchData = async () => {
      try {
          // Replace 'API_URL' with the actual URL of your API
          const response = await axios.get("http://localhost:8080/api/getAllAdvertisement");
          console.log(response.data);
          setAdvertisements(response.data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  useEffect(() => {
      fetchData();

  }, [])


  return (
    <div>
      <Menu advertisements={advertisements} />
    </div>
  );
};

export default Liste;
