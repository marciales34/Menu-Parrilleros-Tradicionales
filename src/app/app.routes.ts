import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { Plato1Component } from './plato1/plato1.component';

export const routes: Routes = [
    {path: '', component:InicioComponent},
    {path: 'login', component:LoginComponent},
    {path: 'plato1', component:Plato1Component}
];
