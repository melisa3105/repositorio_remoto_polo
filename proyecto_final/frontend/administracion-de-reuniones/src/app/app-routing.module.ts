import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CargaReunionComponent } from './carga-reunion/carga-reunion.component';
import { ListadoReunionesComponent } from './listado-reuniones/listado-reuniones.component';
import { EliminacionReunionComponent } from './eliminacion-reunion/eliminacion-reunion.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'administracion', component: AdministracionComponent,
      children: [
        { path: 'carga-reunion', component: CargaReunionComponent},
        { path: 'listado-reuniones', component: ListadoReunionesComponent},
        { path: 'eliminacion-reunion', component: EliminacionReunionComponent}
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
