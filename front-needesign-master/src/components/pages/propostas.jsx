import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/js/dist/dropdown';
import '../css/propostas.css';
import '../css/main.css';
import imagemCard from '../img/card.jpg';
import Navbar from './pageComponents/Navbar/Navbar';
import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import LoginChecker from './pageComponents/loginChecker/LoginChecker';

class Propostas extends React.Component {


    userInfo = JSON.parse(sessionStorage.getItem('user'));


    constructor(props) {
        super()



        this.state = {
            search: '',
            isOpenFilter: true,
            propostas: [],
            user: this.userInfo,
            filter: "",
            tags: []

        }

        console.log(JSON.parse(sessionStorage.getItem('user')));
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }

    resetInputField = () => {
        this.setState({ search: "" });
      };

    openModalFilter = () => {
        if (!this.state.isOpenFilter) {
            this.setState({ isOpenFilter: true });
        } else {
            this.setState({ isOpenFilter: false });
        }

    }
    componentDidMount() {

        let propostasFiltradas = [];
        let tagsFiltro = [];

        fetch('http://localhost:3001/propostas')
            .then(results => results.json())
            .then(trabalhos => {

                if (this.props.location.pathname == "/propostas") {

                    fetch('http://localhost:3001/tags').then(results => results.json())
                        .then(tags => {

                            this.setState({ tags: tags, propostas: trabalhos })

                            console.log(this.state.tags)

                        })

                } else {

                    let filtradas = []

                    trabalhos.forEach(proposta => {
                        let tags = proposta.ser_tags.split(",");
                        tags.forEach(tag => {
                            console.log(tag, this.props.location.pathname.split("/")[2])
                            if (tag == this.props.location.pathname.split("/")[2]) {
                                filtradas.push(proposta);
                            }
                        });
                    })

                    console.log(filtradas)

                    propostasFiltradas = filtradas;

                    console.log(propostasFiltradas)

                    fetch('http://localhost:3001/tags').then(results => results.json())
                        .then(tags => {

                            this.setState({ tags: tags, propostas: propostasFiltradas })

                            console.log(this.state.tags)

                        })


                }

            })

    }

    render() {
        let filteredPropost = this.state.propostas.filter(
            (proposta, i) => {
                return proposta.ser_titulo.toLowerCase().indexOf(
                    this.state.search.toLowerCase()) !== -1;
            }
        );
        return (

            <div>
                <LoginChecker />
                {console.log(this.state.user)}
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 id="bom-dia">Bem-vindo, {this.state.user.nome}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <h3 className="ml-3">Jobs Disponíveis:</h3>
                            <input type="text" id="buscar" placeholder="Buscar..." className="busc-filter" value={this.state.search} onChange={this.updateSearch.bind(this)} /> <i className="fa fa-search filter-icon" aria-hidden="true"></i>
                            <a href="/propostas" className="desfiltrar"> <i className="fas fa-trash"></i> Limpar</a>
                             <div className="dropdown mt-4">
                                <button className="btn btn-filter dropdown-toggle" type="button" data-toggle="dropdown" onClick={this.openModalFilter}><i className="fas fa-sort-amount-up"></i> Filtrar
                                    <span className="caret"></span></button>
                                <ul className={` dropdown-filter-hidden ${this.state.isOpenFilter ? "show" : ""}dropdown-filter `}>
                                    {
                                        this.state.tags.map((tag, key) => {
                                            return (<li key={key}><a href={"/propostas/" + tag.tag_nome}>{tag.tag_nome}</a></li>);
                                        })
                                    }
                                </ul>
                                
                            </div>  
                        </div>
                    </div>
                    <div className="container feed">
                        <div className="row">
                            {filteredPropost.map((proposta, i) => {
                                return (<div className="col-md-4 mt-5" key={i}>
                                    <a href={"/servinspect/" + proposta.ser_id}>
                                        <div className="card overflow-clip">
                                            <img className="card-img-top img-fluid" src={"http://localhost:3001/referencia/" + proposta.ser_imagens} alt="" />
                                            <div className="card-body">
                                                <h5 className="card-title">{proposta.ser_titulo}</h5>
                                                <p className="card-text mb-3">{proposta.ser_desc}</p>
                                                <h6 className="categoria mt-3">{proposta.ser_tags}</h6>
                                            </div>
                                        </div>
                                    </a>
                                </div>)
                            })}

                        </div>
                        <svg className="blob" viewBox="0 0 975 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="1" fillRule="evenodd" clipRule="evenodd"
                                d="M1133.25 749.255C1205.83 679.173 1159.39 549.305 1144.28 443.805C1130.82 349.876 1104.02 259.52 1051.06 175.526C994.115 85.2223 931.571 -13.7405 831.451 -52.3085C731.565 -90.7865 623.342 -65.2057 534.255 -23.5555C455.826 13.1118 436.215 108.223 371.095 162.919C280.753 238.798 82.3615 233.722 82.3464 356.008C82.3314 476.855 281.212 511.91 371.04 606.12C441.74 680.269 453.062 811.321 548.733 845.148C644.629 879.054 718.856 778.337 813.979 762.732C920.21 745.304 1059.55 820.422 1133.25 749.255Z"
                                fill="var(--blob)" />
                        </svg>
                    </div>
                </main>

            </div>
        )
    }
}

export default Propostas;