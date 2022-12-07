import React from 'react';
import './style.css';
import Info from './Info';
import About from './About'
import Interests from './Interests';
import Footer from './Footer';
import Location from './Location';
import Skills from './Skills';

function Card() {
    return (
        <div className="card">
            <Info />
            <About />
            <Skills />
            <Interests />
            <Location />
            <Footer />
        </div>
    );
}

export default Card;
