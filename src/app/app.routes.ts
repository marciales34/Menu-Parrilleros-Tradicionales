import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { Plato1Component } from './plato1/plato1.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { Reservacomponent } from './reserva/Reserva.component';
import { TrabajaComponent } from './trabaja/trabaja.component';



export const routes: Routes = [
    {path: '', component:InicioComponent},
    {path: 'login', component:LoginComponent},
    {path: 'plato1', component:Plato1Component},
    {path: 'piepagina', component:PiePaginaComponent},
    {path: 'encabezado', component:EncabezadoComponent},
    {path: 'reserva', component:Reservacomponent},
    {path: 'trabaja', component:TrabajaComponent}
 
   
];
