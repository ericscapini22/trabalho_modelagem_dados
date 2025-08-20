const Usuario = require('./Usuario')
const Produto = require('./Produto')
const Compra = require('./Compra')

Usuario.hasMany(Compra, {
    foreignKey: 'codUsuario',
    as: 'compraUsuario',
    onDelete: 'CASCADE'
})

Compra.belongsTo(Usuario, {
    foreignKey: 'codUsuario',
    as: 'usuarioCompra',
    allownull: false
})

Produto.hasMany(Compra, {
    foreignKey: 'codProduto',
    as: 'compraProduto',
    onDelete: 'CASCADE'
})

Compra.belongsTo(Produto, {
    foreignKey: 'codProduto',
    as: 'produtoCompra',
    allownull: false
})

module.exports = { Usuario, Produto, Compra }