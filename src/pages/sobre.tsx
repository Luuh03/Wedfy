import React from 'react';

import '../styles/pages/sobre.css';
import LoggedTopbar from '../components/logged-topbar';
import Footer from '../components/footer';

import banner from '../images/banner-about.svg'

function Sobre() {
  return(
    <div id="sobre-page">
      <LoggedTopbar />
      <header>
        <p>Sobre</p>
      </header>

      <div className="about-body">
        <div className="text-area">
          <h5>Projeto</h5>
          <p>    Nós temos o objetivo de facilitar o acesso entre progamadores e emprendedores que desejam encontrar uma forma de realizar seu projeto ou um projeto em que possa trabalhar</p>
        
          <h5>O que queremos?</h5>
          <p>    Queremos que seja mais fácil para programadores poderem encontrar projetos em que possam trabalhar para desenvolver suas habilidades e ter mais reconhecimento.</p>

          <p>    É também muito comum empreendedores que não sabem programar tentarem encontrar alguém que possa desenvolver o seu projeto, mas não sabem onde ou como procurar.</p>

          <br/>

          <p>    Por isso tivemos essa ideia e estamos colocando ela em prática, para que tenha mais acessibilidadee comunicação entre esses dois públicos e que assim seja mais fácil realizar os objetivosde todos e fazer um mundo melhor e com mais trabalhos</p>
        </div>

        <img src={banner} alt="banner"/>
      </div>
      <Footer />
    </div>
  );
}

export default Sobre;