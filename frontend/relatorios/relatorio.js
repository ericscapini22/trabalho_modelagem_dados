let res = document.getElementById('res')
let relCritico = document.getElementById('relCritico')

relCritico.addEventListener('click', (e) => {
    e.preventDefault()
    res.innerHTML = ''

    fetch('http://localhost:3000/produto')
        .then(resp => resp.json())
        .then(valores => {
            valores.forEach(val => {
                if (val.estoque < 10) {
                    res.innerHTML += '<b>Título</b>: ' + val.titulo
                    res.innerHTML += ' | <b>Estoque</b>: ' + val.estoque
                    res.innerHTML += ' | <b>Categoria</b>: ' + val.categoria + '<br><br><hr><br>'
                }
            })
        })
        .catch((err) => {
            console.error('Falha ao tentar gerar Relatório!', err)
            res.innerHTML += 'Falha ao tentar gerar Relatório!'
        })
})

let res2 = document.getElementById('res2')
let relConsolidado = document.getElementById('relConsolidado')

relConsolidado.addEventListener('click', (e) => {
    e.preventDefault()
    res2.innerHTML = ''

    fetch('http://localhost:3000/compra')
        .then(resp => resp.json())
        .then(valores => {
            valores.forEach(val => {
                fetch('http://localhost:3000/usuario/' + val.codUsuario)
                    .then(resp => resp.json())
                    .then(user => {
                        fetch('http://localhost:3000/produto/' + val.codProduto)
                            .then(resp => resp.json())
                            .then(product => {
                                res2.innerHTML += '<b>Usuário comprador</b>: ' + user.nome
                                res2.innerHTML += ' | <b>Produto Comprado</b>: ' + product.titulo
                                res2.innerHTML += ' | <b>Quantidade</b>: ' + val.quant
                                res2.innerHTML += ' | <b>Data da Compra</b>: ' + val.dataCompra
                                res2.innerHTML += ' | <b>Preço Final</b>: ' + val.precoFinal
                                res2.innerHTML += ' | <b>Forma de Pagamento</b>: ' + val.formaPagamento
                                res2.innerHTML += ' | <b>Status da Compra</b>: ' + val.statusCompra + '<br><br><hr><br>'
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
            console.error('Falha ao tentar gerar Relatório Consolidado!', err)
            res.innerHTML += 'Falha ao tentar gerar Relatório Consolidado!'
        })
})