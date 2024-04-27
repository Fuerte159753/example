import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogadminComponent } from './logadmin/logadmin.component';
import { LogclienteComponent } from './logcliente/logcliente.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ErrorComponent } from './error/error.component';
import { ReportComponent } from './report/report.component';
import { RegistroComponent } from './registro/registro.component';

export const routes: Routes = [
    { path: 'welcome', component: WelcomeComponent},
    { path:'', redirectTo: 'welcome', pathMatch:'full'},
    { path:'login-admin', component: LogadminComponent},
    { path: 'cliente-login', component: LogclienteComponent},
    { path: 'Adminstrador', component: AdministradorComponent},
    { path: 'Catalogo', component: ClienteComponent},
    { path: 'Reporte', component: ReportComponent},
    { path: 'Registro', component: RegistroComponent},

    //////estos al final\\\\\\\
    { path: 'NOT-FOUND', component: ErrorComponent},
    { path: '**', redirectTo: 'NOT-FOUND', pathMatch: 'full'}
];
