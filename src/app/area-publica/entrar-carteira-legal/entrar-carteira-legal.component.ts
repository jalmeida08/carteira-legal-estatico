import { Component, OnInit } from '@angular/core';
import { AreaPublicaService } from '../area-pblica.service'
import { Pessoa } from '../../_model/Pessoa';
import { Usuario } from '../../_model/Usuario';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'entrar-carteira-legal',
    templateUrl: 'entrar-carteira-legal.component.html'
})

export class EntrarCarteiraLegalComponent implements OnInit {

    public pessoa: Pessoa = new Pessoa();
    public usuario: Usuario = new Usuario();

    constructor(
        private _areaPublicaService: AreaPublicaService,
        private _dataService: DataService
    ) { }

    public salvar(){
        this.usuario.pessoa = this.pessoa;
        
        this._areaPublicaService
            .entrarCarteiraLegal(this.usuario)
            .subscribe(res => {
                console.log(res);
                this.limparVariavel();
                this._dataService.alerta("Salvo com sucesso", "success", "Sucesso!");
                this._dataService.alerta("Acesse o link que madamos no email cadastrado para ativar sua conta.", "info", "Informação!");
            },  error => {
                console.log(error.error);
                this._dataService.alerta(error.error, "danger", "Erro!");
                if(error.error.indexOf("cadastrado no sistema"))
                    this._dataService.alerta("Tente recuperar o seu usuário com e-mail ou CPF cadastrado.", "info", "Informação!");
            });
    }


    private limparVariavel(){
        this.pessoa = new Pessoa();
        this.usuario = new Usuario();
    }

    ngOnInit() { }
}