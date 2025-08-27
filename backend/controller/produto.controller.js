const Produto = require('../models/Produto')

const cadastrar = async (req,res)=>{
    const dados = req.body
    try {
        const valores = await Produto.create(dados)
        res.status(200).json(valores)
    } catch (err) {
        console.error('Falha ao tentar cadastrar Produto!',err)
        res.status(500).json({message: "Falha ao tentar cadastrar Produto!"})
    }
}

const listar = async (req,res)=>{
    try {
        const valores = await Produto.findAll()
        res.status(200).json(valores)
    } catch (err) {
        console.error('Falha ao tentar listar Produtos!',err)
        res.status(500).json({message: "Falha ao tentar listar Produtos!"})
    }
}

const listarPorId = async (req,res)=>{
    const id = req.params.id
    try {
        const valores = await Produto.findByPk(id)
        if (valores === null) {
            console.error('Falha ao tentar encontrar o produto!')
            res.status(404).json({ message: "Falha ao tentar encontrar o produto!"})
        } else {
            res.status(200).json(valores)
            console.log('Produto encontrado com sucesso!')
        }
    } catch (err) {
        console.error('Falha ao tentar buscar produto por ID!', err)
        res.status(500).json({ message: "Falha ao tentar buscar produto por ID!"})
    }
}

const atualizar = async (req,res)=>{
    const id = req.params.id
    const dados = req.body
    try {
        const valores = await Produto.findByPk(id)
        if (valores === null) {
            console.error('Falha ao tentar encontrar Produto!',err)
            res.status(404).json({message: "Falha ao tentar encontrar Produto!"})
        } else {
            await Produto.update(dados, {where: {idProduto: id}})
            const valoresAtual = await Produto.findByPk(id)
            res.status(200).json(valoresAtual)
            console.log('Dados do Produto atualizados com Sucesso!')
        }
    } catch (err) {
        console.error('Falha ao tentar atualizar dados do Produto!',err)
        res.status(500).json({message: "Falha ao tentar atualizar dados do Produto!"})
    }
}

const apagar = async (req,res)=>{
    const id = req.params.id
    try {
        const valores = await Produto.findByPk(id)
        if (valores === null) {
            console.error('Falha ao tentar encontrar Produto!',err)
            res.status(404).json({message: "Falha ao tentar encontrar Produto!"})
        } else {
            await Produto.destroy({where: {idProduto: id}})
            res.status(200).json({message: "Dados do Produto apagados com Sucesso!"})
            console.log('Dados do Produto apagados com Sucesso!')
        }
    } catch (err) {
        console.error('Falha ao tentar apagar dados do Produto!',err)
        res.status(500).json({message: "Falha ao tentar apagar dados do Produto!"})
    }
}

module.exports = { cadastrar, listar, listarPorId, atualizar, apagar }