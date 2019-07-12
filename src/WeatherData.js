import React from 'react';
import './WeatherData.css';

export default function WeatherData({ weather }) {
  return (
    <div className='weather__data'>
      <h3 className='weather__location'>Location: {weather.location.name} / {weather.location.country}</h3>
      <span className='weather__temperature'>Temperature: {weather.current.temp_c}</span>
      <span className='weather__wind'>Wind: {weather.current.wind_mph}</span>
    </div>
  );
};
