
export class cliente {  
    constructor (nome, cpf, senha){ // o construtor é para ser passado para os parenteses da instância que antes era 
        this._nome = nome;   //construido por debaixo dos panos e não tinha efeito
        this._cpf = cpf;
        this._senha = senha;
        
    }
    
    get cpf(){
        return this._cpf;
    }

    autenticar(){
        return true;
    }








}
