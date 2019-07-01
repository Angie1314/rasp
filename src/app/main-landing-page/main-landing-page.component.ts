import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-landing-page',
  templateUrl: './main-landing-page.component.html',
  styleUrls: ['./main-landing-page.component.scss']
})
export class MainLandingPageComponent implements OnInit {

  parrot;

  faUserCircle = faUserCircle;



  constructor() {
    this.parrot = '../../../../assets/images/parrot.png';
  }

  ngOnInit() {
  }

}
