import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  faUserCircle = faUserCircle;
  cokeAd = 'assets/images/co.jpg';

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
    {
      // tslint:disable-next-line: max-line-length
      src: 'assets/images/brah2.jpg', name: 'Cathrin Roets', description: 'The Brahman for sale',
      date: '13/11/14', photoURL: 'assets/images/cow1.png', daysAgo: '13 Days ago', price: 'R18,000', area: 'Franshoek'
    },
    {
      // tslint:disable-next-line: max-line-length
      src: 'assets/images/piv2.jpg', name: 'Cathrin Roets', description: 'Pivot for sale.',
      date: '09/11/19', photoURL: 'assets/images/cow1.png', daysAgo: '10 Days ago', price: 'R500,000', area: 'Gauteng'
    },
    {
      // tslint:disable-next-line: max-line-length
      src: 'assets/images/hay1.jpg', name: 'Cathrin Roets', description: 'Hey bales for feed.',
      date: '09/11/19', photoURL: 'assets/images/hey1.jpg', daysAgo: '2 Days ago', price: 'R450,00', area: 'Cape town'
    },



  ];

  result: object;
  getHomeFeedCloudFunctionSubscription;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getHomeFeedCloudFunctionSubscription = this.http.get(`https://us-central1-linked-agri.cloudfunctions.net/homeFeedData`)
      .subscribe((results) => {
        this.result = JSON.parse(results.toString());
      });
  }

  ngDestory() {
    this.getHomeFeedCloudFunctionSubscription.unsubscribe();
  }
}
