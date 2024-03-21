import React, { useState, useEffect } from 'react';
import { fetchVesterbroBars } from '../api/BarData';

function VesterbroBars() {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    async function fetchBars() {
      try {
        const vesterbroBars = await fetchVesterbroBars();
        setBars(vesterbroBars.local_results);
      } catch (error) {
        console.error('Error fetching bars:', error);
      }
    }

    fetchBars();
  }, []);

  return (
    <div>
      <h2>Vesterbro Bars</h2>
      <ul>
        {bars.map((bar, index) => (
          <li key={index}>
            <h3>{bar.title}</h3>
            <p>Address: {bar.address}</p>
            <p>Rating: {bar.rating}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VesterbroBars;
