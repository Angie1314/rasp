import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserPageComponent } from './user-page/user-page.component';
import { AddPostComponent } from './add-post/add-post.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { TimeAgoPipe } from 'time-ago-pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    HomePageComponent,
    UserProfileComponent,
    UserPageComponent,
    AddPostComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
