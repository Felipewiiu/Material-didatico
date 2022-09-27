import { Conta } from "./Conta.js"
export class contaCorrente extends Conta {//o objetivo de usar  a wordkey extends é a reultilização de códigos
    
    
    static numeroDeconta = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia)// a palávra SUPER chama o construtor pai e seus argumentos que são 3 
        contaCorrente.numeroDeconta += 1;
    }

    //está sobrescrevendo o comportamento de sacar
    sacar(valor) { // isso é um método sinônimo de uma função
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }

}
