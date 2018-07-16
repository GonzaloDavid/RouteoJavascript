import {Routes} from "@angular/router";
import {RutaInicioComponent} from "./ruta-inicio/ruta-inicio.component";
import {RutasNoEncontradaComponent} from "./rutas-no-encontrada/rutas-no-encontrada.component";
import * as path from "path";
export const RUTAS_APP: Routes = [
  path: 'inicio/hola/como/estas',
  component: RutaInicioComponent,
  children:[
  {
    path: 'usuario',
    component:RutaIniUsuarioComponent
  },
  {
    path: 'permisos',
    component:RutaIniPermisosComponent
  },
  {
    path: '',
    redirectTo: 'usuario',
    pathMatch: 'full'
  },
]
},
{
  path: 'faq',
    component: RutaFAQComponent
},
{
  path: '',
    redirectTo: 'inicio/hola/como/estas',
  pathMatch: 'full'
},
{
  path: '**',
    component: RutaNoEncontradaComponent
}
];
