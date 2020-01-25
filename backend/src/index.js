const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://victor:sHQRf74cGNEnxVUx@cluster0-7nayo.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

/*
    por padrao o express não vai entender o json

    por isso você precisa registrar dentro do express que vamos usar o jason
    .use => válido para todas as rotas da aplicação

*/

// *Méotodos http = get,post,put,delete

/*
    Tipos de parâmetro
    *Query params: request.query ultilizados no método GET (Filtros, ordenação, Paginação)
    app.put('/users',(request, response)=>{
        console.log(request.query)
        return response.json(msg);
    });

    *Route params: request.params identificar um recurso na alteração ou remoção
    app.put('/users/:id',(request, response)=>{
        console.log(request.params)
        return response.json(msg);
    });

    *Body usado no post e no put
    request.body = pega os dados do cropo da requisicao
*/
app.use(cors({
    origin: 'http://localhost:3000'

}))
app.use(express.json())
app.use(routes)
app.listen(3333);