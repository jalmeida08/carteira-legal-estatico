import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HTTPStatus } from "./_data/Interceptor.interceptor"
import { Alerta } from './_diretiva/alerta/alerta';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	title = 'carteira-legal-estatico';
	public alertas: Array<Alerta> = new Array<Alerta>();

	constructor(private httpStatus: HTTPStatus, private spinner: NgxSpinnerService, private _dataService: DataService) {
		this.httpStatus.getHttpStatus().subscribe((status: boolean) => {
			if (status) {
				spinner.show();
			} else {
				spinner.hide();
				this.mensagens();
			}
		});
	}

	private mensagens(){
		this.alertas = this._dataService.alertas;
	}
}
