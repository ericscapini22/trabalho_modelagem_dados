let res = document.getElementById('res')
let consumirUsuario = document.getElementById('consumirUsuario')

consumirUsuario.addEventListener('click', (e) => {
    e.preventDefault()

    fetch('https://dummyjson.com/users')
        .then(resp => resp.json())
        .then(valores => {
            res.innerHTML = 'Dados da API consumidos com Sucesso! <br><br><hr><br>'
            valores.users.forEach(val => {
                res.innerHTML += 'ID do Usuário: ' + val.id
                res.innerHTML += ' | Nome: ' + val.firstName
                res.innerHTML += ' | Sobrenome: ' + val.lastName
                res.innerHTML += ' | Idade: ' + val.age
                res.innerHTML += ' | Email: ' + val.email
                res.innerHTML += ' | Telefone: ' + val.phone
                res.innerHTML += ' | Endereço: ' + val.address.address
                res.innerHTML += ' | Cidade: ' + val.address.city
                res.innerHTML += ' | Estado: ' + val.address.state
                res.innerHTML += ' | Data de Nascimento: ' + val.birthDate + '<br><br><hr><br>'

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