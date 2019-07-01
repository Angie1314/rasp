import { Component, AfterViewInit } from '@angular/core';

import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements AfterViewInit {
  value = '';
  keyboard: Keyboard;

  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button)
    });
  }

  onChange = (input: string) => {
    this.value = input;
    console.log('Input changed', input);
  }

  onKeyPress = (button: string) => {
    console.log('Button pressed', button);

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
