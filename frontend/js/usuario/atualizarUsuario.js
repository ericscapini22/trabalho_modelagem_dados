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
        res.innerHTML = 'Usuário atualizado com Sucesso! <br><br>'
        res.innerHTML += 'ID do Usuário: ' + valores.idUsuario
        res.innerHTML += ' | Nome: ' + valores.nome
        res.innerHTML += ' | Sobrenome: ' + valores.sobrenome
        res.innerHTML += ' | Idade: ' + valores.idade
        res.innerHTML += ' | Email: ' + valores.email
        res.innerHTML += ' | Telefone: ' + valores.telefone
        res.innerHTML += ' | Endereço: ' + valores.endereco
        res.innerHTML += ' | Cidade: ' + valores.cidade
        res.innerHTML += ' | Estado: ' + valores.estado
        res.innerHTML += ' | Data de Nascimento: ' + valores.dataNascimento
    })
    .catch((err)=>{
        console.error('Falha ao tentar atualizar dados do Usuário!',err)
        res.innerHTML += 'Falha ao tentar atualizar dados do Usuário!'
    })
})