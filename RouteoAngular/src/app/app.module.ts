import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RutaInicioComponent } from './ruta-inicio/ruta-inicio.component';
import { RutasNoEncontradaComponent } from './rutas-no-encontrada/rutas-no-encontrada.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    RutasNoEncontradaComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(RUTAS_APP, {useHash : true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
