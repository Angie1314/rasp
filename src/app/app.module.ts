import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { LoginComponent } from './login/login.component';
import { MainLandingPageComponent } from './main-landing-page/main-landing-page.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { PhrasesiconsComponent } from './phrasesicons/phrasesicons.component';
import { PharsesPageComponent } from './pharses-page/pharses-page.component';
import { IconsPageComponent } from './icons-page/icons-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { KeyboardPageComponent } from './keyboard-page/keyboard-page.component';
import { PhrasesKeyboardComponent } from './phrases-keyboard/phrases-keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLandingPageComponent,
    KeyboardComponent,
    PhrasesiconsComponent,
    PharsesPageComponent,
    IconsPageComponent,
    NavBarComponent,
    KeyboardPageComponent,
    PhrasesKeyboardComponent
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
