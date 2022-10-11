import React from 'react';
import './App.css';
import 'bootstrap';
import Index from './components/pages/index';
import Cadastro from './components/pages/cadastro';
import Login from './components/pages/login';
import Propostas from './components/pages/propostas';
import Portfolios from './components/pages/portfolios';
import Servicos from './components/pages/servicos';
import AddServico from './components/pages/addServico';
import ServInspect from './components/pages/serv_inspect';
import perfil_Inspect from './components/pages/perfil_Inspect';
import EditPerfil from './components/pages/editPerfil';
import Avaliacao from './components/pages/avaliacao';
import { BrowserRouter, Route, useLocation } from "react-router-dom";
import AddPortifolio from './components/pages/addPortfolio';
import Chat from './components/pages/chat';
import Navbar from './components/pages/pageComponents/Navbar/Navbar';
import Chat_Profile from './components/pages/pageComponents/chat-mini-profile/chat-profile';
import LoginChecker from './components/pages/pageComponents/loginChecker/LoginChecker';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/propostas" component={Navbar} />
          <Route exact path="/propostas/:propId" component={Navbar} />
          <Route exact path="/portfolios" component={Navbar} />
          <Route exact path="/portfolios/:propId" component={Navbar} />
          <Route exact path="/servicos" component={Navbar} />
          <Route exact path="/" component={Index} />
          <Route exact path="/cadastro" component={Cadastro} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/propostas" component={Propostas} />
          <Route exact path="/portfolios" component={Portfolios} />
          <Route exact path="/portfolios/:propId" component={Portfolios} />
          <Route exact path="/servicos" component={Servicos} />
          <Route exact path="/AddServico" component={AddServico} />
          <Route exact path="/servinspect/:propId" component={ServInspect} />
          <Route exact path="/perfilInspect/:propId" component={perfil_Inspect} />
          <Route exact path="/editPerfil" component={EditPerfil} />
          <Route exact path="/avaliacao" component={Avaliacao} />
          <Route exact path="/addportfolio" component={AddPortifolio} />
          <Route exact path="/chat" component={Chat} />
          <Route path="/:page" render={() => { <div><LoginChecker user={sessionStorage.getItem('user')} /></div> }} />
          <Route path="/propostas/:propId" component={Propostas} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
