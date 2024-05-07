import React from 'react';
import './FrederiksbergBars.css'


function NørrebroBars ({ barsData }) {
    return (
        <div>
            <h1>Bars in Nørrebro</h1>
            <div>
                {barsData.map((bar, index) => (
                    <div key={index}>
                        <h2>{bar.title}</h2>
                        <p>{bar.address}</p>
                        <p>Rating: {bar.rating}</p>
                        <p>Price: {bar.price}</p>
                        <p>Open hours: {bar.hours}</p>
                        {/* You can add more information as needed */}
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NørrebroBars;

