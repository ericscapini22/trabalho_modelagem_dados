let res = document.getElementById('res')
let listarPorId = document.getElementById('listarPorId')

listarPorId.addEventListener('click', () => {
    let idProduto = Number(document.getElementById('idProduto').value)

    fetch('http://localhost:3000/produto/'+idProduto)
        .then(resp => resp.json())
        .then(valores => {
            res.innerHTML = '<b>Produto listado com Sucesso!</b> <br><br><hr><br>'
            if (valores.idProduto) {
                res.innerHTML += '<b>ID do Produto</b>: ' + valores.idProduto + '<br><br>'
                res.innerHTML += '<b>Título</b>: ' + valores.titulo + '<br><br>'
                res.innerHTML += '<b>Descrição</b>: ' + valores.descricao + '<br><br>'
                res.innerHTML += '<b>Categoria</b>: ' + valores.categoria + '<br><br>'
                res.innerHTML += '<b>Preço</b>: ' + valores.preco + '<br><br>'
                res.innerHTML += '<b>Porcentagem de Desconto</b>: ' + valores.porcentagemDesconto + '<br><br>'
                res.innerHTML += '<b>Estoque</b>: ' + valores.estoque + '<br><br>'
                res.innerHTML += '<b>Marca</b>: ' + valores.marca + '<br><br>'
                res.innerHTML += '<b>Foto do Produto (URL)</b>: ' + valores.ft_produto + '<br><br><hr><br>'
            } else {
                res.innerHTML = 'Dados do produto não encontrados!'
            }

        })
        .catch((err) => {
            console.error('Falha ao tentar listar Produto por ID',err)
            res.innerHTML = 'Falha ao tentar listar Produto por ID!'
        })
})