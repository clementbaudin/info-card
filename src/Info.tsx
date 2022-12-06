import React from 'react';
import photo from './photo-cb.jpg';
import cv from './CV-logo.svg';
import linkedin from './linkedin-logo.svg'

function Info() {
    return (
        <div>
            <img src={photo} alt={"Clément"}/>
            <div className="info--details">
                <h2>Clément Baudin</h2>
                <span className="info--position">Full Stack Web Developer</span>
{/*
                <a href="mailto:">mail</a>
*/}
            </div>
            <div className="info--buttons">

{/*
                <a className="button--email" href="mailto:">
                    <img src={cv} alt="email logo"/>
                    <span>Email</span>
                </a>
*/}

                <a className="button--resume" href="http://clementbaudin.fr/uploads/CV_Clément_BAUDIN_FR-EN_version_internet.pdf">
                    <img src={cv} alt="resume logo"/>
                    <span>Resume</span>
                </a>
                <a className="button--linkedin" target={"_blank"} rel={"noreferrer"} href="https://www.linkedin.com/in/clementbaudin/">
                    <img src={linkedin} alt="linkedin logo"/>
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
    );
}

export default Info;