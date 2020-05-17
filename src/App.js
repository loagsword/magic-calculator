import React from 'react';

import Header from './components/Header'
import Main from './main'
import Footer from './components/Footer'
import './App.css'


export default function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
