/*
ser autenticável significa ter um método autenticar

*/
export class sistemaAutenticação {
    static login(autenticavel, senha) {// propriedade estatica que é enxergada por todas as classes que a consomen
        if (sistemaAutenticação.ehautenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);

        }
        return false
    }


    static ehautenticavel(autenticavel) {// o operador (in) verifica se essa chave existe dentro do valor;
        return "autenticar" in autenticavel &&
            autenticavel.autenticar instanceof Function;
    }
}