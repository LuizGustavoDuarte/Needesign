import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import '../css/cadastro.css';
import blob1 from '../img/Vectorblob1.svg';
import blob2 from '../img/Vectorblob2.svg';

class Cadastro extends React.Component {

    constructor() {
        super();
        this.state = {
            campos: {
                email: "",
                senha: "",
                nome: ""
            }
        }
    }

    cadastrar = () => {
        document.getElementById('loader').style.display = "inline";
        let modalS = document.getElementById("modalS");
        let modalF = document.getElementById("myModal");
        let cadastro = document.getElementById("cadastroForm");
        let btnF = document.getElementsByClassName("buttonF")[0];
        let nome = document.querySelector('.cadastro-nome').value;
        let senha = document.querySelector('.cadastro-senha').value;
        let email = document.querySelector('.cadastro-email').value;
        let confirmaSenha = document.querySelector('.cadastro-confirmar-senha').value;

        //botão tentar novamente
        btnF.onclick = function () {
            modalF.style.display = "none";
            cadastro.reset()
            document.getElementById('loader').style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target === modalF) {
                modalF.style.display = "none";
            }
        }

        console.log(nome, senha, email, confirmaSenha)

        if (senha === confirmaSenha && !(!nome || !email || !senha || !confirmaSenha)) {

            fetch('http://localhost:3001/cadastro', {
                method: 'post', headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome: nome, email: email, password: senha })
            }).then((res, err) => {
                console.log(res);
                if (res.status === 409) {
                    modalF.style.display = "block";
                } else {
                    modalS.style.display = "block";
                }
            })

        } else {
            modalF.style.display = "block";
            document.getElementById('loader').style.display = "none";

        }


    }

    render() {
        return (
            <section className="overf">
                <div className="registro-body">
                    <div id="myModal" className="modalF">
                        <div className="modalF-content">

                            <i className="icoF fa fa-times-circle"></i>
                            <h1>Ops!</h1>
                            <p>Usuário já cadastrado ou senha inválida.</p>
                            <span className="buttonF">Tentar Novamente</span>
                        </div>
                    </div>

                    <div id="modalS" className="modalS">
                        <div className="modalS-content">
                            <i className="icoS fa fa-check-circle"></i>
                            <h1>Cadastro Realizado!</h1>
                            <p>Faça o login para entrar no site.</p>
                            <a href="login" className="buttonS" >Login</a>
                        </div>
                    </div>



                    <div className="pagina-cadastro cadastrobg">
                        <h1 className="text-center mb-5 mt-3 cadTitle">
                            Crie sua conta agora mesmo!
                        </h1>
                        <form id="cadastroForm">
                            <label for="email" className="labelCad">Nome</label>
                            <input type="text" className="input mb-2  cadastro-nome" placeholder="Nome de Usuário" />
                            <label for="email" className="labelCad">Email</label>
                            <input type="email" className="input mb-2 cadastro-email" placeholder="Email" />
                            <br />
                            <label for="email" className="labelCad">Senha</label>
                            <input type="password" className="input mb-2 cadastro-senha" placeholder="Senha" />
                            <input type="password" className="input mb-2 cadastro-confirmar-senha" placeholder="Confirmar Senha" />
                        </form>
                        <a className="button_cadastro" onClick={this.cadastrar}>Cadastrar <span className="loader" id="loader"></span></a>

                        <h3 className="entrar_txt">
                            Já tem uma conta?
                            <a href="login" className="entrar mt-5">Entrar</a>
                        </h3>
                    </div>
                    <div class="shape-blob"></div>
                    <div class="shape-blob one"></div>
                </div>
            </section>
        )
    }
}

export default Cadastro;