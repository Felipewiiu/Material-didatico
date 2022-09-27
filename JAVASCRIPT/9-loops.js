console.log("Trabalhando com loops \n\n")

console.log("Destinos para venda \n")

const listaDedestinos = new Array( // para declarar uma lista é preciso colocar o array com letra maiuscula

    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,

)

const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = true;
const destino = "São Paulo";
let destinoExiste = false;

console.log("Lista de destinos ")
console.log(listaDedestinos);
console.log("\n\n")

// para verificar o funcionamento do  do código é preciso debugar no comando executar depuração


const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true)// é possível colocar uma operação destro de uma variável

let contador = 0;
while(contador < listaDedestinos.length){
    if(listaDedestinos[contador] == destino){
    console.log("Destino encontrado")
    console.log(destino);
    destinoExiste = true
    break
    }
    contador++

}

if(destinoExiste == false){
    console.log("Destino não encontrado");
}

if(temPassagemComprada && estaAcompanhada){
    console.log("Boa viagem!")
}else{
    console.log("Desculpe tivemos um erro")
}





