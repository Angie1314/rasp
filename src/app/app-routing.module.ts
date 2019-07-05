import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainLandingPageComponent } from './main-landing-page/main-landing-page.component';
import { PharsesPageComponent } from './pharses-page/pharses-page.component';
import { IconsPageComponent } from './icons-page/icons-page.component';
import { KeyboardPageComponent } from './keyboard-page/keyboard-page.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: '',
  component: MainLandingPageComponent
}, {
  path: 'phrasespage',
  component: PharsesPageComponent
}, {
  path: 'iconspage',
  component: IconsPageComponent
}, {
  path: 'keyboardpage',
  component: KeyboardPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
