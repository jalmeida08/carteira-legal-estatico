import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urlBase } from '../_data/urlBase';
import { map } from 'rxjs/operators';
import { Pagamento } from '../_model/Pagamento';
import { Despesa } from '../_model/Despesa';

@Injectable()
export class AreaPrivadaService {

    constructor(private _http: HttpClient) { }

    public listaPagamento(): Observable<any>{
        return this._http
            .get(`${urlBase.url}/pagamento/listar-pagamentos`)
            .pipe( map( res => { return res; }) );
    }

    public salvar(pagamento: Pagamento): Observable<any>{
        return this._http
            .post(`${urlBase.url}/pagamento/adicionar`, pagamento)
            .pipe( map( res => { return res; }) );
    }

    public adicionarDespesa(despesa: Despesa): Observable<any>{
        return this._http
            .post(`${urlBase.url}/despesa/adicionar`, despesa)
            .pipe( map( res => { return res; }) );
    }

    public listaDespesa(): Observable<any>{
        return this._http
            .get(`${urlBase.url}/despesa/lista-despesa`)
            .pipe( map( res => { return res; }) );
    }

    public pagarDespesa(id: number, dataPagamento: Date): Observable<any>{
        return this._http
            .get(`${urlBase.url}/despesa/${id}/${dataPagamento}`,)
            .pipe( map( res => { return res; }) );
    }

    public excluirDespesa(id: number): Observable<any>{
        return this._http
            .delete(`${urlBase.url}/despesa/${id}`,)
            .pipe( map( res => { return res; }) );
    }

    public atualizarDespesa(despesa: Despesa): Observable<any>{
        return this._http
            .put(`${urlBase.url}/despesa`, despesa)
            .pipe( map( res => { return res; }) );
    }
    
    public atualizarPagamento(pagamento: Pagamento): Observable<any>{
        return this._http
            .put(`${urlBase.url}/pagamento`, pagamento)
            .pipe( map( res => { return res; }) );
    }

    public excluirPagamento(id: number): Observable<any>{
        return this._http
            .delete(`${urlBase.url}/pagamento/${id}`,)
            .pipe( map( res => { return res; }) );
    }
}