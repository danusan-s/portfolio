// import { useState } from 'react'
import './App.css'

function App() {

    return (
        <>
            <div id="nav-bar">
                <a href="#about">About me</a>
                <a href="#projects">Projects</a>
                <a href="#interests">Interests</a>
                <a href="#contact">Contact me</a>
            </div>
            <div id="main-container">
                <div id="about" className="sub-section">
                    <h1 id="hero-text">Hi, my name is Danusan</h1>
                    <p id="hero-subtitle">I'm a computer engineering undergrad</p>
                </div>
                <div id="projects" className="sub-section"></div>
                <div id="interests" className="sub-section"></div>
                <div id="contact" className="sub-section"></div>
            </div>
            <footer>
                <p>Color palette inspired by catpucchin</p>
            </footer>
        </>
    )
}

export default App
