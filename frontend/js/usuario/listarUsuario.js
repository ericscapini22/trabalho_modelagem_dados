let res = document.getElementById('res')
let listarUsuario = document.getElementById('listarUsuario')

listarUsuario.addEventListener('click', (e)=>{
    e.preventDefault()
    res.innerHTML = ''

    fetch('http://localhost:3000/usuario')
    .then(resp => resp.json())
    .then(valores => {
        res.innerHTML += '<b>Usuários listados com Sucesso!</b> <br><br><hr><br>'
        valores.forEach(val => {
            res.innerHTML += '<b>ID do Usuário</b>: ' + val.idUsuario 
            res.innerHTML += ' | <b>Nome</b>: ' + val.nome
            res.innerHTML += ' | <b>Sobrenome</b>: ' + val.sobrenome
            res.innerHTML += ' | <b>Idade</b>: ' + val.idade
            res.innerHTML += ' | <b>Email</b>: ' + val.email
            res.innerHTML += ' | <b>Telefone</b>: ' + val.telefone
            res.innerHTML += ' | <b>Endereço</b>: ' + val.endereco
            res.innerHTML += ' | <b>Cidade</b>: ' + val.cidade
            res.innerHTML += ' | <b>Estado</b>: ' + val.estado
            res.innerHTML += ' | <b>Data de Nascimento</b>: ' + val.dataNascimento + '<br><br><hr><br>'
        })
    })
    .catch((err)=>{
        console.error('Falha ao tentar listar Usuários!',err)
        res.innerHTML += 'Falha ao tentar listar Usuários!'
    })
})