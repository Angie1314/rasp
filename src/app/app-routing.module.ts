import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AddPostComponent } from './add-post/add-post.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  }
  , {
    path: 'userprofile',
    component: UserProfileComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserPageComponent
  },
  {
    path: 'addpost',
    component: AddPostComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
