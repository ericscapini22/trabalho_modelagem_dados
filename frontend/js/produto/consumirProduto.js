let res = document.getElementById('res')
let consumirProduto = document.getElementById('consumirProduto')

consumirProduto.addEventListener('click', (e) => {
    e.preventDefault()

    fetch('https://dummyjson.com/products')
        .then(resp => resp.json())
        .then(valores => {
            res.innerHTML = 'Dados da API consumidos com Sucesso! <br><br><hr><br>'
            valores.products.forEach(val => {
                res.innerHTML += 'ID do Produto: ' + val.id
                res.innerHTML += ' | Título: ' + val.title
                res.innerHTML += ' | Descrição: ' + val.description
                res.innerHTML += ' | Categoria: ' + val.category
                res.innerHTML += ' | Preço: ' + val.price
                res.innerHTML += ' | Porcentagem de Desconto: ' + val.discountPercentage
                res.innerHTML += ' | Estoque: ' + val.stock
                res.innerHTML += ' | Marca: ' + val.brand
                res.innerHTML += ' | Foto do Produto (URL): ' + val.thumbnail + '<br><br><hr><br>'

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