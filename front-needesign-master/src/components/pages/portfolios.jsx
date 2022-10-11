import Navbar from "./pageComponents/Navbar/Navbar";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/index.css';
import imagemPortfolio from '../img/portfolio.jpg';
import imagemUsuarioPortfolio from '../img/pessoa2.png';
import React from 'react';
import LoginChecker from './pageComponents/loginChecker/LoginChecker';

class Portfolios extends React.Component {

    constructor(props) {
        super()
        this.state = {
            portfolios: [],
            tags: [],
            isOpenFilter: true,
            userAlias: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/portfolios')
            .then(results => results.json())
            .then(ports => {

                console.log("ports", ports)

                if (this.props.location.pathname == '/portfolios') {

                    let portsList = [];
                    let namesList = [];


                    fetch('http://localhost:3001/tags').then(results => results.json())
                        .then(tags => {

                            ports.map((portfolio, i) => {

                                console.log("Vai", i, portfolio)

                                if (i >= ports.length / 2) {
                                    portsList.push(portfolio)
                                } else {
                                    namesList.push(portfolio)
                                }
                            })

                            this.setState({ tags: tags, portfolios: portsList, userAlias: namesList })
                        })

                } else {
                    let portfolios = []
                    let userAlias = []
                    ports.map((portfolio, i) => {

                        console.log(i, portfolio)

                        if (i >= ports.length / 2) {

                            console.log(portfolio)
                            let tags = portfolio.prt_tags.split(',');

                            console.log(tags)

                            console.log(this.props.location.pathname.split("/")[2])

                            tags.forEach(tag => {
                                console.log(tag)

                                if (tag == this.props.location.pathname.split("/")[2]) {
                                    portfolios.push(portfolio);
                                }
                            })

                        } else {
                            userAlias.push(portfolio)
                        }


                    })

                    fetch('http://localhost:3001/tags').then(results => results.json())
                        .then(tags => {
                            this.setState({ tags: tags, portfolios: portfolios, userAlias: userAlias })
                        })
                }


            })
    }

    //ALTERAR URGENTE!!!

    openModalFilter = () => {
        if (!this.state.isOpenFilter) {
            this.setState({ isOpenFilter: true });
        } else {
            this.setState({ isOpenFilter: false });
        }

    }

    render() {



        console.log(this.state.portfolios)

        return (
            <div>
                <main>
                    <div className="container">
                        <LoginChecker />
                        <div className="row">
                            <div className="col-12">
                                <h1 id="bom-dia">Bom dia, {JSON.parse(sessionStorage.getItem('user')).nome}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <h3 className="ml-3">Portfólios Disponíveis:</h3>
                            <div className="dropdown">

                                <button className="btn btn-filter dropdown-toggle" type="button" data-toggle="dropdown" onClick={this.openModalFilter}><i className="fas fa-sort-amount-up"></i> Filtrar
                                    <span className="caret"></span></button>
                                <ul className={` dropdown-filter-hidden ${this.state.isOpenFilter ? "show" : ""}dropdown-filter `}>
                                    {
                                        //ALTERAR URGENTE!!!

                                        this.state.tags.map((tag, key) => {
                                            return (<li key={key}><a href={"/portfolios/" + tag.tag_nome}>{tag.tag_nome}</a></li>);
                                        })
                                    }
                                </ul>
                                <a href="/portfolios" className="desfiltrar"> <i className="fas fa-trash"></i> Desfiltrar</a>
                            </div>
                        </div>
                    </div>
                    <div className="container feed">
                        <div className="row">
                            {this.state.portfolios.map((portfolio, i) => {

                                return (
                                    <div className="col-md-4 mt-5" key={i}>
                                        <a href={"/portinspect/" + portfolio.prt_id}>
                                            <div className="card">
                                                <img className="card-img-top" src={portfolio.prt_imagens} height="350" alt="" />
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        <img src={imagemUsuarioPortfolio} alt="" srcSet="" width="56" className="card-profile-photo mr-2" />
                                                        <p className="mt-3 d-inline">@{

                                                            this.state.userAlias[i].usu_nome

                                                        }</p>
                                                        <div className="d-block mt-3">
                                                            <i className="fas fa-star star mb-1"></i>
                                                            <i className="fas fa-star star mb-1"></i>
                                                            <i className="fas fa-star star mb-1"></i>
                                                            <i className="fas fa-star star mb-1"></i>
                                                            <i className="fas fa-star-half-alt star"></i>

                                                        </div>
                                                        <br />
                                                    </h5>
                                                    <h6 className="categoria mt-5 d-inline">Ilustrador</h6>
                                                    <h6 className="categoria d-inline">Web Designer</h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <svg className="blob" viewBox="0 0 975 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="1" fillRule="evenodd" clipRule="evenodd"
                            d="M1133.25 749.255C1205.83 679.173 1159.39 549.305 1144.28 443.805C1130.82 349.876 1104.02 259.52 1051.06 175.526C994.115 85.2223 931.571 -13.7405 831.451 -52.3085C731.565 -90.7865 623.342 -65.2057 534.255 -23.5555C455.826 13.1118 436.215 108.223 371.095 162.919C280.753 238.798 82.3615 233.722 82.3464 356.008C82.3314 476.855 281.212 511.91 371.04 606.12C441.74 680.269 453.062 811.321 548.733 845.148C644.629 879.054 718.856 778.337 813.979 762.732C920.21 745.304 1059.55 820.422 1133.25 749.255Z"
                            fill="var(--blob)" />
                    </svg>
                </main>
            </div>
        )

    }

}


export default Portfolios;