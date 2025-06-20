import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { BasesPromocionScreenComponent } from './screens/bases-promocion-screen/bases-promocion-screen.component';

const routes: Routes = [
  { path: "", component: LoginScreenComponent, pathMatch: 'full' },
  { path: "registro", component: RegistroScreenComponent, pathMatch: 'full' },
  { path: "home", component: HomeScreenComponent, pathMatch: 'full' },
  { path: "bases-promocion", component: BasesPromocionScreenComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
