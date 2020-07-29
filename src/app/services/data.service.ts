import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../_model/Usuario';
import { AppComponent } from '../app.component';
import { Alerta } from '../_diretiva/alerta/alerta';

@Injectable()
export class DataService {    

    public alertas: Array<Alerta> = new Array<Alerta>();

    constructor(private _router: Router) {}

    public verificarSessao(): void{
        let usrAluguelLegal   = localStorage.getItem('usrAluguelLegal');
        let tkAluguelLegal    = localStorage.getItem('tkAluguelLegal');
        let usrIdAluguelLegal = localStorage.getItem('usrIdAluguelLegal');

        if(!usrAluguelLegal || !tkAluguelLegal || !usrIdAluguelLegal ){
            // this._router.navigate(['']);
            // return;
        }
    }

    public registrarSessao(usuario: Usuario): void {
        localStorage.setItem('usrIdAluguelLegal', usuario.id.toString());
        localStorage.setItem('usrAluguelLegal', usuario.usuario);
        localStorage.setItem('tkAluguelLegal', usuario.token);
    }
    
    public recuperarSessao(): string{
        if(localStorage.getItem('tkAluguelLegal'))
            return localStorage.getItem('tkAluguelLegal'); 
        return "";

    }

    public limparSessao(): void {
        localStorage.clear();
    }
    
    public urlLivreAutenticacao(url: string){
        let listaUrl:Array<String> = Array<String>("administracao/usuario");
        
    }
    
	// RESPONSAVEL POR DISPARAR AS MENSAGENS NA TELA
	public alerta(
		mensagem: string,
		tipoMensagem: string,
		mensagemDestaque: string): Array<Alerta> {
		this.alertas.push(
			{
				mensagem: mensagem,
				tipoMensagem: tipoMensagem,
				mensagemDestaque: mensagemDestaque
			}
        );
        return this.alertas;
    }
     
    public limparMensagens(): Array<Alerta>{
        console.info('Limpando');
        
        this.alertas = new Array<Alerta>();
        return this.alertas;
    }

    public ValidarDeCpf(cpf: string): boolean {
        if (cpf == null) {
            return false;
        }
        if (cpf.length != 11) {
            return false;
        }
        if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
            return false;
        }
        let numero: number = 0;
        let caracter: string = '';
        let numeros: string = '0123456789';
        let j: number = 10;
        let somatorio: number = 0;
        let resto: number = 0;
        let digito1: number = 0;
        let digito2: number = 0;
        let cpfAux: string = '';
        cpfAux = cpf.substring(0, 9);
        for (let i: number = 0; i < 9; i++) {
            caracter = cpfAux.charAt(i);
            if (numeros.search(caracter) == -1) {
                return false;
            }
            numero = Number(caracter);
            somatorio = somatorio + (numero * j);
            j--;
        }
        resto = somatorio % 11;
        digito1 = 11 - resto;
        if (digito1 > 9) {
            digito1 = 0;
        }
        j = 11;
        somatorio = 0;
        cpfAux = cpfAux + digito1;
        for (let i: number = 0; i < 10; i++) {
            caracter = cpfAux.charAt(i);
            numero = Number(caracter);
            somatorio = somatorio + (numero * j);
            j--;
        }
        resto = somatorio % 11;
        digito2 = 11 - resto;
        if (digito2 > 9) {
            digito2 = 0;
        }
        cpfAux = cpfAux + digito2;
        if (cpf != cpfAux) {
            return false;
        }
        else {
            return true;
        }
    }
}