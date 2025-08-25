require('dotenv').config()

const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: 3306
})

sequelize.authenticate()
.then(()=>{
    console.log('Sucesso ao se conectar com o Banco de Dados!')
})
.catch((err)=>{
    console.error('Erro ao tentar se conectar com o Banco de Dados!',err)
})

module.exports = sequelize