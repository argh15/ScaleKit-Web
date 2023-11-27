import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [weight, setWeight] = useState(null);

  useEffect(() => {
    // Make API call
    axios.get('https://scalekit-backend.onrender.com/api/get-weight', {
      // Add any additional config options if needed
    })
      .then(response => {
        // Assuming the API response has properties 'code', 'data', and 'message'
        if (response.data.code === 200) {
          // Check if the response code is 200 (success)
          setWeight(response.data.data.weight);
        } else {
          console.error('Error in API response:', response.data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array means this effect will only run once after the initial render

  return (
    <div className="App">
      {weight !== null ? (
        <h1>Weight: {weight}</h1>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
