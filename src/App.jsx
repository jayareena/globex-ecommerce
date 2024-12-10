// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Component/Footer/Footer';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>} />
                
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
