import React, { useState } from 'react';

import axios from 'axios'; // Import Axios

const apiKey = 'fc02d14892b1b91401f2c3cd294a7610';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then((response) => {
        const data = response.data;
        console.log('Weather Data:', data); // Console.log the data
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeatherData}>Search</button>
      </div>
      {weatherData && (
        <div className="weather">
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}&deg;C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
            alt="Weather Icon"
          />
        </div>
      )}
    </div>
  );
}

export default App;
