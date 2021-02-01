import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
    {path: '', component: AboutmeComponent},
    {path: 'sobremi', component: AboutmeComponent},
    {path: 'proyectos', component: ProjectsComponent},
    {path: 'crearProyecto', component: CreateProjectComponent},
    {path: 'contacto', component: ContactComponent},
    {path: '**', component:ErrorComponent},
];
//La url ** sirve para el 404, se puede crear un componente personalizado para demostrar ese error.

export const appRoutingProviders: any[]= [];
export const routing: ModuleWithProviders<any>= RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });