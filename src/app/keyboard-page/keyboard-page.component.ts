import { Component, OnInit } from '@angular/core';

import Speech from 'speak-tts';
@Component({
  selector: 'app-keyboard-page',
  templateUrl: './keyboard-page.component.html',
  styleUrls: ['./keyboard-page.component.scss']
})
export class KeyboardPageComponent implements OnInit {
  phraseskey: any;

  numberArray: Array<string> = [];

  phrases = '';
  url: string;
  trustedUrl: any;

  speech = new Speech();

  alphabet = [];

  constructor() {
    this.speech.setLanguage('en-US');
    this.speech.setVolume(1);

    this.alphabet = [
      'a', 'b', 'c', 'd',
      'e', 'f', 'g', 'h', 'i', 'j',
      'k', 'l', 'm', 'n', 'o',
      'p', 'q', 'r', 's', 't', 'u',
      'v', 'w', 'x', 'y', 'z'];
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

