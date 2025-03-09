import React, { useState } from 'react';
const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=<weather-api-key>>&q=${city}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWeather(data);
      setError('');
    } catch (err) {
      setError('Could not fetch weather data');
      setWeather(null);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if (city) {
      fetchWeather();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter city name"
        style={{ marginBottom: '10px' }}
      />
      <button onClick={handleSearch} style={{ marginBottom: '20px' }}>Get Weather</button>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.location.name}</h2>
          <p>{weather.current.condition.text}</p>
          <p>{weather.current.temp_c}°C</p>
          <img src={weather.current.condition.icon} alt="weather icon" />
        </div>
      )}
    </div>
  );
};

export default App;