import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EntrarCarteiraLegalComponent } from './entrar-carteira-legal/entrar-carteira-legal.component';
import { AreaPublicaService } from './area-pblica.service';
import { AtivarContaCarteiraLegalComponent } from "./ativar-conta-carteira-legal/ativar-conta-carteira-legal.component";

@NgModule({
    declarations: [
        EntrarCarteiraLegalComponent,
        AtivarContaCarteiraLegalComponent,
    ],
    imports: [
        CommonModule,
        LoginModule,
        FormsModule,
        BrowserModule
    ],
    exports: [
        EntrarCarteiraLegalComponent,
        AtivarContaCarteiraLegalComponent,
    ],
    providers: [
        AreaPublicaService
    ],
})
export class AreaPublicaModule {}