import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/emProcesso.css';
import LoggedTopbar from '../components/logged-topbar';
import Footer from '../components/footer';

function emProcesso () {
  return (
    <div id="process-page">
      <LoggedTopbar />

      <div className="search-body">

        <form id="search-projects"></form>
        
        <div className="search-container">
          <p>Buscar projetos:</p>
          <select name="project-type" id="project-type">
            <option value="">Selecione uma categoria de projeto</option>
            <option value="1">Site comercial</option>
            <option value="2">Delivery app</option>
            <option value="3">Game mobile</option>
            <option value="4">Game desktop</option>
          </select>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default emProcesso;