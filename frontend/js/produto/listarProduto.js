let res = document.getElementById('res')
let listarProduto = document.getElementById('listarProduto')

listarProduto.addEventListener('click', (e)=>{
    e.preventDefault()

    fetch('http://localhost:3000/produto')
    .then(resp => resp.json())
    .then(valores => {
        res.innerHTML = 'Produtos listados com Sucesso! <br><br><hr><br>'
        valores.forEach(val => {
            res.innerHTML += '<b>ID do Produto</b>: ' + val.idProduto 
            res.innerHTML += ' | <b>Título</b>: ' + val.titulo
            res.innerHTML += ' | <b>Descrição</b>: ' + val.descricao
            res.innerHTML += ' | <b>Categoria</b>: ' + val.categoria
            res.innerHTML += ' | <b>Preço</b>: ' + val.preco
            res.innerHTML += ' | <b>Porcentagem de Desconto</b>: ' + val.porcentagemDesconto
            res.innerHTML += ' | <b>Estoque</b>: ' + val.estoque
            res.innerHTML += ' | <b>Marca</b>: ' + val.marca
            res.innerHTML += ' | <b>Foto do Produto (URL)</b>: ' + val.ft_produto + '<br><br><hr><br>'
        })
    })
    .catch((err)=>{
        console.error('Falha ao tentar listar Produtos!',err)
        res.innerHTML += 'Falha ao tentar listar Produtos!'
    })
})