import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-phrasesicons',
  templateUrl: './phrasesicons.component.html',
  styleUrls: ['./phrasesicons.component.scss']
})
export class PhrasesiconsComponent implements OnInit {

  iconImg = '../../assets/images/landscape.png';
  phrasesImg = '../../assets/images/megaphone.png';

  constructor() { }

  ngOnInit() {
  }

}
