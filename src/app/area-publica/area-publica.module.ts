import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EntrarCarteiraLegalComponent } from './entrar-carteira-legal/entrar-carteira-legal.component';

@NgModule({
    declarations: [
        EntrarCarteiraLegalComponent,
    ],
    imports: [
        CommonModule,
        LoginModule,
        FormsModule,
        BrowserModule
    ],
    exports: [
        EntrarCarteiraLegalComponent,
    ],
    providers: [],
})
export class AreaPublicaModule {}