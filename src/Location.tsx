import React from 'react';
import france from './france-icon.svg';

function Location() {
    return (
        <div className="about location">
            <p>Based in Paris, France <img src={france} alt="france flag"/></p>



        </div>
    );
}

export default Location;