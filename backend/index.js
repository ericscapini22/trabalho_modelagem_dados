require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

const PORT = process.env.PORT
const hostname = process.env.DB_HOST

const conn = require('./db/conn')
const usuarioController = require('./controller/usuario.controller')
const produtoController = require('./controller/produto.controller')
const compraController = require('./controller/compra.controller')

// ----- MiddleWare -----

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// ----- ---------- -----

app.post('/usuario', usuarioController.cadastrar)
app.get('/usuario', usuarioController.listar)
app.put('/usuario/:id', usuarioController.atualizar)
app.delete('/usuario/:id', usuarioController.apagar)

// ----- ---------- -----

app.post('/produto', produtoController.cadastrar)
app.get('/produto', produtoController.listar)
app.get('/produto/:id', produtoController.listarPorId)
app.put('/produto/:id', produtoController.atualizar)
app.delete('/produto/:id', produtoController.apagar)

// ----- ---------- -----

app.post('/compra', compraController.cadastrar)
app.get('/compra', compraController.listar)
app.put('/compra/:id', compraController.atualizar)
app.delete('/compra/:id', compraController.apagar)

// ----- ---------- -----

app.get('/', (req,res)=>{
    res.status(200).json({message: "Aplicação Rodando!"})
})

// ----- ---------- -----

conn.sync()
.then(
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor Rodando em http://${hostname}:${PORT}`)
    })
)
.catch((err)=>{
    console.error('Falha ao tentar se conectar com o Banco de Dados!',err)
})