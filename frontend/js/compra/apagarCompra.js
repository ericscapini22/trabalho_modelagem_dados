let res = document.getElementById('res')
let apagarCompra = document.getElementById('apagarCompra')

apagarCompra.addEventListener('click', (e)=>{
    e.preventDefault()

    let idCompra = Number(document.getElementById('idCompra').value)

    fetch('http://localhost:3000/compra/'+idCompra, {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(resp => resp.json())
    .then(resp => {
        res.innerHTML = '<b>Dados da Compra apagados com Sucesso!</b>'
    })
    .catch((err)=>{
        console.error('Falha ao tentar apagar dados da Compra!',err)
        res.innerHTML += 'Falha ao tentar apagar dados da Compra!'
    })
})