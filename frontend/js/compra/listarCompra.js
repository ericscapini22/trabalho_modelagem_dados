let res = document.getElementById('res')
let listarCompra = document.getElementById('listarCompra')

listarCompra.addEventListener('click', (e)=>{
    e.preventDefault()

    fetch('http://localhost:3000/compra')
    .then(resp => resp.json())
    .then(valores => {
        res.innerHTML = 'Produtos listados com Sucesso! <br><br><hr><br>'
        valores.forEach(val => {
            res.innerHTML += 'ID da Compra: ' + val.idCompra
            res.innerHTML += ' | ID do Usuário: ' + val.codUsuario
            res.innerHTML += ' | ID do Produto: ' + val.codProduto
            res.innerHTML += ' | Quantidade: ' + val.quant
            res.innerHTML += ' | Data da Compra: ' + val.dataCompra
            res.innerHTML += ' | Preço Unitário: ' + val.precoUnitario
            res.innerHTML += ' | Desconto Aplicado: ' + val.descontoAplicado
            res.innerHTML += ' | Preço Final: ' + val.precoFinal
            res.innerHTML += ' | Forma de Pagamento: ' + val.formaPagamento
            res.innerHTML += ' | Status da Compra: ' + val.statusCompra + '<br><br><hr><br>'
        })
    })
    .catch((err)=>{
        console.error('Falha ao tentar listar Compras!',err)
        res.innerHTML += 'Falha ao tentar listar Compras!'
    })
})