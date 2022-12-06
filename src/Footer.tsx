import React from 'react';
import twitter from './twitter-icon.svg';
import fb from './facebook-icon.svg';
import insta from './instagram-icon.svg';
import github from './github-icon.svg';

function Footer() {
    return (
        <div className="footer">
{/*
            <a href="https://twitter.com/">
                <img src={twitter} alt="twitter icon"/>
            </a>
            <a href="https://www.facebook.com/">
                <img src={fb} alt="facebook icon"/>
            </a>
            <a href="https://www.instagram.com/">
                <img src={insta} alt="instagram icon"/>
            </a>
*/}
            <a href="https://github.com/clementbaudin">
                <img src={github} alt="github icon"/>
            </a>

        </div>
    );
}

export default Footer;