import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../_model/Usuario';

@Injectable()
export class AreaPublicaService {

    constructor(private _http: HttpClient) { }

    public entrarCarteiraLegal(usuario: Usuario): Observable<any>{
        return this._http
            .post(`${}`)
    }

}