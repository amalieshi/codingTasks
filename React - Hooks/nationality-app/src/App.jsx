import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [nationality, setNationality] = useState(null);
  const inputRef = useRef(null);

  const fetchNationality = async () => {
    if (name.trim() === '') return;
    try {
      const response = await fetch(`https://api.nationalize.io?name=${name}`);
      const data = await response.json();
      if (data.country && data.country.length > 0) {
        setNationality(data.country[0]);
      } else {
        setNationality(null);
      }
    } catch (error) {
      console.error('Error fetching nationality:', error);
      setNationality(null);
    }
  };

  return (
    <div className="App">
      <h1>Nationality Predictor</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
        autoFocus
        placeholder="Enter name"
      />
      <button onClick={fetchNationality}>Predict Nationality</button>
      {nationality && (
        <div>
          <h2>Prediction:</h2>
          <p>Country ID: {nationality.country_id}</p>
          <p>Probability: {nationality.probability}</p>
        </div>
      )}
    </div>
  );
}

export default App;