import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/logged-topbar.css';

import logo from '../images/topLogo.svg';
import icon from '../images/icons/loginIcon.svg';

export default function LoggedTopbar() {
  return(
    <div className="logged-topbar">
      <img src={logo} alt="Wedfy" />

      <Link className="link first" to="/projetos">PROCURAR PROJETOS</Link>
      <Link className="link" to="/em-processo">PROJETOS EM ANDAMENTO</Link>
      <Link className="link" to="/sobre">SOBRE</Link>
      <Link className="link last" to="">Usuário</Link>

      <img src={icon} alt="" />
    </div>
  );
}
