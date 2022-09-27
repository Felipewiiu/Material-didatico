const listaDestinos = new Array(
    `São Paulo`

)

let input = document.getElementById("destino")
let button = document.getElementById("enviar")

input.focus()

function entradaDeDados(){
    listaDestinos.push(input.value)
    input.value = "";
    input.focus()
}

button.onclick = entradaDeDados
console.log(listaDestinos)


