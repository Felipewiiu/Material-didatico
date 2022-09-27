export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid) {// o input possui essa propriedade validity que é possívei ser acessada
        input.parentElement.classList.remove('input-container--invalido')
        // removendo uma classe via javascript
        input.parentElement.querySelector(".input-mensagem-erro").innerHTML = ''
    }else{
        input.parentElement.classList.add('input-container--invalido');
        input.parentElement.querySelector(".input-mensagem-erro").innerHTML = mostraMensagemDeErro(tipoDeInput, input)

    }

}

// isso é um vetor de strings
const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
] 

const mensagensDeErro ={// criação de novos objetos
    nome:{
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    email:{
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter de 6 a 12 caracteres e conter uma letra minúscula e outra maiúscula'
    },
    dataNascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior de 18 anos para se cadastrar'// esse é'o erro que criei na mão costomizado
    },
    cpf: {
        valueMissing: 'O campo de CPF não deve estar vazio',
        customError: 'O CPF digitado não é válido'
    },
    cep: {
        valueMissing: 'O campo de cep não pode estar vazio',
        patternMismatch: 'O cep digitado não é válido',
        customError: 'Não foi possível buscar o CEP.'
    },
    logradouro: {
        valueMissing: 'O campo logradouro não pode estar vazio.'
    },
    cidade: {
        valueMissing: 'O campo cidade não pode estar vazio.'

    },
    estado: {
        valueMissing: 'O campo estado não pode estar vazio.'

    },
    preco: {
        valueMissing: 'O campo de preço não pode estar vazio.'
    }
}

//isso é a criação de um objeto validadores
const validadores = {
    dataNascimento:input => validaDataNascimento(input),
    cpf:input => validaCPF(input),
    cep: input => recuperarCEP(input),
}

function mostraMensagemDeErro(tipoDeInput, input){
    let mensagem = ''
    
    tiposDeErro.forEach(erro =>{
        if(input.validity[erro]){
            mensagem = mensagensDeErro[tipoDeInput][erro]
        }
    })

    return mensagem
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if(!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
    }

    input.setCustomValidity(mensagem)
    //setcustomvalidity exibe um alerta de erro no input
}

function maiorQue18(data) {
    const dataAtual = new Date()// ela vazia informa a data atual 
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
    //uma comparação que retorna verdadeiro ou falso
}

//====================================Função para validar cpf ==========================================

function validaCPF(input){
    const cpfFormatado = input.value.replace(/\D/g, "")// replace é a função que pode substituir oque ela encontra
    let mensagem = ""

    if(!checaCPFRepetido(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)){
        mensagem = 'O CPF digitado não é válido'
    }

    input.setCustomValidity(mensagem)


}

// Funções servem para guardar pedaços de códigos

function checaCPFRepetido (cpf){
    //vamos criar um vetor que na verdade é um array
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333'
    ]

    let cpfValido = true
    //forEach é um laço de repetição que verifica cada item do array
    valoresRepetidos.forEach(string =>{
        if(string == cpf){
            cpfValido = false
        }
        
    })

    return cpfValido

}

function checaEstruturaCPF(cpf){
    const multiplicador = 10
    return checaDigitoVerificador(cpf, multiplicador)
}

function checaDigitoVerificador (cpf, multiplicador){
    if(multiplicador >= 12){
        return true
    }

    let multiplicadorInicial = multiplicador
    let soma = 0;
    const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('');
    const digitoVerificador = cpf.charAt()

    for(let contador = 0; multiplicadorInicial > 1; multiplicadorInicial-- ){
        soma = soma + cpfSemDigitos[contador] * multiplicadorInicial
        contador++

    }

    if(digitoVerificador == confirmaDigito(soma)){
        return checaDigitoVerificador(cpf, multiplicador + 1)
    }

    return false
}

function confirmaDigito(soma){
    return 11 - (soma % 11)
}

//==============================função para o campo CEP

function recuperarCEP(input){
    const cep = input.value.replace(/\D/g, '') // o replace recebe dois valores: a regex e depois o que vai substituir
    
    const url = `https://viacep.com.br/ws/${cep}/json` // requisição para a API -- dois campos url e options

    const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
    }

    // trecho para evitar chamar a api desnecessariamente

    if(!input.validity.patternMismatch && !input.validity.valueMissing){
        fetch(url, options).then(
            response => response.json()
        ).then(
            data => {
                if(data.erro){
                    input.setCustomValidity('Não foi possível buscar o CEP')
                    return
                }
                input.setCustomValidity('')
                preencheCamposComCEP(data)
                return
            }
        )
    }
}

function preencheCamposComCEP(data){
                                    //colchetes seleciona o atributo da tag
    const logradouro = document.querySelector('[data-tipo="logradouro"]') 
    const cidade = document.querySelector('[data-tipo="cidade"]')
    const estado = document.querySelector('[data-tipo="estado"]')

    logradouro.value = data.logradouro
    cidade.value = data.localidade
    estado.value = data.uf


}