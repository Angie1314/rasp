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


  constructor() { }

  ngOnInit() {
  }

  onInputChange = (event: any) => {
    this.phraseskey.setInput(event.target.value);
  }

  addPhrase(button) {
    this.numberArray.push(button);
  }

  getPhrases() {
    // https://www.npmjs.com/package/speak-tts
    const phrase = this.numberArray.toString();
    console.log(phrase);
    this.speech.speak({
      text: phrase,
    }).then(() => {
      console.log('Success !');
    }).catch(e => {
      console.error('An error occurred :', e);
    });

    // this.url = ' https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=' + phrase;
    // this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.url);
    // return this.url;
  }

  clearSearch() {
    this.numberArray.pop();
    this.phrases = null;
    this.numberArray.pop();
  }


}
