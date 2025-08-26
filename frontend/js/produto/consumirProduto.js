let res = document.getElementById('res')
let consumirProduto = document.getElementById('consumirProduto')

consumirProduto.addEventListener('click', (e)=>{
    e.preventDefault()

    fetch('https://dummyjson.com/products')
    .then(resp => resp.json())
    .then(valores => {
        res.innerHTML = 'Dados da API consumidos com Sucesso! <br><br><hr><br>'
        console.log(valores.users)
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
        })
    })
    .catch((err)=>{
        console.error('Falha ao tentar consumir dados da API!', err)
        res.innerHTML += 'Falha ao tentar consumir dados da API!'
    })
})