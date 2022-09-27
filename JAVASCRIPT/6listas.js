console.log(`Trabalhando com listas`) // com crase para fazer a interpolação de váriáveis

// const salvador = `Salvador`;

// const saoPaulo = `São Paulo`

// const rioDeJaneiro = `Rio de Janeiro`;

//=======================================================> control + k + c serve para comentar um bloco inteiro

console.log("Destinos possíveis");

//console.log(salvador, saoPaulo, rioDeJaneiro);

// Essa é a maneira mais difício de se trabalhar com listas, a melhor maneira é trabalhar com ARRAYS []

//==============================================================================

const listasDeDestinos = new Array( // essa é a nova forma de se trabalhar com listas

    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,    

);

console.log(listasDeDestinos);

// vamos criar agora um comando que possa adicionar destinos de forma dinâmica na nossa lista 

listasDeDestinos.push(`Curitiba`, `Bahia`); // esse push é o comando usado para adicionar elementos

console.log(listasDeDestinos);

// Agora um comando para se remover um elemento de dentro do arrays --> splice

listasDeDestinos.splice(1,1); // dentro dos parenteses precisamos passar a posição e a quantidades de elementos que deseja
                           // estar retirando. No caso são paulo position one 1

console.log(listasDeDestinos);



var alunosEscola = new Array (

    `Felipe`,
    `Juana`,
    `carla`

)


console.log(alunosEscola);


