import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [ 
        CommonModule,
        RouterModule,
        FormsModule,
        BrowserModule
     ],
    exports: [ LoginComponent ],
    providers: [],
})
export class LoginModule {}