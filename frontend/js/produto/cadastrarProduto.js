let res = document.getElementById('res')
let cadastrarProduto = document.getElementById('cadastrarProduto')

cadastrarProduto.addEventListener('click', (e)=>{
    e.preventDefault()

    let titulo = document.getElementById('titulo').value
    let descricao = document.getElementById('descricao').value
    let categoria = document.getElementById('categoria').value
    let preco = document.getElementById('preco').value
    let porcentagemDesconto = Number(document.getElementById('porcentagemDesconto').value)
    let estoque = Number(document.getElementById('estoque').value)
    let marca = document.getElementById('marca').value
    let ft_produto = document.getElementById('ft_produto').value

    const valores = {
        titulo: titulo,
        descricao: descricao,
        categoria: categoria,
        preco: preco,
        porcentagemDesconto: porcentagemDesconto,
        estoque: estoque,
        marca: marca,
        ft_produto: ft_produto
    }

    fetch('http://localhost:3000/produto', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(valores => {
        res.innerHTML = '<b>Produto cadastrado com Sucesso!</b> <br><br><hr><br>'
        res.innerHTML += '<b>Título</b>: ' + valores.titulo + '<br><br>'
        res.innerHTML += '<b>Descrição</b>: ' + valores.descricao + '<br><br>'
        res.innerHTML += '<b>Categoria</b>: ' + valores.categoria + '<br><br>'
        res.innerHTML += '<b>Preço</b>: ' + valores.preco + '<br><br>'
        res.innerHTML += '<b>Porcentagem de Desconto</b>: ' + valores.porcentagemDesconto + '<br><br>'
        res.innerHTML += '<b>Estoque</b>: ' + valores.estoque + '<br><br>'
        res.innerHTML += '<b>Marca</b>: ' + valores.marca + '<br><br>'
        res.innerHTML += '<b>Foto do Produto (URL)</b>: ' + valores.ft_produto
    })
    .catch((err)=>{
        console.error('Falha ao tentar cadastrar Produto!',err)
        res.innerHTML += 'Falha ao tentar cadastrar Produto!'
    })
})