import React from 'react';

function About() {
    return (
        <div className="about">
            <h3>About</h3>
            <p>
                I am a web developer with a particular interest in making things simple and keeping my code clean.
                I am always looking for new things to learn.
            </p>
            <p>I have an engineering degree in computer science.</p>
            <p><span className={"strong"}>Skills</span>: Angular, React, NodeJS, Java, TypeScript</p>
{/*
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
*/}
        </div>
    );
}

export default About;