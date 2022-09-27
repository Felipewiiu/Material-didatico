import { Conta } from "./Conta.js";

export class contaSalario extends Conta{
    constructor(cliente){
        super(0, cliente, 100);
    }

// esse sacar sobrescreve o metodo sacar da classe conta
    sacar(valor){
        const taxa = 1.01 * valor;
        return this._sacar(valor, taxa);
    }
    
}