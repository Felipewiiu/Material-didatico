export class Conta {// isso é uma classe abstrata pois ela não pode ser instanciada.



    constructor(saldoInicial, cliente, agencia) {

        
        if(this.constructor == Conta){
            throw new erro ("você não deveria instânciar um objeto do tipo conta diretamente pois ela é uma classe abstrata");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) { // esse código faz proteger de qualquer um fazer atribuição errada nesse campo
        if (novoValor instanceof cliente) {

            this._cliente = novoValor;
        }

    }

    get cliente() {            // isso é um acessor que permite pegar somente esse valor no console.log
        return this._cliente; // e proteger se alguém quiser mudar
    }



    get saldo() {// aqui o saldo foi incapsulado
        return this._saldo
    }


    //===================== METODOS ==========================================================


    sacar(valor) { // O método sacar da conta é abstrato
        throw new erro("O método sacar da conta é abstrato")

    }


    _sacar(taxa, valor) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            console.log("você sacou " + valor);
            console.log("Seu saldo é " + this._saldo + " :R$" + "\n");
            return valorSacado
        
        } 

        return 0
    }

    deposito(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log("você depositou " + valor);
            console.log("Seu saldo é de " + this._saldo + " :R$" + "\n");
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);// usa a variável para guardar o valor de um método
        conta.deposito(valorSacado);

    }



}