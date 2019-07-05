import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons-page',
  templateUrl: './icons-page.component.html',
  styleUrls: ['./icons-page.component.scss']
})
export class IconsPageComponent implements OnInit {

  owlImg: string;
  penguinImg: string;
  catImg: string;
  horseImg: string;
  butterflyImg: string;
  elephantImg: string;
  kangarooImg: string;
  toucanImg: string;
  foxImg: string;
  giraffeImg: string;
  spiderImg: string;
  turtleImg: string;
  starfishImg: string;
  monkeyImg: string;
  fishImg: string;
  duckImg: string;
  frogImg: string;
  hippoImg: string;
  lizzardImg: string;
  lionImg: string;
  parrot1Img: string;

  animal = [
    {
      src: this.penguinImg = '../../assets/images/penguin.png', name: 'Penguin', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/penguin1.mp3'
    },
    {
      src: this.owlImg = '../../assets/images/owl.png', name: 'Owl', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/owl1.mp3'
    },
    {
      src: this.catImg = '../../assets/images/cat.png', name: 'Cat', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/cat1.mp3'
    },
    {
      src: this.horseImg = '../../assets/images/horse.png', name: 'Horse', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/horse1.mp3'
    },
    {
      src: this.butterflyImg = '../../assets/images/butterfly.png', name: 'Butterfly', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/butterfly1.mp3'
    },
    {
      src: this.elephantImg = '../../assets/images/elephant.png', name: 'Elephant', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/elephant1.mp3', blinkSrc: '../../assets/images/elephantBlink.png'
    },
    {
      src: this.kangarooImg = '../../assets/images/kangaroo.png', name: 'Kangaroo', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/kangaroo1.mp3'
    },
    {
      src: this.foxImg = '../../assets/images/fox.png', name: 'Fox', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/fox1.mp3'
    },
    {
      src: this.giraffeImg = '../../assets/images/giraffe.png', name: 'Giraffe', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/giraffe1.mp3'
    },
    {
      src: this.spiderImg = '../../assets/images/spider.png', name: 'Spider', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/spider1.mp3'
    },
    {
      src: this.turtleImg = '../../assets/images/turtle.png', name: 'Turtle', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/turtle1.mp3'
    },
    {
      src: this.starfishImg = '../../assets/images/starfish.png', name: 'Starfish', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/starfish1.mp3'
    },
    {
      src: this.monkeyImg = '../../assets/images/monkey.png', name: 'Monkey', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/monkey1.mp3'
    },
    {
      src: this.fishImg = '../../assets/images/fish.png', name: 'Fish', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/fish1.mp3'
    },
    {
      src: this.duckImg = '../../assets/images/duck.png', name: 'Duck', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/duck1.mp3'
    },
    {
      src: this.frogImg = '../../assets/images/frog.png', name: 'Frog', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/frog1.mp3'
    },
    {
      src: this.hippoImg = '../../assets/images/hippo.png', name: 'Hippo', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/hippo1.mp3'
    },
    {
      src: this.lizzardImg = '../../assets/images/lizard.png', name: 'Lizzard', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/lizard1.mp3'
    },
    {
      src: this.lionImg = '../../assets/images/lion.png', name: 'Lion', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/lion1.mp3'
    },
    {
      src: this.parrot1Img = '../../assets/images/parrot1.png', name: 'Parrot', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/parrot1.mp3'
    },
    {
      src: this.toucanImg = '../../assets/images/toucan.png', name: 'Toucan', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/toucan1.mp3'
    },
  ];

  constructor() { }
  toggle(animal) {
    animal.hide = !animal.hide;
  }

  getAnimal($event) {
    // let text = '';
    document.getElementById('box');
  }

  ngOnInit() {
  }


}
