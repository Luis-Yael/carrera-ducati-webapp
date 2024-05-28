import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { BasesPromocionScreenComponent } from './screens/bases-promocion-screen/bases-promocion-screen.component';
import { Instructions } from './screens/instructions/instructions.component';
import { NuevoLook } from './screens/nuevo-look/nuevo.component';
import { Juego } from './screens/juego/juego.component';
import { Politicas } from './screens/politicas/politicas.component';
import { Terminos } from './screens/terminos/terminos.component';

const routes: Routes = [
  { path: '', component: LoginScreenComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroScreenComponent, pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent, pathMatch: 'full' },
  { path: 'bases-promocion', component: BasesPromocionScreenComponent, pathMatch: 'full' },
  { path: 'instrucciones', component: Instructions, pathMatch: 'full' },
  { path: 'Politica-de-privacidad', component: Politicas, pathMatch: 'full' },
  { path: 'modelos', component: NuevoLook, pathMatch: 'full' },
  { path: 'juego', component: Juego, pathMatch: 'full' },
  { path: 'tiendas-participantes', component: Instructions, pathMatch: 'full' },
  { path: 'perfil', component: Instructions, pathMatch: 'full' },
  { path: 'terminos', component: Terminos, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
