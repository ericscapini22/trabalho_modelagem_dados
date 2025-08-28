let res = document.getElementById('res')
let listarUsuarioId = document.getElementById('listarUsuarioId')

listarUsuarioId.addEventListener('click', (e)=>{
    e.preventDefault()

    let idUsuario = Number(document.getElementById('idUsuario').value)

    fetch('http://localhost:3000/usuario/'+idUsuario)
        .then(resp => resp.json())
        .then(valores => {
            res.innerHTML = '<b>Usuário listado com Sucesso!</b> <br><br><hr><br>'
            if (valores.idUsuario) {
                res.innerHTML += '<b>ID do Usuário</b>: ' + valores.idUsuario + '<br><br>'
                res.innerHTML += '<b>Nome</b>: ' + valores.nome + '<br><br>'
                res.innerHTML += '<b>Sobrenome</b>: ' + valores.sobrenome + '<br><br>'
                res.innerHTML += '<b>Idade</b>: ' + valores.idade + '<br><br>'
                res.innerHTML += '<b>Email</b>: ' + valores.email + '<br><br>'
                res.innerHTML += '<b>Telefone</b>: ' + valores.telefone + '<br><br>'
                res.innerHTML += '<b>Endereço</b>: ' + valores.endereco + '<br><br>'
                res.innerHTML += '<b>Cidade</b>: ' + valores.cidade + '<br><br>'
                res.innerHTML += '<b>Estado</b>: ' + valores.estado + '<br><br>'
                res.innerHTML += '<b>Data de Nascimento</b>: ' + valores.dataNascimento
            } else {
                res.innerHTML = 'Dados do usuário não encontrados!'
            }
        })
        .catch((err) => {
            console.error('Falha ao tentar buscar Usuário por ID',err)
            res.innerHTML = 'Falha ao tentar buscar Usuário por ID!'
        })
})