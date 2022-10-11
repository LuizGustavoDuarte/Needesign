import React from 'react';
import '../css/addServico.css';
import addImagem from '../img/add-img.png'
import LoginChecker from './pageComponents/loginChecker/LoginChecker';
import { Redirect } from 'react-router-dom';

class AddServico extends React.Component {

    constructor() {

        super()

        this.state = {
            isCompleto: false,
            referencia: '',
            tags: []
        }
    }

    publicar = () => {
        let input = document.querySelectorAll("input")
        let titulo = input[0].value;
        let desc = input[1].value;
        let imagens = this.state.referencia;
        let prazo = input[3].value;
        let tags = "";
        this.state.tags.forEach(tag => tags += tag + ",");

        tags = tags.substring(0, tags.length-1)
         


        if (!titulo || !desc || !imagens || !prazo || !tags) {
            
        } else {

            console.log(titulo,
                desc,
                imagens,
                prazo,
                tags,
                JSON.parse(sessionStorage.getItem('user')))

                let file = new FormData();

                file.append('file', this.state.referencia)

                fetch("http://localhost:3001/referencia/", {
                    body: file,
                    method: "post"
                }).then(resposta => resposta.json()).then(caminho => {
                    fetch("http://localhost:3001/proposta", {
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            titulo: titulo,
                            desc: desc,
                            imagens: caminho,
                            prazo: prazo,
                            tags: tags,
                            usu_id: JSON.parse(sessionStorage.getItem('user')).id
                        }),
                        method: "post"
                    }).then(console.log).then(this.setState({ isCompleto: true }))
                })




        }




    }

    render() {

        return (
            <div className="addServ bodyServico">
                {this.state.isCompleto ? <Redirect to={{ pathname: "/propostas" }} /> : ""}
                <LoginChecker />
                <header>
                    <a href="propostas">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            fill="white"
                            className="addServ bi bi-arrow-left seta"
                            viewBox="0 0 16 16"
                        >
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </a>
                </header>
                <br></br>
                <div className="addServ">
                    <br />
                    <br />
                    <div className="addServ container addServ bg addServ">
                        <div className="addServ center-block addServ">
                            <div className="addServ center-just addServ">
                                <h1 className="addServ text-center">
                                    Adicionar Serviço:
                                </h1>
                                <br />
                                <input type="text" className="addServ input " placeholder="Título" />
                                <br />
                                <input type="text" className="addServ input desc" placeholder="Descrição" />
                            </div>
                            <br />
                            <div className="addServ center-just">
                                <h1 className="addServ">
                                    Adicionar imagem de
                                    <br />
                                    referência:
                                    <br />
                                    <span className="addServ sm">(opcional)</span>
                                </h1>
                                <div className="text-center">
                                <img className="input-img bg-white mb-4" src={addImagem} onClick={() => this.inputRef.click()} />
                                <input type="file" className="input-img d-none" src={addImagem} ref={inputRef => this.inputRef = inputRef} onChange={event => {
                                    this.setState({ referencia: event.target.files[0] })
                                }}/>
                                </div>
                            </div>
                            <br />
                            <div className="addServ center-just">
                                <h1 className="addServ ">
                                    Determine o prazo de
                                    <br />
                                    conclusão:
                                </h1>
                                <input
                                    type="date"
                                    className="addServ input-date"
                                    placeholder=""
                                    maxLength="8"
                                />
                            </div>
                            <br />
                            <div className="addServ center-just">
                                <h1 className="addServ">Marque Tags para ajudar na busca</h1>
                                <div className="d-flex">
                                    <input type="text" className="addServ input botao-tags" placeholder="Exemplo: 'Logo, Flyer, Banner'" />
                                    <button className="btn btn-primary add-serv-plus" onClick={() => {
                                        this.setState({tags: this.state.tags.concat([document.querySelector(".botao-tags").value])})
                                    }}> + </button>
                                </div>
                                <div className= "tags mt-2">
                                    {this.state.tags.map((tag, i) => {
                                        return <p key={i} className="categoria d-inline">{tag}</p>}
                                    )}
                                </div>
                            </div>
                            <br />
                            <br />
                            <button className="button_serv" onClick={this.publicar}>
                                <a>PUBLICAR</a>
                            </button>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default AddServico;
