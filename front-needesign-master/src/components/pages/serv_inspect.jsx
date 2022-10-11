import Navbar from "./pageComponents/Navbar/Navbar";
import '../css/inspect_card.css';
import userImg from '../img/pessoa2.png';
import cardImg from '../img/card.jpg';
import React from "react";
import LoginChecker from './pageComponents/loginChecker/LoginChecker';
import {Redirect} from 'react-router-dom';

class ServInspect extends React.Component {

    constructor(props) {
        super()
        this.state = {
            proposta: {},
            usuario: {usu_id:1},
            isAceito: false
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/proposta/" + this.props.location.pathname.split("/")[2]).then(resposta => resposta.json()).then(proposta => {
            fetch('http://localhost:3001/user/' + proposta.usu_id).then(json => json.json()).then(usuario => {


                this.setState({ proposta, usuario: usuario[0] });

            })
        })
    }

    aceitarProposta = () => {
        fetch("http://localhost:3001/chat", {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },method: "post", body: JSON.stringify({usu_id: JSON.parse(sessionStorage.getItem('user')).id, usu_id2: this.state.usuario.usu_id, ser_id: this.state.proposta.ser_id })}).then(this.setState({isAceito: true}))
    }

    render() {

        console.log(this.state)

        return (
            <div>
                {this.state.isAceito ? <Redirect to={{pathname: "/chat"}} /> : ""}
                <Navbar />
                <LoginChecker />
                <main className="mt-5">
                    <section className="mb-5 tarefaHeader">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={"http://localhost:3001/referencia/" + this.state.proposta.ser_imagens} className="jobImage img-fluid"></img>
                                </div>
                                <div className="col-md-6 text-center my-auto">
                                    <h3 className="nomeProposta">{this.state.proposta.ser_titulo}</h3>
                                    <p className="text-warning">{this.state.proposta.ser_tags}</p>
                                    <hr className="jobHr mx-auto text-warning"></hr>
                                    <hr className="jobHr mx-auto" style={{ width: "40%" }}></hr>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="detalhesJob">
                        <div className="container jobContainer">
                            <div className="row">
                                <div className="col-12 text-justify">
                                    <h2 className="text-dark text-center mb-5"><bold>Descrição da Proposta:</bold></h2>

                                    <p className="text-justify mx-auto mt-4 descricao">{this.state.proposta.ser_desc}</p>
                                    <br />
                                    <h4 className="text-dark text-center requerimentos mt-5">Informações:</h4>
                                    <p>Autor: </p>
                                    <a href= {"/perfilInspect/" + this.state.usuario.usu_id}>
                                        <div className="serv_autor">
                                            <img src={"http://localhost:3001/imagem/" + this.state.usuario.usu_id} className="serv_imgPerf" />
                                            <span className=" serv_nomeAutor mt-4">{this.state.usuario.usu_nome}</span>
                                        </div>
                                    </a>
                                    <br />
                                    <p>Prazo: <br />
                                        <span className="serv_prazo">{Date(this.state.proposta.ser_prazo)}</span></p>

                                </div>
                                <div className="col-12 mt-5 text-center">
                                    {!(this.state.proposta.ser_aceito || JSON.parse(sessionStorage.getItem('user')).id == this.state.usuario.usu_id) ? <button className="btn-lg btn-primary" onClick={this.aceitarProposta}>Aceitar Proposta</button> : "" }
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <svg
                        className="servInspect blob"
                        viewBox="0 0 975 1024"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.45"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1133.25 749.255C1205.83 679.173 1159.39 549.305 1144.28 443.805C1130.82 349.876 1104.02 259.52 1051.06 175.526C994.115 85.2223 931.571 -13.7405 831.451 -52.3085C731.565 -90.7865 623.342 -65.2057 534.255 -23.5555C455.826 13.1118 436.215 108.223 371.095 162.919C280.753 238.798 82.3615 233.722 82.3464 356.008C82.3314 476.855 281.212 511.91 371.04 606.12C441.74 680.269 453.062 811.321 548.733 845.148C644.629 879.054 718.856 778.337 813.979 762.732C920.21 745.304 1059.55 820.422 1133.25 749.255Z"
                            fill="#783247"
                        />
                    </svg> */}
                </main>
            </div>
        )
    }

}

export default ServInspect;