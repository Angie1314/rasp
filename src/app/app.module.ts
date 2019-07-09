import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { LoginComponent } from './login/login.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { PharsesPageComponent } from './pharses-page/pharses-page.component';
import { IconsPageComponent } from './icons-page/icons-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { KeyboardPageComponent } from './keyboard-page/keyboard-page.component';
import { PhrasesKeyboardComponent } from './phrases-keyboard/phrases-keyboard.component';

import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


import { NgxAudioPlayerModule } from 'ngx-audio-player';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KeyboardComponent,
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
    AngularFontAwesomeModule,
    FormsModule,
    NgxAudioPlayerModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
