import { Usuario } from "./Usuario";
import { Pagamento } from "./Pagamento";
import { Despesa } from "./Despesa";

export class Pessoa {
    public id: number;
    public usuario: Usuario;
    public nome: string;
    public numCpf: number;
    public pagamento: Array<Pagamento> = new Array<Pagamento>();
    public despesa: Array<Despesa> = new Array<Despesa>();
}