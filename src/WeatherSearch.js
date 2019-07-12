import React from 'react';
import './WeatherSearch.css';

export default function Weather({ getCity }) {
  return (
    <div className='weather__search'>
      <label className="weather__city_search_label" htmlFor="weather__city_search_input">Enter the name of the city in which you want to know the weather</label>
      <input type='text' id='weather__city_search_input'/>
      <button type='button' onClick={getCity} >Show weather</button>
    </div>
  );
};
