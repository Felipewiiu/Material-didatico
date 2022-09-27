console.log("Atribuição de variáveis");

//const idade = 29;

//const nome = "Felipe";

let nome = "Felipe";

//const sobrenome = "Oliveira";

let sobrenome = "Oliveira";

console.log(nome + " " + sobrenome); // se eu ultilizar a virgula terei o mesmo resultado

console.log(nome, sobrenome); // neste  caso não foi uma concatenação

// existe duas maneiras de reescrever isso!!

console.log("Meu nome é " + nome + " " + sobrenome);// maneira 1

console.log(`Meu nome é ${nome} ${sobrenome}`) // neste caso foi escrito dentro de duas crases e só funciona assim!!

//============================================================================

// uma CONST  é um variável que quando o seu valor é atribuido ele não muda seu valor é constante
// quando guardado na mémória não muda, em outras palavras ela não pode ser reatribuida.

nome = nome + sobrenome // neste caso vai dar erro pois nome é uma constante.

console.log(nome + " teste 1");

const nomeCompleto = nome + sobrenome;

console.log(nomeCompleto)

//===============================================================================

//  PODEMOS DECLARAR UMA VAREÁVEL E SÓ DEPOIS ATRIBUIR UM VALOR PARA ELA !!


let idade;  // declarando a variável

idade = 26; // Atribuindo seu valor

idade = idade + 1 // reatribuindo a variável

console.log(idade)










