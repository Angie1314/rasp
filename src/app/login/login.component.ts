import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private firebaseAuth: AngularFireAuth,
    private zone: NgZone) {

    this.firebaseAuth.user.subscribe(
      user => {
        if (user) {
          this.zone.run(() => { this.router.navigate(['home']); });
        }
      }
    );
  }

  googleSignIn() {
    this.authService.doGoogleLogin()
      .then(() => {
        this.zone.run(() => { this.router.navigate(['home']); });
      });
  }
}
