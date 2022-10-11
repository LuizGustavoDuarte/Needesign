
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/js/dist/dropdown';
import logoSvg from './logo.svg';
import React from 'react';
import LoginChecker from '../loginChecker/LoginChecker';
import { Redirect } from 'react-router';

class Navbar extends React.Component {




    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            activePage: this.props.activePage
        }
    }

    hamburguer = () => {

        if (!this.state.navHamburger) {
            this.setState({ navHamburger: true });
        } else {
            this.setState({ navHamburger: false });
        }

    }
    openModal = () => {
        if (!this.state.isOpen) {
            this.setState({ isOpen: true });
        } else {
            this.setState({ isOpen: false });
        }

    }

    mudaNav = (evt) => {
        console.log(evt);
    }

    deslogar = () => {
        sessionStorage.removeItem('user')
    }

    render() {
        return (
            <header>
                <LoginChecker />

                <nav className=" navbar navbar-light ">
                    <a className="navbar-brand" href="#">
                        <img src={logoSvg} alt="" srcSet="" className="" width="60" height="60" />

                    </a>
                    <button className="hamburguer" id="hamburguer" onClick={this.hamburguer}>
                        <i className="fas fa-bars"></i>
                    </button>
                    <a href="/propostas" className={`nav-link nav-element ${this.state.activePage === 0 ? "active" : ""}`} onClick={this.mudaNav}>
                        <h3>Propostas</h3>
                    </a>
                    <a href="/servicos" className={`nav-link nav-element ${this.state.activePage === 2 ? "active" : ""}`} onClick={this.mudaNav}>
                        <h3>Serviços Ativos</h3>
                    </a>
                    {/* <a className="nav-link nav-element" href="/chat">
                        <h3>Chat</h3>
                    </a> */}
                    <a href="/" className="nav-icone ml-auto nav-element" onClick={this.deslogar}>
                        <i className="fas fa-sign-out-alt"></i>
                    </a>
                    <a href="" className="nav-name nav-element mr-3" href="#" role="button" id="dropPerfil" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false" onClick={this.openModal}>
                        <h2>
                            {JSON.parse(sessionStorage.getItem('user')).nome}
                            <i className="fas fa-user-circle nav-foto"></i>
                        </h2>
                    </a>
                    <div className={`dropdown-menu dropPerfil ${this.state.isOpen ? "show" : ""} dropdown-menu-right text-center`} aria-labelledby="dropPerfil">
                        <a className="dropdown-item button-drop" href="/editPerfil">Editar Perfil</a>
                        {/* <a className="dropdown-item button-drop" href="/addPortfolio">Portfólio</a> */}
                        <a className="dropdown-item button-drop" href="/avaliacao">Avaliações</a>
                        <a className="dropdown-item button-drop" href="/chat">
                            Chat
                            <i className="fas fa-comment" style={{ marginLeft: '5px' }}></i>
                        </a>
                    </div>
                </nav>
                {
                    this.state.navHamburger ? <div className="container bg-white">
                        <div className="row">
                            <a className="nav-link" href="/propostas">Propostas</a>
                        </div>
                        <div className="row" >
                            <a className="nav-link" href="/servicos">Serviços Ativos</a>
                        </div>
                        <div className="row">
                            <a className="nav-link" href="/editPerfil">Editar Perfil</a>
                        </div>
                        <div className="row">
                            <a className="nav-link" href="/chat">Chat</a>
                        </div>
                    </div> : ""

                }
            </header>
        );
    }

    componentDidCatch() {
        <Redirect to="/login" />
    }
}

export default Navbar;