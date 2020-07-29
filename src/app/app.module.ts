import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AreaPublicaModule } from './area-publica/area-publica.module';
import { routing } from './app.routes';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';
import { AlertaModule } from "./_diretiva/alerta/alerta.module";
import { Interceptor } from './_data/Interceptor.interceptor';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxSpinnerModule,
    Interceptor,
    BrowserAnimationsModule,
    AlertaModule,

    routing,
    AreaPublicaModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
