import React from 'react'
import './WeatherApp.css'

import search_icon from '../assets/search.png';
import clear_icon from '../assets/Clear.png';
import cloud_icon from '../assets/Cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/windy.png';
import humidity_icon from '../assets/humidity.png';

const WeatherApp = async () => {

  let api_key ="8f0bbb0b36bcfb85db0048ae1c9f8608";

  const search = () => {
    const element =document.getElementsByClassName("");
    if(element[0].value==="")
    {
      return 0;
    }
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();
    const humidity =document.getElementsByClassName("humidity-percent");
    const wind=document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity+ " %";
    wind[0].innerHTML = data.wind.speed+ " km/h";
    temperature[0].innerHTML = data.main.temp+"℃";
    location[0].innerHTML = data.name;


  }

  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='search' />
        <div className="search-icon" onClick={()=>{search()}}>
            <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">24℃</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">18 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
