import React, { useState, useEffect } from "react";
import Weathercard from "./Weathercard";

const Temp = () => {
    const [searchValue, setSearchValue] = useState('jaipur');
    const [tempInfo, setTempInfo] = useState({});
    const getWeatherInfo = async () => {
        try {
           //let url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&appid=47d5bec50bfc4681cd4920fb56802352`;
            let url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&units=metric&appid=47d5bec50bfc4681cd4920fb56802352`;
            let res = await fetch(url);
            let data = await res.json();

            let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=47d5bec50bfc4681cd4920fb56802352`
            let weatherRes = await fetch(weatherUrl);
            let weatherData = await weatherRes.json();
            const { temp, humidity, pressure } = weatherData.main;
            const degTemp =  (temp - 273.15).toFixed(2);
            const { main: weathermood } = weatherData.weather[0];
            const { name } = weatherData;
            const { speed } = weatherData.wind;
            const { country, sunset, sunrise } = weatherData.sys;

            const myNewWeatherInfo = {
                temp: degTemp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };
            setTempInfo(myNewWeatherInfo);
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect(() => {
    //     getWeatherInfo();
    // }, [])

    return (
        <>
            <div className="wrap">
            <div className="gajraj">
            <h3>Gajraj Weather Information Data </h3>
            </div>
                <div className="search">
                    <input placeholder="Search..." autoFocus id="search"
                    className="searchTerm" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                    <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
                </div>
            </div>
           



            {/* our temp card*/}
            <Weathercard tempInfo={tempInfo} />
        </>
    );
};

export default Temp;