// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from './Components/ProductCard.jsx';
import DealOfTheDayCard from './Components/DealOfTheDayCard.jsx';
import BlogCard from './Components/BlogCard.jsx';

function App() {
    return (
        <div>
            <BrowserRouter>
                <ProductCard />
                <DealOfTheDayCard />
                <BlogCard />
            </BrowserRouter>
        </div>
    );
}

export default App;
