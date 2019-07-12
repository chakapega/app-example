import React, { Component } from 'react';
import WeatherSearch from './WeatherSearch';
import WeatherData from './WeatherData';

export default class WeatherPage extends Component {
  state = {
    city: '',
    weather: null
  };
  
  getWeather = () => {
    const { city } = this.state;
    const URL = 'http://api.apixu.com/v1/current.json?key=502e6d2bb7fc49b7b55164834192904&q=';

    fetch(`${URL}` + city)
      .then(response => response.json())
      .then(json => {
        this.setState({
          weather: json
        });
      });
  };

  getCity = e => {
    const selectedCity = e.target.parentElement.children[1].value;
    
    this.setState({
      city: selectedCity
    }, this.getWeather);
  };

  render() {
    const { weather } = this.state;
    const weatherData = this.state.weather && <WeatherData weather={weather} />;
    

    return (
      <div className='weather__page'>
        <WeatherSearch getCity={this.getCity} />
        {weatherData}
      </div>
    );
  };
};
