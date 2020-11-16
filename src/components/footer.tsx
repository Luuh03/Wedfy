import React from 'react';

import '../styles/components/footer.css';

export default function Footer() {
  return(
    <div className="footer-container">
      <div className="topicos">
          <div className="topico">
            <h5>Novidades</h5>
            <p>Ideias</p>
            <p>Clientes novos</p>
          </div>

          <div className="topico">
            <h5>Profissionais</h5>
            <p>Web design</p>
            <p>Programadores no geral</p>
            <p>Desenvolvedor de banco de dados</p>
            <p>Administrador de sistemas</p>
            <p>Programadores mobile</p>
          </div>
      </div>

      <div className="footer">
        <p>Português-Brasil</p>
        <p className="end">Entre em contato</p>
        <p>©Wedfy</p>
      </div>
    </div>
  );
}