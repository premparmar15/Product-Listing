import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import ProductDetailComp from './components/ProductDetailComp';
import ProductListComp from './components/ProductListComp'
import './App.css'

class App extends Component {
    render() {
        return (
        <div className="App">
            
            <Header />
            <Router>
                <Routes>
                <Route exact path="/" element={<ProductListComp />} />
                <Route exact path="/product/:productId" element={<ProductDetailComp />} />
                <Route>404 Not Found!</Route>
                </Routes>
            </Router>
        </div>
        )
    }
}

export default App
