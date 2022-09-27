// classe é um tipo análogo a um molde que se pode reutilizar
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

        }
    }

    deposito(valor){// depositar recebe um parâmetro ou em outras palavras argumentos
        if(valor > 0){
            this.#saldo += valor 
            console.log("você depositou " + valor);
            console.log("Seu saldo é " + this.#saldo + " :R$" + "\n");// o saldo da conta só é mostrado dentro da class
        }
    }



}

const cliente1 = new cliente(); // CADA VEZ QUE É CRIADO UM NEW CLIENTE É CRIADO UM NOVO OBJETO CRIADOS A PARTIR DO MOLDE
                                //QUE É A CLASSE  em outras palavras estamos (instanciano) uma cleasse
                                // instanciar é criar um objeto apartir de uma calasse.

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.rg = 123456789;


const contacorrenteRicardo = new contacorrente();

// saldo é uma variável que não deve ser alterada a não ser por saque ou depósito poor isso ela deve ser privada.

//contacorrenteRicardo.saldo = 100;// por ser privado não pode ser acessado , vou comentar ele

// por ser privado o saldo não é para aparecer - essa referência é uma nova atribuição
//contacorrenteRicardo.#saldo = 100; --> não consigo acessar o saldo pois ele é privado por causa da #

contacorrenteRicardo.agencia = 1001;

contacorrenteRicardo.sacar(1000);// comando para sacar dinheiro -- o programa não saca se o valor ultrapassar da conta
contacorrenteRicardo.deposito(20)// comando para de positar dinheiro




//console.log(contacorrenteRicardo.saldo);// esse valor é undefined pois sá pode ser acessado dentro da class

console.log(contacorrenteRicardo); // o saldo não aparece no node js pois ele é privado
contacorrenteRicardo.deposito(1000);
contacorrenteRicardo.sacar(1020);
contacorrenteRicardo.deposito(500);
contacorrenteRicardo.deposito(10);












//======================SOBRE ATRIBUTOS PRIVADOS

// COMO ISSO NÃO FOI IMPLEMENTADO AINDA  a comunidade definiu que um atributo privado é definido com underline como
// _saldo --> isso indica que esse valor não deve ser alterado informalmente



