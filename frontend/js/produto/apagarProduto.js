let res = document.getElementById('res')
let apagarProduto = document.getElementById('apagarProduto')

apagarProduto.addEventListener('click', (e)=>{
    e.preventDefault()

    let idProduto = Number(document.getElementById('idProduto').value)

    fetch('http://localhost:3000/produto/'+idProduto, {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(resp => resp.json())
    .then(resp => {
        res.innerHTML = 'Dados do Produto apagados com Sucesso!'
    })
    .catch((err)=>{
        console.error('Falha ao tentar apagar dados do Produto!',err)
        res.innerHTML += 'Falha ao tentar apagar dados do Produto!'
    })
})