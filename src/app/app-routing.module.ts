import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PharsesPageComponent } from './pharses-page/pharses-page.component';
import { IconsPageComponent } from './icons-page/icons-page.component';
import { KeyboardPageComponent } from './keyboard-page/keyboard-page.component';
import { SpeakComponent } from './speak/speak.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'phrasespage',
  component: PharsesPageComponent
}, {
  path: '',
  component: IconsPageComponent
}, {
  path: 'keyboardpage',
  component: KeyboardPageComponent
}, {
  path: 'speak',
  component: SpeakComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
