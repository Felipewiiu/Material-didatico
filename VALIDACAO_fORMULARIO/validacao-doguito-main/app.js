import { valida } from './validacao.js'// inportei essa função

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
// ============== aplicação da máscara monetária

    if(input.dataset.tipo === 'preco') {
        SimpleMaskMoney.setMask(input, {
            prefix: 'R$ ',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        })
    }

    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})


//=================================== pratica de forEach

//forEach executa uma função para cada elemento de um array

// const alimentos = ['banana', 'maçã','tomate', 'cenoura']

// alimentos.forEach((itemCorrent)=>{
//     if(itemCorrent == 'laranja'){
//         console.log('alimento encontrado')
//     }else{
//         console.log('Sem estoque disponivel')
//     }
// })


// for(var contador = 0; contador < alimentos.length; contador++){
//     console.log(alimentos[contador])
// }