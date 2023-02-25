
import Search from '../components/home/search'
import dynamic from "next/dynamic";
import { React, useState } from 'react';
import styles from '../styles/Home.module.css'

function Home(props) {

  
  const [lat, setLat] = useState(48.5864696831066); //default lat
  const [lng, setLng] = useState(7.55553407062697); //default lng

  function load_place_on_map(place_id) {
      console.log(place_id)
      if(place_id.value == "1")
      {
          setLat("48");
          setLng("7");
      }
      else
      {
          setLat("7");
          setLng("48");
      }
      
  };

  const MapWithNoSSR = dynamic(() => import("../components/home/map"), {
      ssr: false
    });

  const options = [
      { value: '1', label: 'Chocolate' },
      { value: '2', label: 'Strawberry' },
      { value: '3', label: 'Vanilla' }
    ]



  return (
    <main className={styles.main}>
            <Search 
            places = {options}   
            onChangeCallback = { load_place_on_map }         
            />

            <div id="map" className={styles.map}>
                <MapWithNoSSR 
                    lat={lat} 
                    lng={lng} 
                />
            </div>
    </main>
  )
};

export default Home;