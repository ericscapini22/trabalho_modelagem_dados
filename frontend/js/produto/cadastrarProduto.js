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
        res.innerHTML = 'Produto cadastrado com Sucesso! <br><br>'
        res.innerHTML += 'Título: ' + valores.titulo
        res.innerHTML += ' | Descrição: ' + valores.descricao
        res.innerHTML += ' | Categoria: ' + valores.categoria
        res.innerHTML += ' | Preço: ' + valores.preco
        res.innerHTML += ' | Porcentagem de Desconto: ' + valores.porcentagemDesconto
        res.innerHTML += ' | Estoque: ' + valores.estoque
        res.innerHTML += ' | Marca: ' + valores.marca
        res.innerHTML += ' | Foto do Produto (URL): ' + valores.ft_produto
    })
    .catch((err)=>{
        console.error('Falha ao tentar cadastrar Produto!',err)
        res.innerHTML += 'Falha ao tentar cadastrar Produto!'
    })
})