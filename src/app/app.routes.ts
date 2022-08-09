import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { HomeComponent } from './navegacao/home/home.component';
import { Routes } from "@angular/router";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },     // Quando a app for acessada pelo domínio, sem informar o home na Url, iremos informar um caminho padrão. Está é uma configuração padrão para pg inicial. (Quando chamar vazio '', redireciono para '/home' com o modo de substituição por 'completo')
    { path: 'home', component: HomeComponent },                // indicando o nome do path e qual será o componente que ele irá chamar quando quando a Url for acessada.     
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent},
];