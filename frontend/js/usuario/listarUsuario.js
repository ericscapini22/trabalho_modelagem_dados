let res = document.getElementById('res')
let listarUsuario = document.getElementById('listarUsuario')

listarUsuario.addEventListener('click', (e)=>{
    e.preventDefault()

    fetch('http://localhost:3000/usuario')
    .then(resp => resp.json())
    .then(valores => {
        res.innerHTML = 'Usuários listados com Sucesso! <br><br><hr><br>'
        valores.forEach(val => {
            res.innerHTML += 'ID do Usuário: ' + val.idUsuario 
            res.innerHTML += ' | Nome: ' + val.nome
            res.innerHTML += ' | Sobrenome: ' + val.sobrenome
            res.innerHTML += ' | Idade: ' + val.idade
            res.innerHTML += ' | Email: ' + val.email
            res.innerHTML += ' | Telefone: ' + val.telefone
            res.innerHTML += ' | Endereço: ' + val.endereco
            res.innerHTML += ' | Cidade: ' + val.cidade
            res.innerHTML += ' | Estado: ' + val.estado
            res.innerHTML += ' | Data de Nascimento: ' + val.dataNascimento + '<br><br><hr><br>'
        })
    })
    .catch((err)=>{
        console.error('Falha ao tentar listar Usuários!',err)
        res.innerHTML += 'Falha ao tentar listar Usuários!'
    })
})