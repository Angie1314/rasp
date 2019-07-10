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

  verbs = [];
  adjectives = [];
  pronouns = [];
  conjunctions = [];
  prepositions = [];

  constructor() {
    this.speech.setLanguage('en-US');
    this.speech.setVolume(1);

    this.verbs = [
      'can', 'do', 'come', 'draw', 'drink',
      'eat', 'get', 'go', 'keep', 'know',
      'read', 'sleep', 'speak', 'stand',
      'write', 'shut', 'show', 'send',
      'think', 'sing', 'put',
      'pay', 'lie', 'let', 'hide', 'hear',
      'give', 'choose', 'buy', 'catch'
    ];

    this.adjectives = [
      'soft', 'quiet', 'loud', 'whisper', 'little',
      'tall', 'thin', 'long', 'late', 'slow',
      'old', 'young', 'quick', 'heavy',
      'light', 'very', 'full', 'few',
      'lucky', 'fine', 'fantastic', 'funny',
      'helpful', 'careful', 'simple', 'hard', 'high',
    ];

    this.pronouns = [
      'I', 'you', 'he', 'she', 'it',
      'they', 'me', 'you', 'him', 'her',
      'my', 'mine', 'your', 'yours',
      'his', 'her', 'who', 'whom',
      'whose', 'that', 'which', 'this',
      'myself', 'herself', 'itself', 'yourself'
    ];

    this.conjunctions = [
      'after', 'although', 'as', 'is', 'because',
      'before', 'even', 'once', 'since', 'than',
      'though', 'until', 'when',
      'where', 'while', 'both',
      'either', 'neither', 'but', 'yet',
      'or', 'so', 'and'
    ];

    this.prepositions = [
      'at', 'from', 'into', 'during', 'including',
      'against', 'during', 'by', 'about', 'through',
      'after', 'between', 'since', 'without',
      'along', 'following', 'across', 'except',
      'down', 'around', 'in', 'on'
    ];
  }

  ngOnInit() { }

  onInputChange = (event: any) => {
    this.phraseskey.setInput(event.target.value);
  }

  addPhrase(button) {
    this.numberArray.push(button);
  }

  getPhrases($phrase) {

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
