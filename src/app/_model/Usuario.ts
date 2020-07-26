import { Acesso } from "./Acesso";
import { Pessoa } from "./Pessoa";

export class Usuario {
    public id: number;
    public pessoa: Pessoa;
    public usuario: string;
    public email: string;
    public senha: string;
    public token: string;
    public acesso:Array<Acesso> = new Array<Acesso>();
    public ultimoLogin: Date;
    public chaveAtivacao: string;
    public ativo: boolean;
}