import { Component, OnInit } from '@angular/core';

import Speech from 'speak-tts';

@Component({
  selector: 'app-phrases-keyboard',
  templateUrl: './phrases-keyboard.component.html',
  styleUrls: ['./phrases-keyboard.component.scss']
})
export class PhrasesKeyboardComponent implements OnInit {
  phraseskey: any;

  numberArray: Array<string> = [];

  phrases = '';
  url: string;
  trustedUrl: any;
  speech = new Speech();

  constructor() {
    this.speech.setLanguage('en-US');
    this.speech.setVolume(1);
  }

  ngOnInit() { }

  onInputChange = (event: any) => {
    this.phraseskey.setInput(event.target.value);
  }

  addPhrase(button) {
    this.numberArray.push(button);
  }

  getPhrases() {
    const phrase = this.numberArray.toString();

    this.speech.speak({
      text: phrase,
    }).then(() => {
      console.log('Success !');
    }).catch(e => {
      console.error('An error occurred :', e);
    });

  }

  backspace() {
    this.numberArray.pop();
    this.phrases = null;
    this.numberArray.pop();
  }


}
