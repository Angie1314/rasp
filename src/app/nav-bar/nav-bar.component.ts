import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  parrot;

  faUserCircle = faUserCircle;
  isAtHomePage = false;
  isAtProfilePage = false;

  routerEventsSubscription: Subscription;

  constructor() {this.parrot = '../../../../assets/images/parrot.png'; }

  ngOnInit() {
  }

}
