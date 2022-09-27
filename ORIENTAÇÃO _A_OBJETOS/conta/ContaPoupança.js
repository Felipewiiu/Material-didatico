
import { Conta } from "./Conta.js"
export class ContaPoupanca extends Conta {// a contaPoupaça recupera valoresd de Conta

    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial,cliente, agencia);
    }

    sacar(valor){
        const taxa = 1.02 * valor;
        return this._sacar(taxa, valor);
    }

}