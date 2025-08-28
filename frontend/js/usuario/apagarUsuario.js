let res = document.getElementById('res')
let apagarUsuario = document.getElementById('apagarUsuario')

apagarUsuario.addEventListener('click', (e)=>{
    e.preventDefault()

    let idUsuario = Number(document.getElementById('idUsuario').value)

    fetch('http://localhost:3000/usuario/'+idUsuario, {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(resp => resp.json())
    .then(resp => {
        res.innerHTML = '<b>Dados do Usuário apagados com Sucesso!</b>'
    })
    .catch((err)=>{
        console.error('Falha ao tentar apagar dados do Usuário!',err)
        res.innerHTML += 'Falha ao tentar apagar dados do Usuário!'
    })
})