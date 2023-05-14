import { AppComponent } from './app.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { BalloonsComponent } from './components/balloons/balloons.component';

const routes: Routes = [
  { path: '',redirectTo:'/login', pathMatch:'full' },
  { path: 'note', component:TextAreaComponent  },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'balloon', component: BalloonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
