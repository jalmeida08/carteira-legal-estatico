import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/_model/Usuario';
import { Pessoa } from 'src/app/_model/Pessoa';
import { AreaPublicaService } from '../area-publica.servcie';

@Component({
    selector: 'entrar-carteira-legal',
    templateUrl: 'entrar-carteira-legal.component.html'
})

export class EntrarCarteiraLegalComponent implements OnInit {

    public email: string;
    public numCpf: number;
    private pessoa: Pessoa = new Pessoa();
    private usuario: Usuario = new Usuario();

    constructor(
        private _areaPublicaService: AreaPublicaService
    ) { }

    public salvar(){
        this.pessoa.numCpf = this.numCpf;
        this.usuario.email = this.email;
        this.usuario.pessoa = this.pessoa;
        
        this._areaPublicaService
            .entrarCarteiraLegal(this.usuario)
            .subscrible(res => {
                console.log(res);
            });
    }

    ngOnInit() { }
}