let res = document.getElementById('res')
let listarCompra = document.getElementById('listarCompra')

listarCompra.addEventListener('click', (e) => {
    e.preventDefault()
    res.innerHTML = ''

    fetch('http://localhost:3000/compra')
        .then(resp => resp.json())
        .then(valores => {
            res.innerHTML += '<b>Compras listadas com Sucesso!</b> <br><br><hr><br>'
            valores.forEach(val => {
                fetch('http://localhost:3000/usuario/' + val.codUsuario)
                    .then(resp => resp.json())
                    .then(user => {
                        fetch('http://localhost:3000/produto/' + val.codProduto)
                            .then(resp => resp.json())
                            .then(product => {
                                res.innerHTML += '<b>ID da Compra</b>: ' + val.idCompra
                                res.innerHTML += ' | <b>ID do Usuário</b>: ' + val.codUsuario
                                res.innerHTML += ' | <b>Usuário comprador</b>: ' + user.nome
                                res.innerHTML += ' | <b>ID do Produto</b>: ' + val.codProduto
                                res.innerHTML += ' | <b>Produto Comprado</b>: ' + product.titulo
                                res.innerHTML += ' | <b>Quantidade</b>: ' + val.quant
                                res.innerHTML += ' | <b>Data da Compra</b>: ' + val.dataCompra
                                res.innerHTML += ' | <b>Preço Unitário</b>: R$ ' + val.precoUnitario
                                res.innerHTML += ' | <b>Desconto Aplicado</b>: ' + val.descontoAplicado + '%'
                                res.innerHTML += ' | <b>Preço Final</b>: R$ ' + val.precoFinal
                                res.innerHTML += ' | <b>Forma de Pagamento</b>: ' + val.formaPagamento
                                res.innerHTML += ' | <b>Status da Compra</b>: ' + val.statusCompra + '<br><br><hr><br>'
                            })
                            .catch((err) => {
                                console.error('Falha ao tentar encontrar título do Produto!', err)
                                res.innerHTML += 'Falha ao tentar encontrar título do Produto!'
                            })

                    })
                    .catch((err) => {
                        console.error('Falha ao tentar encontrar nome do Usuário!', err)
                        res.innerHTML += 'Falha ao tentar encontrar nome do Usuário!'
                    })
            })
        })
        .catch((err) => {
            console.error('Falha ao tentar listar Compras!', err)
            res.innerHTML += 'Falha ao tentar listar Compras!'
        })
})