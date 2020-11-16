import React from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../components/topbar';

import '../styles/pages/login.css';

function Login() {
    return (
        <div id="page-login">
            <Topbar />
            <div className="login-form">
                <h1>Login</h1>

                <div className="input-block">
                    <label htmlFor="">E-mail:</label>
                    <input type="text" />
                </div>

                <div className="input-block">
                    <label htmlFor="">Senha:</label>
                    <input type="text" />
                </div>

                <button className="login-button" type="submit">Logar</button>

                <p>Ainda não possui uma conta? Cadastrar como...</p>

                <div className="buttons-container">
                    <Link className="client-button" to="/cadastroC">Cliente</Link>
                    <Link className="dev-button" to="/cadastroP">Desenvolvedor</Link>
                </div>

            </div>

        </div>
    );
}

export default Login;