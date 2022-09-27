const painel = document.querySelector(".painel-os")
const formulario = document.querySelector("[data-form]")
const bancoDeDados = []

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const data = evento.target.elements['data'];
    const organizacao = evento.target.elements['organizacao'];
    const numeroRMA = evento.target.elements['numero-rma'];
    const numeroNf = evento.target.elements['numero-nf'];
    const vendedor = evento.target.elements['nome-vendedor'];
    const idAtendimento = evento.target.elements['id-atendimento'];



    const objetoFormulario = {
        "data" : data.value,
        "organizacao" : organizacao.value,
        "numeroRma" : numeroRMA.value,
        "numeroNf" : numeroNf.value,
        "vendedor" : vendedor.value,
        "idAtendimento" : idAtendimento.value

    }

    bancoDeDados.push(objetoFormulario);

    criarElemento(objetoFormulario)


})


function criarElemento (item){
    const novoItem = document.createElement('div')
    novoItem.classList.add('item-painel')
    novoItem.innerHTML = item["organizacao"]

    painel.appendChild(novoItem)

    
}

