const Compra = require('../models/Compra')

const cadastrar = async (req,res)=>{
    const dados = req.body
    try {
        const valores = await Compra.create(dados)
        res.status(200).json(valores)
    } catch (err) {
        console.error('Falha ao tentar cadastrar Compra!',err)
        res.status(500).json({message: "Falha ao tentar cadastrar Compra!"})
    }
}

const listar = async (req,res)=>{
    try {
        const valores = await Compra.findAll()
        res.status(200).json(valores)
    } catch (err) {
        console.error('Falha ao tentar listar Compra!',err)
        res.status(500).json({message: "Falha ao tentar listar Compra!"})
    }
}

const atualizar = async (req,res)=>{
    const id = req.params.id
    const dados = req.body
    try {
        const valores = await Compra.findByPk(id)
        if (valores === null) {
            console.error('Falha ao tentar encontrar Compra!',err)
            res.status(404).json({message: "Falha ao tentar encontrar Compra!"})
        } else {
            await Compra.update(dados, {where: {idCompra: id}})
            const valoresAtual = await Compra.findByPk(id)
            res.status(200).json(valoresAtual)
            console.log('Dados da Compra atualizados com Sucesso!')
        }
    } catch (err) {
        console.error('Falha ao tentar atualizar dados da Compra!',err)
        res.status(500).json({message: "Falha ao tentar atualizar dados da Compra!"})
    }
}

const apagar = async (req,res)=>{
    const id = req.params.id
    try {
        const valores = await Compra.findByPk(id)
        if (valores === null) {
            console.error('Falha ao tentar encontrar Compra!',err)
            res.status(404).json({message: "Falha ao tentar encontrar Compra!"})
        } else {
            await Compra.destroy({where: {idCompra: id}})
            res.status(200).json({message: "Dados da Compra apagados com Sucesso!"})
            console.log('Dados da Compra apagados com Sucesso!')
        }
    } catch (err) {
        console.error('Falha ao tentar apagar dados da Compra!',err)
        res.status(500).json({message: "Falha ao tentar apagar dados da Compra!"})
    }
}

module.exports = { cadastrar, listar, atualizar, apagar }