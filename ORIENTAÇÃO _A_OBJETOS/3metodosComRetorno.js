
//============================== TRABALHANDO COM RETORDE DE METODO (função)===============

class cliente {
    nome;
    cpf;
    rg;

}

class contacorrente { 
    agencia;// variáveis dentro de uma classe recebe o nome de campus ou atributos
    #saldo = 0; // quando colocamos a serquilha definimos o atributos como privado

    sacar(valor) { // funções dentro de uma classe se chama métodos
        if (this.#saldo >= valor) { // this indica que essa operação deve ser o saldo dentro dessa classe
            this.#saldo -= valor;
            console.log("você sacou " + valor);
            console.log("Seu saldo é " + this.#saldo + " :R$" + "\n");
            return valor // quando o return é usado ele para a função nele e ignora as de baixo
        }
    }

    deposito(valor){
        if(valor > 0){
            this.#saldo += valor 
            console.log("você depositou " + valor);
            console.log("Seu saldo é de " + this.#saldo + " :R$" + "\n");
        }
    }



}

const cliente1 = new cliente(); 

                                
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.rg = 123456789;


const contacorrenteRicardo = new contacorrente();

// saldo é uma variável que não deve ser alterada a não ser por saque ou depósito poor isso ela deve ser privada.

//contacorrenteRicardo.saldo = 100;// por ser privado não pode ser acessado , vou comentar ele

// por ser privado o saldo não é para aparecer - essa referência é uma nova atribuição
//contacorrenteRicardo.#saldo = 100; --> não consigo acessar o saldo pois ele é privado por causa da #

contacorrenteRicardo.agencia = 1001;

contacorrenteRicardo.deposito(200)// comando para de positar dinheiro

let valorSacado = contacorrenteRicardo.sacar(20)// isso vai retornar um valor undefined por que ela vai fazer apenas a operação




console.log(contacorrenteRicardo); 
console.log(valorSacado)



















