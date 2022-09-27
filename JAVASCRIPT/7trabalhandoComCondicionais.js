console.log("Trabalhando com condicionais")


console.log("Destinos para venda")

const listaDedestinos = new Array( // para declarar uma lista é preciso colocar o array com letra maiuscula

    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,

)

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true

console.log(listaDedestinos);

console.log("Destinos para reservar \n");

// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade")
//     listaDedestinos.splice(1,1)
// }else{   
//     //console.log("Não podemos vender para menor de idade")
//     if (estaAcompanhada){
//         console.log("comprador está acompanhado")
//         listaDedestinos.splice(1,1); // removendo um item da primeira posição e apenas um

//     }else{
//         console.log("Não posso vender comprador menor de idade")
//     }
// }

//===========================================================================================

// OUTRA FORMA DE  SE ESCREVER O ELSE É O (ELSE IF ) DIRETO DO CÓDIGO A CIMA


// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade")
//     listaDedestinos.splice(1, 1)
// } else if (estaAcompanhada) {     //console.log("Não podemos vender para menor de idade")
//     console.log("comprador está acompanhado")
//     listaDedestinos.splice(1, 1); // removendo um item da primeira posição e apenas um

// } else {
//     console.log("Não posso vender comprador menor de idade")
// }


// console.log(listaDedestinos);

//================  OPERADOR PARA MAIS DE UM COMANDO NO IF (&&) ==> (e)
//================  OPERADOR LÓGICO (||) ==> (OU)


if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Comprador maior de idade")
    listaDedestinos.splice(1, 1)

} else {
    console.log("Não posso vender comprador menor de idade")
}

console.log("Embarque: \n\n")

if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!!")
} else {
    console.log("Você não pode embarcar");
        
}



console.log(listaDedestinos);





