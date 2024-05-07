import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import VesterbroBars from './components/VesterbroBars';
import ØsterbroBars from './components/ØsterbroBars';
import NørrebroBars from './components/NørrebroBars';
import FrederiksbergBars from './components/FrederiksbergBars';
import KøbenhavnKBars from './components/KøbenhavnKBars';

import FrederiksbergRepo from "./repositories/FrederiksbergRepo";
import KBenhavnKRepo from "./repositories/KøbenhavnKRepo";
import NørrebroRepo from "./repositories/NørrebroRepo";
import VesterbroRepo from "./repositories/VesterbroRepo";
import ØsterbroRepo from "./repositories/ØsterbroRepo";

import HomePage from "./main/Main";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} /> {/* Render HomePage for the root route */}
                    <Route path="/VesterbroBars" element={<VesterbroBars barsData={VesterbroRepo} />} />
                    <Route path="/ØsterbroBars" element={<ØsterbroBars barsData={ØsterbroRepo} />} />
                    <Route path="/NørrebroBars" element={<NørrebroBars barsData={NørrebroRepo} />} />
                    <Route path="/FrederiksbergBars" element={<FrederiksbergBars barsData={FrederiksbergRepo} />} />
                    <Route path="/KøbenhavnKBars" element={<KøbenhavnKBars barsData={KBenhavnKRepo} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
