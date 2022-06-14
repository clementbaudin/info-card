import React from 'react';
import photo from './photo-cb.jpg';
import email from './mail-logo.svg';
import linkedin from './linkedin-logo.svg'

function Info() {
    return (
        <div>
            <img src={photo}/>
            <div className="info--details">
                <h2>Clément Baudin</h2>
                <span className="info--position">Frontend Developer</span>
                <a href="mailto:clement.baudin@thalesgroup.com">clement.baudin@thalesgroup.com</a>
            </div>
            <div className="info--buttons">
                <a className="button--email" href="mailto:clement.baudin@thalesgroup.com">
                    <img src={email} alt="email logo"/>
                    <span>Email</span>
                </a>
                <a className="button--linkedin" href="https://www.linkedin.com/in/clementbaudin/">
                    <img src={linkedin} alt="linkedin logo"/>
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
    );
}

export default Info;