import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { LoginComponent } from './login/login.component';
import { MainLandingPageComponent } from './main-landing-page/main-landing-page.component';
import { KeyboardComponent } from './keyboard/keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLandingPageComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
