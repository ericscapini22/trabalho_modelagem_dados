let res = document.getElementById('res')
let listarPorNome = document.getElementById('listarPorNome')

listarPorNome.addEventListener('click', (e)=>{
    e.preventDefault()

    let nome = document.getElementById('nome').value

    fetch('http://localhost:3000/usuario/nome/'+nome)
        .then(resp => resp.json())
        .then(valores => {
            res.innerHTML = '<b>Usuário listado com Sucesso!</b> <br><br><hr><br>'
            for (let i = 0; i < valores.length; i++) {
                res.innerHTML += '<b>ID do Usuário</b>: ' + valores[i].idUsuario + '<br><br>'
                res.innerHTML += '<b>Nome</b>: ' + valores[i].nome + '<br><br>'
                res.innerHTML += '<b>Sobrenome</b>: ' + valores[i].sobrenome + '<br><br>'
                res.innerHTML += '<b>Idade</b>: ' + valores[i].idade + '<br><br>'
                res.innerHTML += '<b>Email</b>: ' + valores[i].email + '<br><br>'
                res.innerHTML += '<b>Telefone</b>: ' + valores[i].telefone + '<br><br>'
                res.innerHTML += '<b>Endereço</b>: ' + valores[i].endereco + '<br><br>'
                res.innerHTML += '<b>Cidade</b>: ' + valores[i].cidade + '<br><br>'
                res.innerHTML += '<b>Estado</b>: ' + valores[i].estado + '<br><br>'
                res.innerHTML += '<b>Data do Nascimento</b>: ' + valores[i].dataNascimento
            }

        })
        .catch((err) => {
            console.error('Falha ao tentar buscar Usuário pelo Nome!')
            res.innerHTML = 'Falha ao tentar buscar Usuário pelo Nome!'
        })
})