import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../_model/Usuario";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    public usuario: Usuario = new Usuario();

    constructor() { }

    ngOnInit(): void { }
}
