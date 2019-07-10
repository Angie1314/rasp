import { Component, AfterViewInit } from '@angular/core';

import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import Speech from 'speak-tts';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements AfterViewInit {
  value = '';
  keyboard: Keyboard;
  speech = new Speech();

  getInputs = [];

  ngAfterViewInit() {
    this.speech.setLanguage('en-AU');
    this.speech.setVolume(1);
  }

  onChange = (input: string) => {
    this.value = input;

    this.speech.speak({
      text: input
    }).then(() => {
      console.log('Success !');
    }).catch(e => {
      console.error('An error occurred :', e);
    });

  }
}
