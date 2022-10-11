const { response, json } = require('express');
let express = require('express');
let server = express();
let fileUpload = require('express-fileupload')
let cors = require('cors');


server.listen(3001, () => console.log('servidor ligado'));

server.use(express.urlencoded({extended: false}));
server.use(express.json());
server.use(cors());
server.use(fileUpload())



const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'need'
    }
});

//TESTE MERGE 

server.post('/imagem/:id', (req,res) => {

    console.log(req.files.file, __dirname)

    let id = req.params.id;

    let name = '/uploads/' + req.files.file.name;


    req.files.file.mv(__dirname + name)

    knex('TBL_USUARIO').where('usu_id', id).update('usu_imagem', name).then(then1 => {
        res.send(JSON.stringify({mudou: "imagem"}))
    }).catch(error => {
        res.status(400)
    })

})


server.post('/trabalhos/:id', (req,res) => {

    let id = req.params.id;

    let name = '/uploads/' + req.files.file.name;

    req.files.file.mv(__dirname + name)

    knex.select('usu_trabalhos').from('TBL_USUARIO').where({usu_id: id}).then(responses => {

        if((responses[0].usu_trabalhos == null)){
            let addBanco =  name;
            knex('TBL_USUARIO').where('usu_id', id).update('usu_trabalhos', addBanco).then(then1 => {
                res.send(JSON.stringify({mudou: "trabalhos"}))
            }).catch(error => {
                res.status(400)
            })
        } else {
            let addBanco = responses[0].usu_trabalhos + "," + name;
            knex('TBL_USUARIO').where('usu_id', id).update('usu_trabalhos', addBanco).then(then1 => {
                res.send(JSON.stringify({mudou: "trabalhos"}))
            }).catch(error => {
                res.status(400)
            })
        }

    })

})

server.post('/referencia/', (req,res) => {

    let name = '/uploads/' + req.files.file.name;

    req.files.file.mv(__dirname + name)

    res.send(JSON.stringify(req.files.file.name))


})

server.get('/referencia/:caminho', (req,res) => {

    let caminho = req.params.caminho;

    res.sendFile(__dirname + "/uploads/" + caminho)

})

server.get('/imagem/:id', (req,res) => {

    let id = req.params.id;

    knex.select('usu_imagem').from('TBL_USUARIO').where({usu_id: id}).then(responses => {
        console.log(responses)

        res.sendFile(__dirname + responses[0].usu_imagem)
    })

})


server.post('/cadastro', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let nome = req.body.nome;

    if(email.length, password.length, nome.length){

        console.log(email, password)
            
        let sql = knex("TBL_USUARIO").insert({
            usu_email: email,
            usu_senha: password,
            usu_biografia: "Sou novo aqui",
            usu_nome: nome
        }).then( result => {
            res.status(200),
            res.send()
        }).catch(err => {
            res.status(409)
            res.send("Usuario ja registrado")
        })
        console.log("Não está vazio")

    } else {
        res.status(400).send('Invalid Request');

        console.log('Campo vazio tente de novo')
    }


    
})


// ao logar o sistema pega o email e senha digitado
// e verifica na base de dados, se achar um match retornas as info

server.post('/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if(email.length, password.length) {
        
        console.log(email, password)

        knex.select().from('TBL_USUARIO').where({
            usu_email: email,
            usu_senha: password
        })
        .then(usuario => {

            //Modificar urgente!!!!!!

            if(usuario.length){
                usuario = usuario[0];
                console.log(usuario)
                res.send({usuario})
                console.log("conta existe")
            } else {
                res.status(404).send();
            }
        })

    }

    
})

//propostas
// propostas procura todas as propostas ativas e lista, provavelmente em um array;
server.get('/propostas', (req, res) => {
    

    console.log('propostas chamadas')
    
    let sql = knex.select().from('TBL_SERVICO').where({ser_aceito: 0}).then(responses => res.send(responses))

    
})

server.get('/propostas/user/:id', (req, res) => {
    
    let id = req.params.id;

    console.log('propostas chamadas')
    
    let sql = knex.select().from('TBL_SERVICO').where({usu_id: id}).then(responses => res.send(responses))

    
})


//proposta
// proposta procura a proposta especifica clicada, deve receber o id da mesma para mostrar na página com as info
// post: registra a proposta

server.get('/proposta/:id', (req, res) => {
    

    let id = req.params.id;

    let sql = knex.select().from('TBL_SERVICO').where({ser_id: id}).then(responses => {
        res.send(responses[0])
        console.log(responses);
    })

})

server.post('/proposta', (req, res) => {
    let data = {
        ser_titulo: req.body.titulo,
        ser_desc: req.body.desc,
        ser_prazo: req.body.prazo,
        ser_tags: req.body.tags,
        ser_imagens: req.body.imagens,
        usu_id: req.body.usu_id
    }

    console.log(data, req.body)
    

    knex("TBL_SERVICO").insert(data).then(res.send('foi'))

})

//portfolios
// mesmo que propostas
server.get('/portfolios', (req, res) => {
    

    console.log('portfolios chamados')

    let ports = 

    knex.select().from('TBL_PORTFOLIO').then(responses => {
        Promise.all(responses.map(element => {
            return knex.select().from('TBL_USUARIO').where({usu_id: element.usu_id}).then(usuario => usuario[0])
        })).then(portfolios => res.send(portfolios.concat(responses)))
    })//.then()

    

})

server.get('/chats/:id', (req, res) => {
    

    let id = Number(req.params.id);

    console.log("Chats")

    knex.select().from('TBL_CHAT').where({usu_id: id}).orWhere({usu_id2: id}).then(chats => {

        resposta = chats;

        console.log(chats)



        Promise.all(chats.map(element => {
            return knex.select().from('TBL_USUARIO').where({usu_id: element.usu_id2}).then(usuario => {
                        resposta.push(usuario[0])
                    })
        })).then(() => {res.send(resposta)})
        
        
    })

    

})

server.get('/mensagens/:id', (req, res) => {
    

    let id = Number(req.params.id);

    knex.select().from('TBL_MENSAGEM').where({cha_id: id}).then(mensagens => {
        res.send(mensagens)
    })

})

server.get('/avaliacoes/:id', (req, res) => {
    
    resposta = [];

    let id = Number(req.params.id);

    console.log("aaaaava")

    knex.select().from('TBL_AVALIACAO').where({usu_id: id}).then(avaliacoes => {

        resposta.push(avaliacoes)

        Promise.all(avaliacoes.map(element => {
            return knex.select().from('TBL_USUARIO').where({usu_id: element.ava_avaliador}).then(usuario => {
                        resposta.push(usuario[0])
                    })
        })).then(() => {res.send(resposta)})

    })

})


server.get('/portfolios/user/:id', (req, res) => {
    

    console.log('portfolios chamados')

    let sql = knex.select().from('TBL_PORTFOLIO').then(responses => res.send(responses))

    
})


server.get('/portfolio/:id', (req, res) => {
    

 
    let id = req.params.id;

    let sql = knex.select().from('TBL_PORTFOLIO').where({prt_id: id}).then(responses => {
        res.send(responses[0])
        console.log(responses);
    })

})




// portfolio
// mesmo que proposta
// post: registra o portfolio



server.post('/portfolio', (req, res) => {
    let data = {
        prt_tags: req.body.tags,
        prt_imagens: req.body.imagens,
        usu_id: req.body.usu_id
    }
    

    knex("TBL_PORTFOLIO").insert(data).then(res.send('foi'))

})


server.post('/chat', (req, res) => {
    let data = {
        usu_id: req.body.usu_id,
        ser_id: req.body.ser_id,
        usu_id2: req.body.usu_id2
    }
    
    knex("TBL_SERVICO").update({ser_aceito: 1}).where({ser_id: data.ser_id}).then( () => {
        knex("TBL_CHAT").insert(data).then(res.send('foi'))
    })

    

})



//TODO


server.get('/tags', (req, res) => {
    

    console.log('tags chamadas')

    knex.select().from('TBL_TAG').then(responses => res.send(responses))

    
})

server.get('/tag/:match', (req, res) => {
    

    let match = req.params.match;

    let sql = knex.select().from('TBL_TAG').where({tag_id: id}).then(responses => {
        res.send(responses[0])
        console.log(responses);
    })
    
})

server.get('/user/:id', (req,res) => {
    let id = req.params.id;

    let sql = knex.select('usu_nome','usu_biografia','usu_id').from('TBL_USUARIO').where({usu_id: id}).then(responses => {
        res.send(responses)
        console.log(responses);
    })
})

server.patch('/user/:id', (req,res) => {

    console.log("patching",req.body.nome,req.body.bio)

    let id = Number(req.params.id);

    if(req.body.nome && req.body.bio){
        knex('TBL_USUARIO').where('usu_id', id).update('usu_nome', req.body.nome).then(then => {
            console.log("patching todos")
            knex('TBL_USUARIO').where('usu_id', id).update('usu_biografia', req.body.bio).then(then1 => {
                res.send(JSON.stringify({mudou: "todos"}))
            })
        })
    } else if(req.body.nome && !req.body.bio){
        knex('TBL_USUARIO').where('usu_id', id).update('usu_nome', req.body.nome).then(then => {
            console.log("patching nome")
            res.send(JSON.stringify({mudou: "nome"}))
        })
    } else if(!req.body.nome && req.body.bio){
        knex('TBL_USUARIO').where('usu_id', id).update('usu_biografia', req.body.bio).then(then => {
            console.log("patching biografiaaaaaaaaaaaa")
            res.send(JSON.stringify({mudou: "bio"}))
        })
    }
    
})