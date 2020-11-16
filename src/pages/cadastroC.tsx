import React from 'react';
import Topbar from '../components/topbar';
import '../styles/pages/cadastroC.css';

import chooseImg from '../images/chooseImg.svg';

function CadastroCliente() {
  return(
    <div id="page-registerc">
      <Topbar />
      <h1>Cliente</h1>

      <form className="form-registerc">
        
        <div className="input-container">
          <div className="input-block">
            <label htmlFor="">Nome:</label><br/>
            <input type="text"/>
          </div>

          <div className="input-block">
            <label htmlFor="">E-mail:</label><br/>
            <input type="text"/>
          </div>

          <div className="input-block">
            <label htmlFor="">Senha:</label><br/>
            <input className="short" type="text"/>
          </div>

          <div className="input-block">
            <label htmlFor="">Telefone:</label><br/>
            <input className="short" type="text"/>
          </div>
        </div>

        <div className="img-container">
          <img src={chooseImg} alt="choose img"/>
          
        </div>

        <button type="submit">Cadastrar</button>

        

      </form>

    </div>
  );
}

export default CadastroCliente;