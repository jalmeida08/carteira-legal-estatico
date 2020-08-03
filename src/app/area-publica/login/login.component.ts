import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../_model/Usuario";
import { AreaPublicaService } from '../area-pblica.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    public usuario: Usuario = new Usuario();

    constructor(
        private _areaPublicaService: AreaPublicaService,
        private _dataService: DataService,
        private _router: Router
    ) {}

    public login(){
        this._areaPublicaService
            .login(this.usuario)
            .subscribe(res => {
                this._dataService.registrarSessao(res)
                this._router.navigate(["/home"]);
            }, error => {
                this._dataService.alerta(error.error, "danger", "Erro!");
            })

    }

    
    ngOnInit(): void { }
}
