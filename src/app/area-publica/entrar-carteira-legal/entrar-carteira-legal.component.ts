import { Component, OnInit } from '@angular/core';
import { AreaPublicaService } from '../area-pblica.service'
import { Pessoa } from '../../_model/Pessoa';
import { Usuario } from '../../_model/Usuario';

@Component({
    selector: 'entrar-carteira-legal',
    templateUrl: 'entrar-carteira-legal.component.html'
})

export class EntrarCarteiraLegalComponent implements OnInit {

    public pessoa: Pessoa = new Pessoa();
    public usuario: Usuario = new Usuario();

    constructor(
        private _areaPublicaService: AreaPublicaService
    ) { }

    public salvar(){
        this.usuario.pessoa = this.pessoa;
        
        this._areaPublicaService
            .entrarCarteiraLegal(this.usuario)
            .subscribe(res => {
                console.log(res);
            },  error => {
                console.error("O erro é: ", error);
            });
    }

    ngOnInit() { }
}