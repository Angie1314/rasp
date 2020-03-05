import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  faUserCircle = faUserCircle;
  user: User;

  images = [
    {
      // tslint:disable-next-line: max-line-length
      src: 'assets/images/brah1.jpg', name: 'Cathrin Roets', description: 'The Brahman for sale.',
      date: '11/12/13', photoURL: 'assets/images/cow1.png', daysAgo: '13 days ago', price: 'R12,000.', area: 'Bela Bela'
    },
    {
      // tslint:disable-next-line: max-line-length
      src: 'assets/images/land1.jpeg', name: 'Cathrin Roets', description: 'Agricultural land to rent.',
      date: '09/11/19', photoURL: 'assets/images/cow1.png', daysAgo: '1 Month ago', price: 'R80,000', area: 'Marble Hall'
    },
    {
      // tslint:disable-next-line: max-line-length
      src: 'assets/images/trac1.jpg', name: 'Cathrin Roets', description: 'Tractor for sale.',
      date: '09/11/19', photoURL: 'assets/images/cow1.png', daysAgo: '14 days ago', price: 'R45,000', area: 'East Rand'
    },
  ];

  constructor(private firebaseAuth: AngularFireAuth) { }

  ngOnInit() {
    this.firebaseAuth.user.subscribe(
      user => this.user = user
    );
  }
}
