let res = document.getElementById('res')
let cadastrarUsuario = document.getElementById('cadastrarUsuario')

cadastrarUsuario.addEventListener('click', (e)=>{
    e.preventDefault()

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

    fetch('http://localhost:3000/usuario', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(valores => {
        res.innerHTML = 'Usuário cadastrado com Sucesso! <br><br>'
        res.innerHTML += 'Nome: ' + valores.nome
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
        console.error('Falha ao tentar cadastrar Usuário!',err)
        res.innerHTML += 'Falha ao tentar cadastrar Usuário!'
    })
})