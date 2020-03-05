import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  faUserCircle = faUserCircle;
  user: User;

  constructor(private firebaseAuth: AngularFireAuth) { }

  ngOnInit() {
    this.firebaseAuth.user.subscribe(
      user => this.user = user
    );
  }
}
