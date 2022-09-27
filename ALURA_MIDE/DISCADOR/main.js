// let teclas = document.querySelectorAll('.tecla');
// const campoTel = document.querySelector('.input')

// function discar (numero){
//     return teclas[numero];
// }

// for (contador = 0; contador < teclas.length; contador++){
//     //console.log(`esse é o valor do contador ${contador}`);

//     const numero = discar(contador);
//     const numeroDigitado = numero.classList[1]
    
//     numero.onclick = function(){
//         console.log(`você clicou na ${numeroDigitado} `)
//     }


// }

const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

//Quando se referênciar o tipo da classe se usa []

for (indice = 0; indice < listaDeTeclas.length; indice++) {

  const tecla = listaDeTeclas[indice];

  tecla.onclick = function () {
    inputTel.value = tecla.value;
  }
}

// com o input.value --> é possível atribuir valor ao input

