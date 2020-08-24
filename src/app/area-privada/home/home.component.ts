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
    public totalDespesa: number = 0;
    public listaPagamento: Array<Pagamento> = new Array<Pagamento>();
    public listaDespesa: Array<Despesa> = new Array<Despesa>();
    private despesaSelecionada: Despesa = new Despesa();
    private pagamentoSelecionada: Pagamento = new Pagamento();
    
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
                this.listaPagamento = res;
                res.forEach(item => {                    
                    this.totalPagamento = this.totalPagamento + item.valor;
                });
               
            })
    }

    private consultarListaDespesa(){
        this._areaPrivadaService
            .listaDespesa()
            .subscribe(res => {
                this.listaDespesa = res;
                this.calcularDespesas(res);
            }, error=> {
                
            })
    }

    public abrirModalCadastroPagamento(){
        $('#modalSemPagamentoAtivo').modal('hide');
        $('#modalCadastrarPagamento').modal('show');
    }

    public abrirModal(nomeModal: string, item){
        this.despesaSelecionada = item;
        this.pagamentoSelecionada = item;
        $(nomeModal).modal('show');
    }

    public excluirPagamento(){
        let id: number = this.pagamentoSelecionada.id;
        this._areaPrivadaService
            .excluirPagamento(id)
            .subscribe(() => {
                this.consultarListaPagamento();
                this._dataService.alerta("Excluído com sucesso", "success", "Sucesso!!!");
            }, error => {
                this._dataService.alerta(error.error, "danger", "Erro!!!");
            });
    }

    public excluirDespesa(){
        let id: number = this.despesaSelecionada.id;
        this._areaPrivadaService
            .excluirDespesa(id)
            .subscribe(() => {
                this.consultarListaDespesa();
                this._dataService.alerta("Excluído com sucesso", "success", "Sucesso!!!");
            }, error => {
                this._dataService.alerta(error.error, "danger", "Erro!!!");
            });
    }
    
    public atualizarDespesa(despesa: Despesa){
        this._areaPrivadaService
            .atualizarDespesa(despesa)
            .subscribe(() => {
                this._dataService.alerta("Atualizado com sucesso", "success", "Sucesso!!!");
            }, error => {
                this._dataService.alerta(error.error, "danger", "Erro!!!");
            });
    }
    
    public atualizarPagamento(pagamento: Pagamento){
        this._areaPrivadaService
            .atualizarPagamento(pagamento)
            .subscribe(() => {
                this._dataService.alerta("Atualizado com sucesso", "success", "Sucesso!!!");
            }, error => {
                this._dataService.alerta(error.error, "danger", "Erro!!!");
            });
    }

    public pagarDespesa(idDespesa: number, datapagamento: Date){
        this._areaPrivadaService
            .pagarDespesa(idDespesa, datapagamento)
            .subscribe(() => {
                this._dataService.alerta("Despesa paga com sucesso", "success", "Sucesso!!!");
            }, error => {
                this._dataService.alerta(error.error, "danger", "Erro!!!");
            });
    }

    public fecharModal(nomeModal: string){
        $(nomeModal).modal('hide');
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

    private calcularDespesas(listaDespesa: Array<Despesa>){
        listaDespesa.forEach(item => {
            this.totalDespesa = (this.totalDespesa + item.valor);
        });
    }
    
    ngOnInit(): void { 
        this.consultarListaPagamento();
        this.consultarListaDespesa();
    }
}
