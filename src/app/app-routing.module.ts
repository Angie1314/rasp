import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainLandingPageComponent } from './main-landing-page/main-landing-page.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'mainlandingpage',
  component: MainLandingPageComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
