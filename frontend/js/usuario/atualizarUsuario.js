let res = document.getElementById('res')
let atualizarUsuario = document.getElementById('atualizarUsuario')

atualizarUsuario.addEventListener('click', (e)=>{
    e.preventDefault()

    let idUsuario = Number(document.getElementById('idUsuario').value)
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let idade = Number(document.getElementById('idade').value)
    let email = document.getElementById('email').value
    let telefone = document.getElementById('telefone').value
    let endereco = document.getElementById('endereco').value
    let cidade = document.getElementById('cidade').value
    let estado = document.getElementById('estado').value
    let dataNascimento = document.getElementById('dataNascimento').value

    const valores = {
        idUsuario: idUsuario,
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        email: email,
        telefone: telefone,
        endereco: endereco,
        cidade: cidade,
        estado: estado,
        dataNascimento: dataNascimento
    }

    fetch('http://localhost:3000/usuario/'+idUsuario, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(valores => {
        res.innerHTML = '<b>Usuário atualizado com Sucesso!</b> <br><br><hr><br>'
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
    })
    .catch((err)=>{
        console.error('Falha ao tentar atualizar dados do Usuário!',err)
        res.innerHTML += 'Falha ao tentar atualizar dados do Usuário!'
    })
})