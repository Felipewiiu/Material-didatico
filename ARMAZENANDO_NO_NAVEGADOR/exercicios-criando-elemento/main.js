const botao = document.querySelector("[data-btn]")
const botao2 = document.querySelector("[data-btn2]")

const container = document.querySelector("[data-container]")

botao.addEventListener("click", () =>{
    criaElemento()
})

function criaElemento (){
    const elemento = document.createElement("div")
    elemento.classList.add("estilo-elemento")

    container.appendChild(elemento)// o elemento criado vai para dentro da div
    console.log(elemento)
}

// =========================== função carregar

botao2.addEventListener("click", () =>{
    carregar()
})

function carregar (){
        setInterval(criaElemento, 1000)
        
}





