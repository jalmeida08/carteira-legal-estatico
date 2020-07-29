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

}