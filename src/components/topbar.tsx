import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/topbar.css';

import logo from '../images/topLogo.svg';
import icon from '../images/icons/loginIcon.svg';

export default function Topbar(){
  return(
    <div className="top-bar">
      <img src={logo} alt="Wedfy" />

      <div className="center">
        <Link className="link" to="/home">PÁGINA INICIAL</Link>
        <Link className="link" to="/sobre">SOBRE</Link>
      </div>

      <div className="last">
        <Link className="link" to="/login">LOGAR</Link>
        <img src={icon} alt="" />
      </div>

    </div>
  );
}
