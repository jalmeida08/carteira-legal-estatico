import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AreaPrivadaService } from '../area-privada.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule
     ],
    exports: [HomeComponent],
    providers: [AreaPrivadaService],
})
export class HomeModule {}