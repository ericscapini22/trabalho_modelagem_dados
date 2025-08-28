let res = document.getElementById('res')
let listarPorNome = document.getElementById('listarPorNome')

listarPorNome.addEventListener('click', (e)=>{
    e.preventDefault()

    let titulo = document.getElementById('titulo').value

    fetch('http://localhost:3000/usuario/nome/'+titulo)
        .then(resp => resp.json())
        .then(valores => {
            res.innerHTML += '<b>Produto listado com Sucesso!</b> <br><br><hr><br>'
            for (let i = 0; i < valores.length; i++) {
                res.innerHTML += '<b>ID do Produto</b>: ' + valores[i].idProduto + '<br><br>'
                res.innerHTML += '<b>Título</b>: ' + valores[i].titulo + '<br><br>'
                res.innerHTML += '<b>Descrição</b>: ' + valores[i].descricao + '<br><br>'
                res.innerHTML += '<b>Categoria</b>: ' + valores[i].categoria + '<br><br>'
                res.innerHTML += '<b>Preço</b>: R$ ' + valores[i].preco + '<br><br>'
                res.innerHTML += '<b>Porcentagem de Desconto</b>: ' + valores[i].porcentagemDesconto + '%<br><br>'
                res.innerHTML += '<b>Estoque</b>: ' + valores[i].estoque + '<br><br>'
                res.innerHTML += '<b>Marca</b>: ' + valores[i].marca + '<br><br>'
                res.innerHTML += `<b>Foto do Produto</b>: <br><img src="${valores.ft_produto}" width="150px" style="display:block; margin: 20px auto;">`
            }

        })
        .catch((err) => {
            console.error('Falha ao tentar buscar Produto pelo Título!')
            res.innerHTML = 'Falha ao tentar buscar Produto pelo Título!'
        })
})