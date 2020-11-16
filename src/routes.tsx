import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import CadastroProgramador from './pages/cadastroP';
import CadastroCliente from './pages/cadastroC';
import Home from './pages/home';
import Sobre from './pages/sobre';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/cadastroP" component={CadastroProgramador} />
                <Route path="/cadastroC" component={CadastroCliente} />
                <Route path="/home" component={Home} />
                <Route path="/sobre" component={Sobre} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;