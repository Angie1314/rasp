import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';

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

  constructor(private router: Router) {
  this.parrot = '../../../../assets/images/parrot.png';
  this.routerEventsSubscription = router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.isAtHomePage = router.url === '/home';
        this.isAtProfilePage = router.url === '/';
        // TODO possibly also set website tile here
      }
    });
  }

  ngOnInit() {
  }

}
