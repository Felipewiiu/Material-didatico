const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || [] // essa linha consulta o localstorage
// Jason.parse  analisa uma string JSON, construindo o valor ou um objeto JavaScript descrito pela string
// localStorage guarda elementos tipo strings


itens.forEach((elemento) => {// Consulta ao locaStorage  e cria na tela o objeto
    criaElemento(elemento)
})

form.addEventListener("submit", (evento) =>{
    evento.preventDefault(); // evita o comportamento padrão do submit

    const nome = evento.target.elements['nome'] // colchetes acessa o chave do objeto / elements estão dentro do evento sbmit
    const quantidade = evento.target.elements['quantidade']
    
    const itemAtual = { // criação de um objeto
        "nome" : nome.value,
        "quantidade" : quantidade.value
        // os inputs vão preencher os valores dos nomes e quantidades
    }
    
    const existe = itens.find(elemento => elemento.nome === nome.value)
    
    if(existe) {
        itemAtual.id = existe.id
        
        atualizaElemento(itemAtual)
        
    }else{
        itemAtual.id = itens.length

        criaElemento(itemAtual)
    
       itens.push(itemAtual)
       //coloca o item atual no array de items
    }


    localStorage.setItem("itens", JSON.stringify(itens))
    // JSON.stringify --> transforma um objeto em string
    
    
    // o localStorage recebe dois parâmetros ("chave", valor) do objeto
     // o elemento criado é registrado no navegador
     // localStorage só permite guardar arrays


    nome.value = ""
    quantidade.value = ""
    
})

function criaElemento (iten){// estrutura de criação de elemento na tela

    const novoItem = document.createElement('li')//criou elemento
    novoItem.classList.add("item")//adicionou uma classe

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = iten.quantidade
    numeroItem.dataset.id = iten.id
    

    novoItem.appendChild(numeroItem) // encapsulou um elementro dentro do outro

    novoItem.innerHTML += iten.nome

    novoItem.appendChild(botaoDeleta())

    lista.appendChild(novoItem)// o elemento criado é colocado dentro da lista 

    botaoDeleta()
    
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']")
}

function botaoDeleta() {
    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = "x"

    return elementoBotao;

}


