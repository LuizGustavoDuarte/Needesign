import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { getJSON } from 'jquery';
import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import { Redirect } from 'react-router-dom';
import '../css/cadastro.css';
import blob1 from '../img/Vectorblob1.svg';
import blob2 from '../img/Vectorblob2.svg';


class Login extends React.Component {

    constructor() {
        super();

        this.state = {
            isLogged: false
        }
    }

    logar = () => {
        
        let senha = document.querySelector('.logar-senha').value;
        let email = document.querySelector('.logar-email').value;
        document.getElementById('loader').style.display = "inline";

        if (!(!email || !senha)) {
            console.log(senha, email)
            fetch('http://localhost:3001/login', {
                method: 'post', headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, password: senha })
            }
            ).then(json => json.json()).then(usuario => {
                usuario = usuario.usuario;
                sessionStorage.setItem('user', JSON.stringify({ email: usuario.usu_email, senha: usuario.usu_senha, nome: usuario.usu_nome, id: usuario.usu_id, bio: usuario.usu_biografia }))
                this.setState({ isLogged: true })
            }).catch(err => {
                document.getElementById('loader').style.display = "none";
                alert("Login ou senha incorretos")
            })
        }


    }

    render() {
        return (
            <section className="overf">
                <div className="login-body">

                    {this.state.isLogged ? <Redirect push to={{ pathname: "/propostas" }} /> : ""}

                    <div className="pagina-cadastro cadastrobg">
                        <h1 className="text-center cadTitle mb-5">
                            Faça o Login agora <br />
                            mesmo!
                        </h1>
                        <label for="email" className="labelCad">Email</label>
                        <input type="email" className="input mb-2 logar-email" placeholder="EMAIL" />
                        <label for="email" className="labelCad">Senha</label>
                        <input type="password" className="input mb-4 logar-senha" placeholder="SENHA" />


                        <a className="button_cadastro" onClick={this.logar}>LOGAR <span className="loader" id="loader"></span> </a>

                        <h3 className="entrar_txt">
                            Não tem uma conta?
                            <a href="cadastro" className="entrar">CRIAR</a>
                        </h3>



                    </div>

                    <div class="shape-blob"></div>
                    <div class="shape-blob one"></div>
                </div>
            </section>
        )
    }
}

export default Login;