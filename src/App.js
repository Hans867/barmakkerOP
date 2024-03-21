import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VesterbroBars from './components/VesterbroBars'; // Import the VesterbroBars component

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/VesterbroBars" element={<VesterbroBars />} />
                    {/* Add routes for other areas if needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
