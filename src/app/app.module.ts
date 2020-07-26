import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AreaPublicaModule } from './area-publica/area-publica.module';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    routing,
    AreaPublicaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
