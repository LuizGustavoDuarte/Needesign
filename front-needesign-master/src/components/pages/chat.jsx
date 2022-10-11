import React from 'react';
import '../css/chat.css';
import Chat_Profile from './pageComponents/chat-mini-profile/chat-profile';
import io from 'socket.io-client';


class Chat extends React.Component {
    
    

    constructor() {
        super ()
        
        this.state = {
            conversas: [],
            conversaAtual: {id: 0, usu_id:1},
            mensagensAtuais: [],
            socket: io.connect('http://localhost:3002')
        }
        
        

        this.state.socket.on('mensagem', () => {
            fetch("http://localhost:3001/mensagens/" + this.state.conversaAtual.id).then(mensagens => mensagens.json()).then(mensagens => {
                console.log(mensagens)
                window.scrollBy(0,10**10);
                this.setState({mensagensAtuais: mensagens})
            })
        })

        setInterval(() => {
            this.refresh()
        }, 800);

        
    }

    

    componentDidMount () {

        

        fetch("http://localhost:3001/chats/" + JSON.parse(sessionStorage.getItem('user')).id).then(res => res.json()).then(conversas => {
            
            fetch("http://localhost:3001/mensagens/" + this.state.conversaAtual.id).then(mensagens => mensagens.json()).then(mensagens => {
                console.log(mensagens)
                this.setState({conversas: conversas, mensagensAtuais: mensagens})
            })
        

        })
    }

    

    mudarConversa = (evt) => {

        //console.log(this.state.conversas)
        //console.log(evt - this.state.conversas.length/2)
        //console.log(this.state.conversas[evt - this.state.conversas.length/2])

        this.setState({conversaAtual: {
            usuario: this.state.conversas[evt].usu_nome,
            id: this.state.conversas[evt - this.state.conversas.length/2].cha_id,
            usu_id: this.state.conversas[evt].usu_id
        }}, () => {
            fetch("http://localhost:3001/mensagens/" + this.state.conversaAtual.id).then(mensagens => mensagens.json()).then(mensagensNovas => {
                //console.log(mensagensNovas)
                this.setState({mensagensAtuais: mensagensNovas})
            })
        })

        
    }

    mandar = () => {

        //console.log(this.state.conversaAtual.id)
        this.state.socket.emit('mensagem', {usuario: JSON.parse(sessionStorage.getItem('user')).id , mensagem: document.querySelector(".chat-input").value, chat: this.state.conversaAtual.id})
    }

    render() {

        let conversa = []
        

        return (
            <>
                <div className="chat-bg">
                    <div className="chat-sidebar" id="scrollable-sidebar">
                        <a href="propostas" className="chat-seta">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="52"
                                height="52"
                                fill="white"
                                className=" bi bi-arrow-left"
                                viewBox="0 0 16 16"
                            >
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                        </a>
                        <h1 className="chat-title">Conversas</h1>


                        {
                            this.state.conversas.map((conversa, contador) => {

                                //console.log("conversa", conversa)
                                if(contador > (this.state.conversas.length/2)-1){
                                    if(conversa.usu_id == JSON.parse(sessionStorage.getItem('user')).id){
                                        return <div key={contador} onClick = {() => this.mudarConversa(contador)}><Chat_Profile id={conversa.usu_id}  nome= {conversa.usu_nome} data = {String(new Date())} mensagem= ""></Chat_Profile></div>
                                    } else {
                                        return <div key={contador} onClick = {() => this.mudarConversa(contador)}><Chat_Profile id={conversa.usu_id} nome= {conversa.usu_nome} data = {String(new Date())} mensagem= ""></Chat_Profile></div>
                                    }
                                    
                                }
                                
                            })
                        }
                        
                    </div>

                    <div className="chat-area">
                        <div className="chat-profile-bar">
                            <img src={"http://localhost:3001/imagem/" + this.state.conversaAtual.usu_id} className="chat-img2" />
                            <h2 className="chat-name">{this.state.conversaAtual.usuario}</h2>
                            <a href="" className="chat-info"> <i className="fa fa-info"></i> </a>
                        </div>
                        <div className="chat-feed">


                        {this.state.mensagensAtuais.map((mensagem, key) => {

                            if(mensagem.usu_id == JSON.parse(sessionStorage.getItem('user')).id) {
                                return(<div className="chat-msg-other" key = {key}><p> {mensagem.men_texto} </p></div>)
                            } else {
                                return(<div className="chat-msg-user" key = {key}><p>{mensagem.men_texto}</p></div>)
                            }
                            
                        
                                    
                        })}
                             


                            
                        </div>
                        <div className="chat-bottom">
                            <input type="text" className="chat-input" placeholder="Digite sua mensagem" />
                            <button type="submit" className="chat-input-btn" onClick={this.mandar}> <i className="fa fa-paper-plane"></i></button>
                        </div>

                    </div>
                </div>
            </>
        )
    }

    refresh = () => {
        fetch("http://localhost:3001/mensagens/" + this.state.conversaAtual.id).then(mensagens => mensagens.json()).then(mensagens => {
            this.setState({mensagensAtuais: mensagens})
        })
    }

}

export default Chat;