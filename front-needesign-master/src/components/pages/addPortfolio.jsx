import '../css/addServico.css';
import addImagem from '../img/add-img.png'
import LoginChecker from './pageComponents/loginChecker/LoginChecker';


function AddPortifolio() {

    return (

        <div>
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
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                    </svg>
                </a>
            </header>
            <br />
            <div className="addServ container-fluid">
                <br />
                <br />
                <div className="addServ container bg">
                    <div className="addServ center-block">
                        <div className="addServ center-just">
                            <h1 className="addServ text-center">
                                Adicionar Portfólio:
                            </h1>
                            <br />
                            <div className="addServ text-center">
                                <input type="text" className="addServ input " placeholder="Link (Dribbble, Behance, etc.)" />
                                <h2 className="addServ">Ou adicione imagens:</h2>
                                <input type="text" className="addServ input " placeholder="Link para imagem" />

                            </div>
                        </div>
                        <br />
                        <hr className="addServ barra center-just" />
                        <br />
                        <div className="addServ center-just">
                            <h1 className="addServ">
                                Marque as áreas em que
                                <br />
                                você atua:
                            </h1>
                            <div>
                                <input type="checkbox" id="" name="" value="tag" className="checkbox addServ" />
                                <label for="" className="addServ blocos"> Design Gráfico</label>
                                <br />
                                <input type="checkbox" id="" name="" value="tag" className="checkbox addServ" />
                                <label for="" className="addServ blocos"> Banner</label>
                                <br />
                                <input type="checkbox" id="" name="" value="tag" className="checkbox addServ" />
                                <label for="" className="addServ blocos"> Logo</label>
                                <br />
                                <input type="checkbox" id="" name="" value="tag" className="checkbox addServ" />
                                <label for="" className="addServ blocos"> Outros</label>
                            </div>
                        </div>
                        <br />
                        <button className="addServ button">
                            <a href="portfolios">PUBLICAR</a>
                        </button>
                        <br />
                        <button className="addServ button" style={{ backgroundColor: 'var(--secundaria)' }}>
                            <a href="propostas">CANCELAR</a>
                        </button>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPortifolio;