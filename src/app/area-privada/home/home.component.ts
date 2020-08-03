import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { AreaPrivadaService } from '../area-privada.service';
import { Pagamento } from 'src/app/_model/Pagamento';
import { Despesa } from 'src/app/_model/Despesa';
declare var $: any;

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    public pagamento: Pagamento = new Pagamento();
    public despesa: Despesa = new Despesa();
    public totalPagamento: number = 0;
    public listaPagamento: Array<Pagamento> = new Array<Pagamento>();
    
    constructor(
        private _dataService: DataService,
        private _areaPrivadaService: AreaPrivadaService
    ) { }

    private consultarListaPagamento(){
        this._areaPrivadaService
            .listaPagamento()
            .subscribe(res => {
                if(res.length == 0)
                    $('#modalSemPagamentoAtivo').modal('show')
                
                res.forEach(item => {
                    
                    this.totalPagamento =+ item.valor;
                    console.log(this.totalPagamento);
                });
               
            })
    }

    private consultarListaDespesa(){
        this._areaPrivadaService
            .listaDespesa()
            .subscribe(res => {               
                console.log(res);                                               
            }, error=> {
                console.log(error);
            })
    }

    public abrirModalCadastroPagamento(){
        $('#modalSemPagamentoAtivo').modal('hide');
        $('#modalCadastrarPagamento').modal('show');
    }

    public salvar(){
        this._areaPrivadaService
            .salvar(this.pagamento)
            .subscribe(res => {
                this._dataService.alerta("Salvo com sucesso", "success", "Sucesso!!!");
                $('#modalCadastrarPagamento').modal('hide');
                this.consultarListaPagamento();
            },error=> {
                this._dataService.alerta(error.error, "danger", "Erro!!!");
            })
    }

    public adicionarDespesa(){
        this._areaPrivadaService
            .adicionarDespesa(this.despesa)
            .subscribe(res => {
                this._dataService.alerta("Salvo com sucesso", "success", "Sucesso!!!");
                $('#modalAdicionarDespesa').modal('hide');
            }, error => {
                this._dataService.alerta(error.error, "danger", "Erro!!!");
            });
    }

    public abrirModalDespesa(){
        $('#modalAdicionarDespesa').modal('show');
    }

    ngOnInit(): void { 
        this.consultarListaPagamento();
        this.consultarListaDespesa();
    }
}
