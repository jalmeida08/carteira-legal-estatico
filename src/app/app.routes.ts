import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './area-publica/login/login.component';
import { EntrarCarteiraLegalComponent  } from './area-publica/entrar-carteira-legal/entrar-carteira-legal.component';
import { HomeComponent } from './area-privada/home/home.component';
import { AtivarContaCarteiraLegalComponent } from './area-publica/ativar-conta-carteira-legal/ativar-conta-carteira-legal.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    // AREA PUBLICA
    { path: 'entrar-carteira-legal', component: EntrarCarteiraLegalComponent },
    { path: 'ativar-conta-carteira-legal/:chave_ativacao', component: AtivarContaCarteiraLegalComponent },

    // AREA LOGADA
    { path: 'home', component: HomeComponent },

    { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(appRoutes);
