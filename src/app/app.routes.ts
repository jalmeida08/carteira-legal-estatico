import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './area-publica/login/login.component';
import { EntrarCarteiraLegalComponent  } from './area-publica/entrar-carteira-legal/entrar-carteira-legal.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'entrar-carteira-legal', component: EntrarCarteiraLegalComponent },

    { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(appRoutes);
