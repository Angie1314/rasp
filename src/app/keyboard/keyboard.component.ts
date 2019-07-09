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

    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button)
    });
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

  onKeyPress = (button: string) => {
    if (button === '{shift}' || button === '{lock}') { this.handleShift(); }
  }

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  }

  handleShift = () => {
    // tslint:disable-next-line: prefer-const
    let currentLayout = this.keyboard.options.layoutName;
    // tslint:disable-next-line: prefer-const
    let shiftToggle = currentLayout === 'default' ? 'shift' : 'default';

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  }
}
