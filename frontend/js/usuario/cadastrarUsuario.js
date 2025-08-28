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
        res.innerHTML = '<b>Usuário cadastrado com Sucesso!</b> <br><br><hr><br>'
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
        console.error('Falha ao tentar cadastrar Usuário!',err)
        res.innerHTML += 'Falha ao tentar cadastrar Usuário!'
    })
})