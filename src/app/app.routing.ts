//Modulos necesarios
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { PersonajesComponent } from './components/personajes/personajes.component';
import { DetailComponent } from './components/detail/detail.component';
import { ErrorComponent } from './components/error/error.component';

//Configuración

const appRutas: Routes = [
    {path: '', component: PersonajesComponent},
    {path: 'inicio', component: PersonajesComponent},
    {path: 'home', component: PersonajesComponent},
    {path: 'details/:id', component: DetailComponent},
    {path: '**', component: ErrorComponent}
];

//Exportar configuración
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRutas);

