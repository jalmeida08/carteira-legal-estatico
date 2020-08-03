import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Usuario } from '../_model/Usuario';
import { urlBase } from '../_data/urlBase';

@Injectable()
export class AreaPublicaService {

    constructor(private _http: HttpClient) { }

    public entrarCarteiraLegal(usuario: Usuario): Observable<any>{
        return this._http
            .post(`${urlBase.url}/area-publica/entrar-carteira-legal`, usuario)
            .pipe( map( res => { return res; }) );
    }

    public carregarDadosUsuarioPorChaveAtivacao(chaveAtivacao: string): Observable<any>{
        return this._http
            .post(`${urlBase.url}/area-publica/buscar-informacao-chave-ativacao`, chaveAtivacao)
            .pipe( map( res => { return res; }) );
    }

    public salvarInformacoesUsuario(usuario: Usuario): Observable<any> {
        return this._http
            .post(`${urlBase.url}/area-publica/salvar-dados-usuario`, usuario)
            .pipe( map( res => { return res; }) );
    }

    public login(usuario: Usuario): Observable<any>{
        return this._http
        .post(`${urlBase.url}/area-publica/login`, usuario)
        .pipe( map( res => { return res; }) );
    }

}