
"user strict" // server para revelar erros que estão escondidos =====

// // Pom ----------------------------------------
// let som = document.querySelectorAll('audio')

// function tocaSom (som) {
//   som.play();
// }

// const listaDeTeclas = document.querySelectorAll('.tecla');


// listaDeTeclas[0].onclick = function(){
//     tocaSom(som[0])
// }

// listaDeTeclas[1].onclick = function(){
//     tocaSom(som[1])
// }

function tocaSom (seletorDeAudio) {
    const elemento = document.querySelector(seletorDeAudio);

    if (elemento === null){
        console.log('elemento não encontrado')  
    }

    if (elemento != null){
        
        if(elemento.localName === 'audio'){
            elemento.play();

        }

    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){// é possível enchergar o que está dentro do evento pelo console log

       // console.log(evento);

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}