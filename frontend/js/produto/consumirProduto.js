let res = document.getElementById('res')
let consumirProduto = document.getElementById('consumirProduto')

consumirProduto.addEventListener('click', (e) => {
    e.preventDefault()

    fetch('https://dummyjson.com/products')
        .then(resp => resp.json())
        .then(valores => {
            res.innerHTML = '<b>Dados da API consumidos com Sucesso!</b> <br><br><hr><br>'
            valores.products.forEach(val => {
                res.innerHTML += '<b>ID do Produto</b>: ' + val.id
                res.innerHTML += ' | <b>Título</b>: ' + val.title
                res.innerHTML += ' | <b>Descrição</b>: ' + val.description
                res.innerHTML += ' | <b>Categoria</b>: ' + val.category
                res.innerHTML += ' | <b>Preço</b>: ' + val.price
                res.innerHTML += ' | <b>Porcentagem de Desconto</b>: ' + val.discountPercentage
                res.innerHTML += ' | <b>Estoque</b>: ' + val.stock
                res.innerHTML += ' | <b>Marca</b>: ' + val.brand
                res.innerHTML += ' | <b>Foto do Produto (URL)</b>: ' + val.thumbnail + '<br><br><hr><br>'

                const valores = {
                    titulo: val.title,
                    descricao: val.description,
                    categoria: val.category,
                    preco: val.price,
                    porcentagemDesconto: val.discountPercentage,
                    estoque: val.stock,
                    marca: val.brand,
                    ft_produto: val.thumbnail
                }

                fetch('http://localhost:3000/produto', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(valores)
                })
                    .then(resp => resp.json())
                    .then(valores => {
                        console.log(`${valores.titulo}, foi cadastrado com Sucesso!`);
                    })
                    .catch((err) => {
                        console.error('Falha ao tentar cadastrar API!', err);
                    })
            })
        })
        .catch((err) => {
            console.error('Falha ao tentar consumir dados da API de Produtos!', err)
            res.innerHTML += 'Falha ao tentar consumir dados da API de Produtos!'
        })
})