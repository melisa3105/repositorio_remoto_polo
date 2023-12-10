import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AgregarReunionComponent } from './agregar-reunion/agregar-reunion.component';
import { ListadoReunionesComponent } from './listado-reuniones/listado-reuniones.component';
import { EliminacionReunionComponent } from './eliminacion-reunion/eliminacion-reunion.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reuniones', component: AdministracionComponent,
      children: [
        { path: 'agregar', component: AgregarReunionComponent},
        { path: 'listado', component: ListadoReunionesComponent},
        /*{ path: 'editar/:id', component: ____ReunionesComponent},*/
        { path: 'eliminacion/:id', component: EliminacionReunionComponent}
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
