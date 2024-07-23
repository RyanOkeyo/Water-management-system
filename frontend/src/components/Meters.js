import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Meters() {
  const [meters, setMeters] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/meters')
      .then(response => setMeters(response.data))
      .catch(error => console.error('Error fetching meters:', error));
  }, []);

  return (
    <div>
      <h2>Meters</h2>
      <ul>
        {meters.map(meter => (
          <li key={meter._id}>{meter.identifier} - Balance: {meter.balance}</li>
        ))}
      </ul>
    </div>
  );
}

export default Meters;
