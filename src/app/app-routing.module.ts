import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';

const routes: Routes = [
  {path: '', component: TelaLoginComponent},
  {path: 'cadastrar', component: TelaCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
