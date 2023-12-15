import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { LoginComponent } from './login/login.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AgregarReunionComponent } from './agregar-reunion/agregar-reunion.component';
import { ListadoReunionesComponent } from './listado-reuniones/listado-reuniones.component';


//Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FormatoDuracionPipe } from './duracion-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministracionComponent,
    PageNotFoundComponent,
    AgregarReunionComponent,
    ListadoReunionesComponent,
    FormatoDuracionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    ReactiveFormsModule,

    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,

    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
