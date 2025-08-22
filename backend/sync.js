const conn = require('./db/conn')
const { Usuario, Produto, Compra } = require('./models/rel')

async function syncDatabase() {
    try {
        await conn.sync({force: true})
        console.log('Tabelas Sincronizadas!')
    } catch (err) {
        console.error('Falha ao tentar sincronizar Tabelas!',err)
    } finally {
        await conn.close()
        console.log('Conexão com o Banco de Dados Finalizada!')
    }
}

syncDatabase()