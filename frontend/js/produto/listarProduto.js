let res = document.getElementById('res')
let listarProduto = document.getElementById('listarProduto')

listarProduto.addEventListener('click', (e)=>{
    e.preventDefault()

    fetch('http://localhost:3000/produto')
    .then(resp => resp.json())
    .then(valores => {
        res.innerHTML = 'Produtos listados com Sucesso! <br><br><hr><br>'
        valores.forEach(val => {
            res.innerHTML += 'ID do Produto: ' + val.idProduto 
            res.innerHTML += ' | Título: ' + val.titulo
            res.innerHTML += ' | Descrição: ' + val.descricao
            res.innerHTML += ' | Categoria: ' + val.categoria
            res.innerHTML += ' | Preço: ' + val.preco
            res.innerHTML += ' | Porcentagem de Desconto: ' + val.porcentagemDesconto
            res.innerHTML += ' | Estoque: ' + val.estoque
            res.innerHTML += ' | Marca: ' + val.marca
            res.innerHTML += ' | Foto do Produto (URL): ' + val.ft_produto + '<br><br><hr><br>'
        })
    })
    .catch((err)=>{
        console.error('Falha ao tentar listar Produtos!',err)
        res.innerHTML += 'Falha ao tentar listar Produtos!'
    })
})