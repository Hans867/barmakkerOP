// Main.js

import React from 'react';
import './Main.css';

function HomePage() {
    return (
        <div>
            <header>
                <h1>BARMAKKER</h1>
            </header>
            <main>
                <div className="location-buttons">
                    <a href="/vesterbroBars" className="location-button" id="vesterbro-button">
                        <img src="vesterbro-image.jpg" alt="Vesterbro" />
                    </a>
                    <a href="/nørrebroBars" className="location-button" id="nørrebro-button">
                        <img src="nørrebro-image.jpg" alt="Nørrebro" />
                    </a>
                    <a href="/østerbroBars" className="location-button" id="østerbro-button">
                        <img src="østerbro-image.jpg" alt="Østerbro" />
                    </a>
                    <a href="/frederiksbergBars" className="location-button" id="frederiksberg-button">
                        <img src="østerbro-image.jpg" alt="Frederiksberg" />
                    </a>
                    <a href="/københavnKBars" className="location-button" id="københavnK-button">
                        <img src="østerbro-image.jpg" alt="København K" />
                    </a>

                </div>
                <div className="activities">

                </div>
            </main>
        </div>
    );
}

export default HomePage;
