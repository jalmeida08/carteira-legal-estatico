import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { AreaPrivadaService } from './area-privada.service';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        HomeModule
    ],
    exports: [],
    providers: [AreaPrivadaService],
})
export class AreaPrivadaModule {}