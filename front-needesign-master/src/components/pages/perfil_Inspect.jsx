import Navbar from "./pageComponents/Navbar/Navbar";
import '../css/inspect_card.css';
import '../css/perfil_inspect.css';
import userImg from '../img/pessoa2.png';
import cardImg from '../img/card.jpg';
import React from "react";
import LoginChecker from './pageComponents/loginChecker/LoginChecker';

class perfil_Inspect extends React.Component {
    userInfo = JSON.parse(sessionStorage.getItem('user'));
    constructor(props) {
        super()
        this.state = {
            proposta: {},
            usuario: {usu_id: 1},
            user: this.userInfo
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/user/' + this.props.location.pathname.split("/")[2]).then(resposta => resposta.json()).then(user => this.setState({usuario: user[0]}))
    }


    render() {
        return (
            <div>
                <Navbar />
                <LoginChecker />
                <main className="mt-5">
                    <section className="mb-5 perfilHeader">

                    </section>
                    <section className="detalhesJob text-black-50">
                        <div className="container perf_container">
                            <div className="row">
                                <div className="col-12 text-justify">
                                    <img src={"http://localhost:3001/imagem/" + this.state.usuario.usu_id} className="perf_imgPerf" />
                                    <h2 className="perf_nome"> {this.state.usuario.usu_nome}</h2>
                                    <h3 className="perf_ava"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></h3>
                                    <div className="bio">
                                        <h3 className="bio_titulo"><i className="fa fa-book"></i> Biografia:</h3>
                                        <p className="biografia">{this.state.usuario.usu_biografia}</p>
                                        <br />
                                        <h3 className="bio_titulo"> <i class="fas fa-business-time"></i> Áreas de atuação:</h3>
                                        <span className="perf_area">Web Design</span>   <span className="perf_area">AutoCAD</span>   <span className="perf_area">UI/UX</span>
                                        <br /> <br />
                                        <h3 className="bio_titulo"><i class="fas fa-draw-polygon"></i> Portfólio:</h3>
                                        <div className="row port_galery">
                                            <div className="col-4">
                                                <img src="https://source.unsplash.com/featured/?design" class="img-fluid" alt="" />
                                            </div>
                                            <div className="col-4">
                                                <img src="https://source.unsplash.com/featured/?logo" class="img-fluid" alt="" />
                                            </div>
                                            <div className="col-4">
                                                <img src="https://source.unsplash.com/featured/?design" class="img-fluid" alt="" />
                                            </div>
                                            <div className="col-4">
                                                <img src="https://source.unsplash.com/featured/?building" class="img-fluid" alt="" />
                                            </div>
                                        </div>
                                        <br />
                                        <h3 className="bio_titulo"><i className="fa fa-external-link-alt"></i> Links Externos:</h3>
                                        <ul className="bio_link">
                                            <li><a href="">Instagram</a></li>
                                            <li><a href="">Website</a></li>
                                            <li><a href="">Behance</a></li>
                                        </ul>
                                        <br />
                                    </div>
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

export default perfil_Inspect;