import '../css/editPerfil.css';
import '../css/addServico.css';
import userP from '../img/user.svg';
import React from 'react';
import LoginChecker from './pageComponents/loginChecker/LoginChecker';
import avaCard from './avaCard';

class avaliacao extends React.Component {

    constructor() {
        super()

        this.state = {
            user: JSON.parse(sessionStorage.getItem('user')),
            avaliacoes: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/avaliacoes/' + JSON.parse(sessionStorage.getItem('user')).id).then(res => res.json()).then(avaliacoes => this.setState({avaliacoes: avaliacoes}))
    }

    render() {
        return (
            <div className="bg ep">
                <LoginChecker />
                {console.log(this.state.user)}
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
                        
                    </div>
                </div>

                <div class="container">
                    <div className="center-block-form">
                        <h2>Avaliações Recebidas</h2>

                        {
                            this.state.avaliacoes.map((avaliacao, contador) => {
                            
                                console.log(avaliacao)

                                if(contador >= 1){
                                    return <div className="card_ep"><h2 className="star ep">
                                    <h2> {this.state.avaliacoes[0][contador - 1].ava_avaliacao} <i className=" fas fa-star"></i></h2>
                                    </h2><br /><br />
                                    <p className="avaText">{this.state.avaliacoes[0][contador - 1].ava_desc}</p>
                                    <img src="https://source.unsplash.com/featured/?perfil" alt="" className="imgAva" />
                                    <h2 className="nomeAva">{avaliacao.usu_nome}</h2>
                                    {
                                        //<h2 className="dataAva">{String(new Date("11-8-2021")).split("2021")[0]}</h2><br /> 
                                    }
                                </div>
                                }
                                
                            })
                        }

                    </div>
                </div>
            </div>

        )
    }
}
export default avaliacao;