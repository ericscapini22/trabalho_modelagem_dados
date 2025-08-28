let res = document.getElementById('res')
let consumirUsuario = document.getElementById('consumirUsuario')

consumirUsuario.addEventListener('click', (e) => {
    e.preventDefault()

    fetch('https://dummyjson.com/users')
        .then(resp => resp.json())
        .then(valores => {
            res.innerHTML = '<b>Dados da API consumidos com Sucesso!</b> <br><br><hr><br>'
            valores.users.forEach(val => {
                res.innerHTML += '<b>ID do Usuário</b>: ' + val.id
                res.innerHTML += ' | <b>Nome</b>: ' + val.firstName
                res.innerHTML += ' | <b>Sobrenome</b>: ' + val.lastName
                res.innerHTML += ' | <b>Idade</b>: ' + val.age
                res.innerHTML += ' | <b>Email</b>: ' + val.email
                res.innerHTML += ' | <b>Telefone</b>: ' + val.phone
                res.innerHTML += ' | <b>Endereço</b>: ' + val.address.address
                res.innerHTML += ' | <b>Cidade</b>: ' + val.address.city
                res.innerHTML += ' | <b>Estado</b>: ' + val.address.state
                res.innerHTML += ' | <b>Data de Nascimento</b>: ' + val.birthDate + '<br><br><hr><br>'

                const valores = {
                    nome: val.firstName,
                    sobrenome: val.lastName,
                    idade: val.age,
                    email: val.email,
                    telefone: val.phone,
                    endereco: val.address.address,
                    cidade: val.address.city,
                    estado: val.address.state,
                    dataNascimento: val.birthDate
                }

                fetch('http://localhost:3000/usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(valores)
            })
                .then(resp => resp.json())
                .then(valores => {
                    console.log(`${valores.nome}, foi cadastrado com Sucesso!`);
                })
                .catch((err) => {
                    console.error('Falha ao tentar cadastrar API!', err);
                })
            }) 
        })
        .catch((err) => {
            console.error('Falha ao tentar consumir dados da API de Usuários!', err)
            res.innerHTML += 'Falha ao tentar consumir dados da API de Usuários!'
        })
})