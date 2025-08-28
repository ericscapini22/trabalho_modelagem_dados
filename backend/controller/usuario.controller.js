const Usuario = require('../models/Usuario')
const sequelize = require('sequelize')

const cadastrar = async (req,res)=>{
    const dados = req.body
    try {
        const valores = await Usuario.create(dados)
        res.status(200).json(valores)
    } catch (err) {
        console.error('Falha ao tentar cadastrar Usuário!',err)
        res.status(500).json({message: "Falha ao tentar cadastrar Usuário!"})
    }
}

const listar = async (req,res)=>{
    try {
        const valores = await Usuario.findAll()
        res.status(200).json(valores)
    } catch (err) {
        console.error('Falha ao tentar listar Usuários!',err)
        res.status(500).json({message: "Falha ao tentar listar Usuários!"})
    }
}

const listarUsuarioId = async (req,res)=>{
    const id = req.params.id
    try {
        const valores = await Usuario.findByPk(id)
        if (valores === null) {
            console.error('Falha ao tentar encontrar o usuário!')
            res.status(404).json({ message: "Falha ao tentar encontrar o usuário!"})
        } else {
            res.status(200).json(valores)
            console.log('Usuário encontrado com sucesso!')
        }
    } catch (err) {
        console.error('Falha ao tentar buscar usuário por ID!', err)
        res.status(500).json({ message: "Falha ao tentar buscar usuário por ID!"})
    }
}

const listarPorNome = async (req, res) => {
    const nome = req.params.nome
    //Op.Like = Filtro de String avançado, % ele avisa que pode ter caracteres a mais ou não
    try {
        const valores = await Usuario.findAll({
            where: {
                nome: {
                    [sequelize.Op.like]: `%${nome}%`
                }
            }
        })

        if (valores === null) {
            res.status(404).json({ message: "Usuário não encontrado!" })
        } else {
            res.status(200).json(valores)
            console.log('Usuário encontrado com sucesso!')
        }
    } catch (err) {
        console.error('Erro ao buscar usuário por nome!', err)
        res.status(500).json({ message: "Erro ao buscar usuário por nome!" })
    }
}

const atualizar = async (req,res)=>{
    const id = req.params.id
    const dados = req.body
    try {
        const valores = await Usuario.findByPk(id)
        if (valores === null) {
            console.error('Falha ao tentar encontrar Usuário!',err)
            res.status(404).json({message: "Falha ao tentar encontrar Usuário!"})
        } else {
            await Usuario.update(dados, {where: {idUsuario: id}})
            const valoresAtual = await Usuario.findByPk(id)
            res.status(200).json(valoresAtual)
            console.log('Dados do Usuário atualizados com Sucesso!')
        }
    } catch (err) {
        console.error('Falha ao tentar atualizar dados do Usuário!',err)
        res.status(500).json({message: "Falha ao tentar atualizar dados do Usuário!"})
    }
}

const apagar = async (req,res)=>{
    const id = req.params.id
    try {
        const valores = await Usuario.findByPk(id)
        if (valores === null) {
            console.error('Falha ao tentar encontrar Usuário!',err)
            res.status(404).json({message: "Falha ao tentar encontrar Usuário!"})
        } else {
            await Usuario.destroy({where: {idUsuario: id}})
            res.status(200).json({message: "Dados do Usuário apagados com Sucesso!"})
            console.log('Dados do Usuário apagados com Sucesso!')
        }
    } catch (err) {
        console.error('Falha ao tentar apagar dados do Usuário!',err)
        res.status(500).json({message: "Falha ao tentar apagar dados do Usuário!"})
    }
}

module.exports = { cadastrar, listar, listarUsuarioId, listarPorNome, atualizar, apagar }