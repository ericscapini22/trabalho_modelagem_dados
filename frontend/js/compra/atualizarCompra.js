let res = document.getElementById('res')
let atualizarCompra = document.getElementById('atualizarCompra')

atualizarCompra.addEventListener('click', (e)=>{
    e.preventDefault()

    let idCompra = Number(document.getElementById('idCompra').value)
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
        idCompra: idCompra,
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

    fetch('http://localhost:3000/compra/'+idCompra, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(valores => {
        res.innerHTML = 'Compra atualizada com Sucesso! <br><br>'
        res.innerHTML += 'ID da Compra: ' + valores.idCompra
        res.innerHTML += ' | ID do Usuário: ' + valores.codUsuario
        res.innerHTML += ' | ID do Produto: ' + valores.codProduto
        res.innerHTML += ' | Quantidade: ' + valores.quant
        res.innerHTML += ' | Data da Compra: ' + valores.dataCompra
        res.innerHTML += ' | Preço Unitário: ' + valores.precoUnitario
        res.innerHTML += ' | Desconto Aplicado: ' + valores.descontoAplicado
        res.innerHTML += ' | Preço Final: ' + valores.precoFinal
        res.innerHTML += ' | Forma de Pagamento: ' + valores.formaPagamento
        res.innerHTML += ' | Status da Compra: ' + valores.statusCompra
    })
    .catch((err)=>{
        console.error('Falha ao tentar atualizar dados da Compra!',err)
        res.innerHTML += 'Falha ao tentar atualizar dados da Compra!'
    })
})