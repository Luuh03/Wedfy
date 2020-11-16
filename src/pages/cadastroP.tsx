import React from 'react';
import Topbar from '../components/topbar';
import '../styles/pages/cadastroP.css';

import chooseImg from '../images/chooseImg.svg';

function CadastroProgramador() {
  return(
    <div id="page-registerp">
      <Topbar />
      <h1>Desenvolvedor</h1>

      <form className="form-registerp">
        
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

        <div className="img-language-container">
          <img src={chooseImg} alt="choose img"/>
          
          <label htmlFor="">Selecione sua principal</label> <br/>
          <label>função:</label>
          <div className="input-block">
            <select name="language" id="language">
              <option value=""></option>
              <option value="1">Web design</option>
              <option value="2">Programador fullstack</option>
              <option value="3">Desenvolvedor de banco de dados</option>
              <option value="4">Administrador de sistemas</option>
              <option value="5">Programador mobile</option>
            </select>
          </div>
        </div>

        <button type="submit">Cadastrar</button>

        

      </form>

    </div>
  );
}

export default CadastroProgramador;