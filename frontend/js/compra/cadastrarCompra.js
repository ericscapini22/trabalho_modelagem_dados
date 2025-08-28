let res = document.getElementById('res')
let cadastrarCompra = document.getElementById('cadastrarCompra')

cadastrarCompra.addEventListener('click', (e)=>{
    e.preventDefault()

    let codUsuario = Number(document.getElementById('codUsuario').value)
    let codProduto = Number(document.getElementById('codProduto').value)
    let quant = Number(document.getElementById('quant').value)
    let dataCompra = document.getElementById('dataCompra').value
    let precoUnitario = document.getElementById('precoUnitario').value
    let descontoAplicado = Number(document.getElementById('descontoAplicado').value)
    let precoFinal = document.getElementById('precoFinal').value
    let formaPagamento = document.getElementById('formaPagamento').value
    let statusCompra = document.getElementById('statusCompra').value

    const valores = {
        codUsuario: codUsuario,
        codProduto: codProduto,
        quant: quant,
        dataCompra: dataCompra,
        precoUnitario: precoUnitario,
        descontoAplicado: descontoAplicado,
        precoFinal: precoFinal,
        formaPagamento: formaPagamento,
        statusCompra: statusCompra
    }

    fetch('http://localhost:3000/compra', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(valores => {
        res.innerHTML = '<b>Compra cadastrada com Sucesso!</b> <br><br><hr><br>'
        res.innerHTML += '<b>ID do Usuário</b>: ' + valores.codUsuario + '<br><br>'
        res.innerHTML += '<b>ID do Produto</b>: ' + valores.codProduto + '<br><br>'
        res.innerHTML += '<b>Quantidade</b>: ' + valores.quant + '<br><br>'
        res.innerHTML += '<b>Data da Compra</b>: ' + valores.dataCompra + '<br><br>'
        res.innerHTML += '<b>Preço Unitário</b>: ' + valores.precoUnitario + '<br><br>'
        res.innerHTML += '<b>Desconto Aplicado</b>: ' + valores.descontoAplicado + '<br><br>'
        res.innerHTML += '<b>Preço Final</b>: ' + valores.precoFinal + '<br><br>'
        res.innerHTML += '<b>Forma de Pagamento</b>: ' + valores.formaPagamento + '<br><br>'
        res.innerHTML += '<b>Status da Compra</b>: ' + valores.statusCompra + '<br><br>'
    })
    .catch((err)=>{
        console.error('Falha ao tentar cadastrar Compra!',err)
        res.innerHTML += 'Falha ao tentar cadastrar Compra!'
    })
})