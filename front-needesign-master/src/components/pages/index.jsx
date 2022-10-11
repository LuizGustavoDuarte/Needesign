
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/index.css';
import ilu1 from '../img/index-ilu.svg';
import ilu2 from '../img/index-ilu2.svg';
import ilu3 from '../img/index-ilu3.svg';
import ilu4 from '../img/index-ilu4.svg';
import ilu5 from '../img/index-ilu5.svg';
import logoSvg from '../img/logo.svg';


function Index() {


    return (
        <div className="landing-background-svg">
            <header>
                <nav className="navbar navbar-light ">
                    <a className="navbar-brand" href="#">
                        <img src={logoSvg} alt="" srcSet="" className="" width="60" height="60" />

                        <h3>Needesign</h3>
                    </a>
                    <a className="nav-enter mr-5" style={{ marginRight: 20, marginLeft: 'auto' }}>
                        <a href="login"><h2>Entrar</h2></a>
                        <svg width="56" height="58" viewBox="0 0 56 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M28 0.905701C12.5323 0.905701 0 13.4723 0 28.9825C0 44.4926 12.5323 57.0592 28 57.0592C43.4677 57.0592 56 44.4926 56 28.9825C56 13.4723 43.4677 0.905701 28 0.905701ZM28 11.7741C33.4871 11.7741 37.9355 16.2347 37.9355 21.7368C37.9355 27.239 33.4871 31.6996 28 31.6996C22.5129 31.6996 18.0645 27.239 18.0645 21.7368C18.0645 16.2347 22.5129 11.7741 28 11.7741ZM28 50.7193C21.3726 50.7193 15.4339 47.7078 11.4597 42.9982C13.5823 38.9905 17.7371 36.2281 22.5806 36.2281C22.8516 36.2281 23.1226 36.2734 23.3823 36.3526C24.85 36.8281 26.3855 37.1338 28 37.1338C29.6145 37.1338 31.1613 36.8281 32.6177 36.3526C32.8774 36.2734 33.1484 36.2281 33.4194 36.2281C38.2629 36.2281 42.4177 38.9905 44.5403 42.9982C40.5661 47.7078 34.6274 50.7193 28 50.7193Z"
                                fill="var(--cor-primaria)" />
                        </svg>

                    </a>

                </nav>
            </header>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-8" style={{ marginTop: 50 }}>
                            <h1 id="needsign-home-title">BOAS VINDAS AO <span id="needsign-home-span">NEEDESIGN</span></h1>
                            <h5 id="needsign-home-desc">O lugar onde você irá encontrar clientes e designers de maneira simples
                                e prática!</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <a href="cadastro"><button className="btn btn-light btn-lg" id="btn-crie">Crie sua conta</button></a>
                            <a href="login"><button className="btn btn-outline-light btn-lg" id="btn-flogin">Ou faça login</button></a>
                        </div>
                    </div>
                </div>
            </main>

            <a href="#sobre" className="saiba">Saiba Mais! <br /> <i className="far fa-caret-square-down"></i> </a>



            <svg width="786" height="1030" viewBox="0 0 786 530" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="home-smudge">
                <path fillRule="evenodd" clipRule="evenodd"
                    d="M104.426 370.276C128.411 277.256 284.167 302.243 377.255 266.468C437.351 243.372 489.896 213.834 552.727 197.985C635.229 177.174 718.633 130.955 799.941 159.846C886.528 190.612 962.217 265.576 983.087 350.9C1003.31 433.578 947.341 511.505 903.611 583.685C869.804 639.485 808.387 668.31 762.297 715.331C705.209 773.572 683.244 870.422 601.889 891.502C518.122 913.207 417.28 880.828 354.76 820.928C295.21 763.873 331.899 665.986 292.52 595.096C244.412 508.492 80.3569 463.623 104.426 370.276Z"
                    fill="var(--blob)" />
            </svg>


            <img src={ilu1} alt="" srcSet="" className="illustration-home" />
            <br /><br />
            <div className="container-fluid index-bg">
                <div className="container index-content" id="sobre">
                    <div className="row">

                        <div className="col-md-6">
                            <img src={ilu2} className="img-fluid" alt="" />
                        </div>

                        <div className="col-md-6">
                            <h1 style={{ textAlign: 'left' }}><i className="fas fa-code-branch"></i> Conectando Profissionais</h1>
                            <p>O NeeDesign permite você encontrar profissionais de várias áreas da tecnologia e da comunicação visual. Para assim você ter inúmeras opções de escolha para quem irá realizar seu serviço da maneira que achar melhor!</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <h1>Interação Direta <i className="far fa-comments"></i> </h1>
                            <p>Encontrou a proposta perfeita e deseja negociar? sem problemas, aceite o serviço de outra pessoa para você poder conversar e negociar com ela por um chat privado!</p>
                        </div>

                        <div className="col-md-6">
                            <img src={ilu3} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={ilu4} className="img-fluid" alt="" />
                        </div>

                        <div className="col-md-6">
                            <h1 style={{ textAlign: 'left' }}><i class="fas fa-swatchbook"></i> Adicione seu Portfólio</h1>
                            <p>Para atrair mais clientes e serviços, você pode adicionar um portfólio com seus trabalhos para ser exibido em seu perfil.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <h1>Sistema de Reputação <i class="fas fa-medal"></i></h1>
                            <p>Avalie quem trabalhou junto a você para nos ajudar a construir uma comunidade dedicada, reponsável e respeitosa.</p>
                        </div>

                        <div className="col-md-6"> <img src={ilu5} className="img-fluid" alt="" />

                        </div>
                    </div>
                    <br /><br />
                    <div className="content-end">
                        <h2>Venha aproveitar todas essas funções e mais!</h2>
                        <a href="cadastro">Cadastre-se</a>
                    </div>

                </div>
            </div>
        </div>


    )
}


export default Index;