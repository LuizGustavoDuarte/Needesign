import Navbar from './pageComponents/Navbar/Navbar';
import '../css/servicos.css';
import React from 'react';
import LoginChecker from './pageComponents/loginChecker/LoginChecker';


class Servicos extends React.Component {

    constructor(props) {
        super()

        this.state = {
            requisitados: [],
            user: JSON.parse(sessionStorage.getItem('user'))
        }
    }


    componentDidMount() {
        fetch('http://localhost:3001/propostas/user/' + this.state.user.id).then(json => json.json()).then(requisitados => {
            
            console.log(requisitados, this.state.user)
            this.setState({ requisitados })
        })
    }

    render() {
        return (
            <div>
                <LoginChecker/>
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 id="bom-dia">Seus serviços:</h1>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="row">
                            <div className="col-md-12  text-center d-flex justify-content-center">
                                <div className="card servicos">
                                    <h1 className="servicos">Serviços em Andamento</h1>
                                    <br />
                                    <p>
                                        Nenhum serviço ativo!
                                        <br />
                                        Procure algum na aba de Serviços.
                                    </p>
                                    <br />
                                    <br />
                                    <div className="center-block">
                                     
                                            <a href="/propostas" className="button_serv">Serviços</a>
                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="row">
                            <div className="col-md-12  text-center d-flex justify-content-center">
                                <div className="card servicos">
                                    <h1 className="servicos">Serviços Requisitados</h1>
                                    <br />
                                    <div className="listagem">
                                    
    
                                        
                                        {this.state.requisitados.map(requisitado => <div><h3 className="serv-req mx-auto">{requisitado.ser_titulo}</h3></div>)}

                                    
                                        {!this.state.requisitados.length ?     <div>
                                                <p>
                                                    Nenhum serviço ativo!
                                                    <br />
                                                    Clique em adicionar para criar
                                                    <br />
                                                    um novo.
                                                </p>
                                                <br />
                                                
                                            </div> : ""
                                        }
                                    
                                    </div>
                                    
                                    <div className="center-block">
                                       <br />
                                            <a href="addServico" className="button_serv">Adicionar</a>
                                      
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container feed"></div>
                    <svg
                        className="blob"
                        viewBox="0 0 975 1024"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="1"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1133.25 749.255C1205.83 679.173 1159.39 549.305 1144.28 443.805C1130.82 349.876 1104.02 259.52 1051.06 175.526C994.115 85.2223 931.571 -13.7405 831.451 -52.3085C731.565 -90.7865 623.342 -65.2057 534.255 -23.5555C455.826 13.1118 436.215 108.223 371.095 162.919C280.753 238.798 82.3615 233.722 82.3464 356.008C82.3314 476.855 281.212 511.91 371.04 606.12C441.74 680.269 453.062 811.321 548.733 845.148C644.629 879.054 718.856 778.337 813.979 762.732C920.21 745.304 1059.55 820.422 1133.25 749.255Z"
                            fill="var(--blob)"
                        />
                    </svg>
                </main>
            </div>
        )
    }

}



export default Servicos;