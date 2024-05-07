// Main.js

import React from 'react';
import './Main.css';

function HomePage() {
    return (
        <div>
            <header>
                <h1>Barmakker</h1>
            </header>
            <main>
                <div className="location-buttons">
                    <a href="/vesterbro" className="location-button" id="vesterbro-button">
                        <img src="vesterbro-image.jpg" alt="Vesterbro" />
                    </a>
                    <a href="/nørrebro" className="location-button" id="nørrebro-button">
                        <img src="nørrebro-image.jpg" alt="Nørrebro" />
                    </a>
                    {/* Add more location buttons as needed */}
                </div>
            </main>
        </div>
    );
}

export default HomePage;
