
import { cliente } from "./Cliente.js" //Lê se importe o molde  de ./Cliente
import { Gerente } from "./funcionarios/gerente.js"
import { Diretor } from "./funcionarios/diretor.js"
import { sistemaAutenticação } from "./sistemaLogin.js";

const diretor = new Diretor("carllos", 10000, 12233376587);
diretor.cadastrarSenha(1234);

const gerente = new Gerente("Ricardo", 5000, 67589756700);
gerente.cadastrarSenha(1111);


const Cliente = new cliente("Laís", 89076543289, 222);

const clienteEstaLogado = sistemaAutenticação.login(Cliente, 222);
const diretorEstaLogado = sistemaAutenticação.login(diretor, 1234);
const gerenteEstaLogado = sistemaAutenticação.login(gerente, 1111);



console.log(clienteEstaLogado); 



