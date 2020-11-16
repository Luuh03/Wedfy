import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/pages/landing.css"
import logoImg from '../images/logoWedfy.svg';
import coding from '../images/coding.svg';

function Landing(){
    return(
        <div id="page-landing">
        <div id="content-wrapper">

            <div className="logo-content">
            <img src={logoImg} alt="Wedfy" />
            <main>
                <h1>Deixe a gente</h1>
                <h1>fazer por</h1>
                <p>você!</p>
            </main>
            </div>

            <img className="coding" src={coding} alt="coding" />

            <div className="buttons-container">
            <Link to="/login" className="client-button">
                Solicitar
            </Link>

            <Link to="/login" className="dev-button">
                Desenvolver
            </Link>
            </div>

        </div>
        </div>
    );
}

export default Landing;