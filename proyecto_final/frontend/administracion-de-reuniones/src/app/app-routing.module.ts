import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AgregarReunionComponent } from './agregar-reunion/agregar-reunion.component';
import { ListadoReunionesComponent } from './listado-reuniones/listado-reuniones.component';

import { authGuard } from './auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reuniones', component: AdministracionComponent, canActivate: [authGuard],
      children: [
        { path: 'agregar', component: AgregarReunionComponent},
        { path: 'listar', component: ListadoReunionesComponent},
        /*{ path: 'editar/:id', component: ____ReunionesComponent},*/
      ] 
  },
  { path: '', redirectTo:'/login', pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
