import { Pessoa } from "./Pessoa";

export class Despesa {
    public id: number;
    public pessoa:Array<Pessoa> = new Array<Pessoa>();
    public titulo: string;
    public descricao: string;
    public quantidade: number;
    public dataVencimento: Date;
    public dataPagamento: Date;
    public dataReferencia: Date;
    public ativo: boolean;
}