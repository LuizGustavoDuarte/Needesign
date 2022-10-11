import React from 'react';


class Chat_Profile extends React.Component {
    
    constructor (props) {
        super()
        this.state = {nome: props.nome, data: props.data, mensagem: props.mensagem, id: props.id}
    }
    
    render() {
        return (
            <div className="chat-profile">
                <img src={"http://localhost:3001/imagem/" + this.state.id} className="chat-img1" />
                <h2 className="chat-sb-name">{this.state.nome}</h2>
                <span className="chat-sb-time mt-3">{this.state.data}</span>
                <hr className="chat-barra" />
                <p className="chat-sb-text">{this.state.mensagem}</p>
            </div>
        )
    }
}


export default Chat_Profile;