let grafico = document.getElementById('grafico')

grafico.addEventListener('click', () => {
    let inicio = Number(document.getElementById('inicio').value)
    let final = Number(document.getElementById('final').value)

    let titulo = []
    let estoque = []
    let nome = []
    let idade = []

    if ((inicio > final) || (final - inicio >= 10)) {
        alert('os números não podem ser iguais, negativos ou com uma distancia maior que 10')
    } else {
        fetch('http://localhost:3000/produto')
            .then(resp => resp.json())
            .then(valores => {
                for (let i = 0; i < valores.length; i++) {
                    if ((valores[i].idProduto >= inicio) && (valores[i].idProduto <= final)) {
                        titulo.push(valores[i].titulo)
                        estoque.push(valores[i].estoque)
                    }
                }

                let chartExistente = Chart.getChart('graficoProdutos')
                if (chartExistente) {
                    chartExistente.destroy()
                }

                let ctx = document.getElementById('graficoProdutos').getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: titulo,
                        datasets: [{
                            label: 'Estoque',
                            data: estoque,
                            backgroundColor: 'rgba(54, 162, 235, 0.7)',
                            borderColor: 'rgba(0, 17, 255, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                })
            })
            .catch((err) => {
                console.error('Erro ao listar!', err);
            })

        fetch('http://localhost:3000/usuario')
            .then(resp => resp.json())
            .then(valores => {
                for (let i = 0; i < valores.length; i++) {
                    if ((valores[i].idUsuario >= inicio) && (valores[i].idUsuario <= final)) {
                        let nomeCompleto = valores[i].nome + ' ' + valores[i].sobrenome
                        nome.push(nomeCompleto)
                        idade.push(valores[i].idade)
                    }
                }

                let chartExistente = Chart.getChart('graficoUsuarios')
                if (chartExistente) {
                    chartExistente.destroy()
                }

                let ctx = document.getElementById('graficoUsuarios').getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: nome,
                        datasets: [{
                            label: 'Idade',
                            data: idade,
                            backgroundColor: 'rgba(54, 235, 54, 0.7)',
                            borderColor: 'rgba(26, 141, 22, 1)',
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                })
            })
            .catch((err) => {
                console.error('Erro ao listar!', err);
            })
    }
})