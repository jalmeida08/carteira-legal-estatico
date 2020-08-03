import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AreaPublicaService } from '../area-pblica.service';
import { Usuario } from 'src/app/_model/Usuario';
import { Pessoa } from 'src/app/_model/Pessoa';

@Component({
    selector: 'ativar-conta-carteira-legal',
    templateUrl: './ativar-conta-carteira-legal.component.html'
})
export class AtivarContaCarteiraLegalComponent implements OnInit {

    private chaveAtivacao: string;
    public usuario: Usuario = new Usuario();
    public pessoa: Pessoa = new Pessoa();
    
    
    constructor(
        private _routerParam: ActivatedRoute,
        private _router: Router,
        private _dataService: DataService,
        private _areaPublicaService: AreaPublicaService
    ) { }

    public salvarInformacoesUsuario(){
        this._areaPublicaService
            .salvarInformacoesUsuario(this.usuario)
            .subscribe(res => {
                this._dataService.registrarSessao(res)
                this._router.navigate(["/home"]);
            }, error => {
                this._dataService.alerta(error.error, "danger", "Erro!");
            });
    }

    public formatarNumeroCpf(numCpf: number){
        let stringCpf: string = String(numCpf).replace(/([^\d])+/gim, '');
        return "00000000000".slice(stringCpf.length).concat(stringCpf);
        
    }

    private verificarChaveAtivacao(){
        this._routerParam.params.subscribe(p => {this.chaveAtivacao =  p['chave_ativacao']});
        let inicio = this.chaveAtivacao.substring(0,3);
        let chaveAtivacaoUsuario = this.chaveAtivacao.substring(3);
        if(!chaveAtivacaoUsuario){
            this._dataService.alerta("Chave de ativacao invalida", "danger", "Erro!");
            this._dataService.alerta("Tente acessar a página de inscricao do carteira legal", "info", "Informação!");
        }else{
            this.carregarDadosUsuarioPorToken(chaveAtivacaoUsuario);
        }
    }

    private carregarDadosUsuarioPorToken(chaveAtivacaoUsuario: string){
        this._areaPublicaService
            .carregarDadosUsuarioPorChaveAtivacao(chaveAtivacaoUsuario)
            .subscribe(res => {
                this.usuario = res;
                this.pessoa = res.pessoa;
            }, error => {
                this._dataService.alerta(error.error, "danger", "Erro!");
            })
    }

    
    ngOnInit(): void {
        this.verificarChaveAtivacao();
    }
}
