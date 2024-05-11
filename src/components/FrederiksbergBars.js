import React from 'react';
import './FrederiksbergBars.css'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function FrederiksbergBars({ barsData }) {
    return (
        <div>
            <h1>Bars in Frederiksberg</h1>
            <div>
                {barsData.map((bar, index) => (
                    <div key={index}>
                        <h2>{bar.title}</h2>
                        <img src={bar.thumbnail} alt="bar"/>
                        <p>{bar.address}</p>
                        <p>Rating: {bar.rating}</p>
                        <p>Price: {bar.price}</p>
                        <h4>Opening Hours</h4>
                        <ul className="opening-hours">
                            {bar.operating_hours && Object.entries(bar.operating_hours).map(([day, hours]) => (
                                <li key={day}>
                                    <span className="day">{capitalizeFirstLetter(day)}:</span> {hours}
                                </li>
                            ))}
                        </ul>
                        <p>Phone Number: {bar.phone}</p>
                        <p>Website: <a href={bar.website} target="_blank" rel="noopener noreferrer">{bar.website}</a></p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FrederiksbergBars;
