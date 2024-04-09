import React, { useState, useEffect } from 'react';
import { fetchVesterbroBars } from '../api/BarData';

function VesterbroBars() {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    async function fetchBars() {
      try {
        const vesterbroBars = await fetchVesterbroBars();
        // Check if local_results is an array
        if (Array.isArray(vesterbroBars.local_results)) {
          setBars(vesterbroBars.local_results);
        } else {
          console.error('Local results is not an array:', vesterbroBars);
        }
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

              </li>
          ))}
        </ul>
      </div>
  );
}

export default VesterbroBars;
