// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import ProductCard from "./Components/ProductCard";

import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
              <ProductCard/>
            </BrowserRouter>
        </div>
    );
}

export default App;
