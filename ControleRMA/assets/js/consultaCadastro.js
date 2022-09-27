






















//-----------------------------------------------------------------------------------------------

const campo = document.querySelectorAll("[data-campo]")
const barraAtiva = document.querySelector("[data-barraAtiva]")
const inputNunber = document.querySelector(".input-number")
let contador = 50
const informacao = [1]// Guardar informações dos cammpos



campo.forEach((elemento) =>{
    elemento.addEventListener("click", () =>{
        if(contador > 300){
            contador = 300
        }
        barraAtiva.setAttribute("style", "width: " + contador + "px")
        contador = contador + 50

    })
})

//*************************************************gravação de informaçã */





