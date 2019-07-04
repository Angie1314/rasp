import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phrases-keyboard',
  templateUrl: './phrases-keyboard.component.html',
  styleUrls: ['./phrases-keyboard.component.scss']
})
export class PhrasesKeyboardComponent implements OnInit  {
  phraseskey: any;

  constructor() { }

  ngOnInit() {
  }

  onInputChange = (event: any) => {
    this.phraseskey.setInput(event.target.value);
  }
}
