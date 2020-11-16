import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/home.css';
import LoggedTopbar from '../components/logged-topbar';
import Footer from '../components/footer';

import decoding from '../images/icons/decoding.svg';
import list from '../images/icons/list.svg';
import brokenLink from '../images/icons/broken-link.svg';
import lamp from '../images/icons/lamp.svg';
import suitcase from '../images/icons/suitcase.svg';

function Home() {
  return(
    <div id="home-page">
      <LoggedTopbar />
      <header>
        <div className="banner-text">
          <h1>WedFY</h1>
          <p>Faça sua organização começar a usar hoje mesmo a versão gratuita do WedFY.</p>
        </div>
      </header>

      <div className="text-area">
        
        <div className="element">
          <img src={decoding} alt="decoding"/>
          <p>Você pode buscar desenvolver projetos ou até mesmo continua-los.</p>
        </div>

        <div className="element">
          <img className="secondIcon" src={list} alt="list"/>
          <p>Encontre um profissional qualificado para seus projetos.</p>
        </div>
      
      </div>

      <div id="block-container">
        <div className="block">
          <h2>COMPARTILHE</h2>
          <p>Aqui seus projetos ganham vida</p>
          <img src={brokenLink} alt="broken link"/>
        </div>

        <div className="middleBlock">
          <h2 className="middle">INOVAÇÃO</h2>
          <p className="middle">Facilidade de acesso</p>
          <img src={lamp} alt="lamp"/>
        </div>

        <div className="block">
          <h2>TRABALHO</h2>
          <p className="last">Novas chances e oportunidades</p>
          <img src={suitcase} alt="suitcase"/>
        </div>
      </div>

      <div className="purple-block">
        <p>Comece hoje mesmo a desenvolver ou solicitar uma aplicação</p>
          
        <div className="button-container">
          <Link className="button" to="/profissionais">Profissionais</Link>
          <Link className="button" to="/projetos">Projetos</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;