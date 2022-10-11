let app = require('express')()
let http = require('http').createServer(app)
const cors = require('cors');
const io = require('socket.io')(http, {
    cors: {
     origin: "*",
      credentials: true
    }
});

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'need'
    }
});


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('mensagem', ({usuario, mensagem, chat}) => {
    console.log(usuario,mensagem,chat)  
    knex("TBL_MENSAGEM").insert({usu_id: usuario, men_texto: mensagem, cha_id: chat, men_data: new Date()}).then(io.emit('mensagem', {usuario, mensagem, chat}))
    socket.emit('mensagem')
  })
});

http.listen(3002, console.log("servidor de cahat ligado"))