import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { City, Temp, WeatherContainer } from './WeatherStyle';

// const url = 'https://api.openweathermap.org/data/2.5/weather?q=yangon&units=imperial&appid=d64f2989fb3e55f95d2756da27b7c64f'

const Weather = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // axios.get(url).then((response) => {
        //     console.log(response.data); 
        //     setData(response.data)
        // }).catch((err) => {
        //     console.log(err);
        // })

        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function(position) {
              console.log("Latitude is :", position.coords.latitude);
              console.log("Longitude is :", position.coords.longitude);

                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=d64f2989fb3e55f95d2756da27b7c64f`).then((response) => {
                    console.log(response.data); 
                    setData(response.data)
                }).catch((err) => {
                    console.log(err);
                })

            });
          }

    }, [])
    // console.log(data)
    if ( !data ) return null;
    return (
        <WeatherContainer>
            <Temp>{data.main.temp.toFixed()}°</Temp>
            <City>{data.name}, {data.sys.country}</City>
        </WeatherContainer>
    )
}

export default Weather