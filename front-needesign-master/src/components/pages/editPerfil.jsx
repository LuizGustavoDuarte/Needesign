import '../css/editPerfil.css';
import '../css/addServico.css';
import userP from '../img/user.svg';
import trab from '../img/add-img.png';
import React from 'react';
import LoginChecker from './pageComponents/loginChecker/LoginChecker';

class editPerfil extends React.Component {


    constructor() {
        super()

        this.state = {
            user: JSON.parse(sessionStorage.getItem('user')),
            image: '',
            addPort: []
        }
    }

    editInfo = () => {
        let nome = document.querySelector("#editPerfilNome")
        let bio = document.querySelector("#editPerfilBio")

        let alterNome;
        let alterBio;

        if (nome.value != "") {
            alterNome = String(nome.value);
        }
        if (bio.value != "") {
            alterBio = String(bio.value);
        }

        if (nome.placeholder != nome.value && nome.value != "" || bio.placeholder != bio.value && bio.value != "") {
            fetch('http://localhost:3001/user/' + this.state.user.id, {
                method: 'PATCH', headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                    nome: alterNome,
                    bio: alterBio
                })
            }).then(response => response.json()).then(response => {

                if (response.mudou === "bio") {
                    alert("Biografia Atualizada")
                } else if (response.mudou === "nome") {
                    alert("Nome da Conta Atualizado")
                } else if (response.mudou === "todos") {
                    alert("Os Dados Foram Atualizados")
                }

                fetch('http://localhost:3001/login', {
                    method: 'post', headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: this.state.user.email, password: this.state.user.senha })
                }
                ).then(json => json.json()).then(usuario => {
                    usuario = usuario.usuario;
                    sessionStorage.setItem('user', JSON.stringify({ email: usuario.usu_email, senha: usuario.usu_senha, nome: usuario.usu_nome, id: usuario.usu_id, bio: usuario.usu_biografia }))
                    this.setState({ user: JSON.parse(sessionStorage.getItem('user')) })
                })
            })
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/imagem/' + this.state.user.id).then(imagem => console.log(imagem.body))
    }

    render() {
        return (
            <div className="bg ep">
                <LoginChecker />
                <header>
                    <a href="propostas">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            fill="var(--cor-primaria)"
                            className="addServ bi bi-arrow-left seta"
                            viewBox="0 0 16 16"
                        >
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </a>
                </header>

                <div className="sidebar ep">
                    <div className="center-block ep">
                        <img src={"http://localhost:3001/imagem/" + this.state.user.id} alt="" className="imgPerf" />
                        <p className="sb">{this.state.user.nome}</p>
                        <br />
                        <a href="/editPerfil"><button className="SB_btn"> Editar Perfil  </button></a>
                        <a href="/avaliacao"><button className="SB_btn"> Avaliações </button></a>
                        {/* <button className="SB_btn"> <a href="/addPortfolio">Add. Portfólio <i class="fas fa-external-link-alt"></i> </a>  </button> */}
                    </div>
                </div>

                <div class="container">
                    <div className="center-block-form">
                        <div className="row">
                            <div className="edit-perf-inputs">
                                <h2>Editar Perfil</h2>
                                <input type="image" className="input-img" src={userP} onClick={() => this.inputImagem.click()} />
                                <input type="file" className="input-img d-none" src={userP} ref={inputImagem => this.inputImagem = inputImagem} onChange={event => {

                                    let file = new FormData();

                                    file.append('file', event.target.files[0])

                                    fetch("http://localhost:3001/imagem/" + this.state.user.id, {
                                        body: file,
                                        method: "post"
                                    }).then(this.setState({ trocaFoto: event.target.files[0] }))


                                }
                                } />
                                <h1 className="ep">Alterar foto de perfil </h1><br />
                                <h3 className="ep">Editar Nome</h3>
                                <input type="text" id="editPerfilNome" placeholder={this.state.user.nome} /> <br />

                                <h3 className="ep">Editar Biografia</h3>
                                <input type="text" id="editPerfilBio" placeholder={this.state.user.bio} className="desc addServ" />
                                <br />

                                {/*                                 <h3 className="ep">Adiconar Portfólio:</h3>
                                <input type="text" className="editPerfilNome" placeholder="adicione links ou imagens" /> <br />
 */}




                                <br /> <br />
                                <button className="btnSub text-white" onClick={this.editInfo}>Salvar</button>
                                <hr className="barraEp" />
                            </div>
                            <br />
                            <div>
                                <input type="image" className="input-img img-branca mt-5" src={trab} onClick={() => this.inputTrabalhos.click()} />
                                <input type="file" className="input-img d-none" src={trab} ref={inputTrabalhos => this.inputTrabalhos = inputTrabalhos} onChange={event => {
                                    
                                    console.log(event.target.files)
                                    this.setState({addPort: event.target.files[0]})

                                }} />
                                <h1 className="ep mt-4">Adicionar imagens ao portifolio</h1><br />
                                

                                <button className=" btnSub" onClick={() => {

                                    let addPort = new FormData();

                                    addPort.append('file', this.state.addPort)

                                    fetch("http://localhost:3001/trabalhos/" + this.state.user.id, {
                                        body: addPort,
                                        method: "post"
                                    })

                                }}>
                                    <a className="text-white">Adicionar</a>
                                </button>
                                <hr className="barraEp mt-4 mb-5" />
                            </div>

                            <br />
                            <div className="edit-perf-inputs">
                                <h2 className="ep">Alterar Senha</h2>
                                <input type="password" placeholder="Senha Atual" /> <br /><br />
                                <input type="password" placeholder="Nova Senha" />
                                <button className=" btnSub mt-5">
                                    <a className="text-white">Alterar</a>
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        )


    }

}
export default editPerfil;