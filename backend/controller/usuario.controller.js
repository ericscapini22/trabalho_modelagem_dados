const Usuario = require('../models/Usuario')

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

module.exports = { cadastrar, listar, atualizar, apagar }