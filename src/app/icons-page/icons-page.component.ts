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
      audioSrc: '../../assets/audio/penguin.mp3'
    },
    {
      src: this.owlImg = '../../assets/images/owl.png', name: 'Owl', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/owl.mp3'
    },
    {
      src: this.catImg = '../../assets/images/cat.png', name: 'Cat', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/cat.mp3'
    },
    {
      src: this.horseImg = '../../assets/images/horse.png', name: 'Horse', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/horse1.mp3'
    },
    {
      src: this.butterflyImg = '../../assets/images/butterfly.png', name: 'Butterfly', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/butterfly.mp3'
    },
    {
      src: this.elephantImg = '../../assets/images/elephant.png', name: 'Elephant', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/elephant.mp3'
    },
    {
      src: this.kangarooImg = '../../assets/images/kangaroo.png', name: 'Kangaroo', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/kangaroo.mp3'
    },
    {
      src: this.foxImg = '../../assets/images/fox.png', name: 'Fox', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/fox.mp3'
    },
    {
      src: this.giraffeImg = '../../assets/images/giraffe.png', name: 'Giraffe', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/giraffe.mp3'
    },
    {
      src: this.spiderImg = '../../assets/images/spider.png', name: 'Spider', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/spider.mp3'
    },
    {
      src: this.turtleImg = '../../assets/images/turtle.png', name: 'Turtle', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/turtle.mp3'
    },
    {
      src: this.starfishImg = '../../assets/images/starfish.png', name: 'Starfish', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/starfish.mp3'
    },
    {
      src: this.monkeyImg = '../../assets/images/monkey.png', name: 'Monkey', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/monkey.mp3'
    },
    {
      src: this.fishImg = '../../assets/images/fish.png', name: 'Fish', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/fish.mp3'
    },
    {
      src: this.duckImg = '../../assets/images/duck.png', name: 'Duck', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/duck.mp3'
    },
    {
      src: this.frogImg = '../../assets/images/frog.png', name: 'Frog', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/frog.mp3'
    },
    {
      src: this.hippoImg = '../../assets/images/hippo.png', name: 'Hippo', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/hippo.mp3'
    },
    {
      src: this.lizzardImg = '../../assets/images/lizard.png', name: 'Lizzard', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/lizard.mp3'
    },
    {
      src: this.lionImg = '../../assets/images/lion.png', name: 'Lion', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/lion.mp3'
    },
    {
      src: this.parrot1Img = '../../assets/images/parrot1.png', name: 'Parrot', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/parrot.mp3'
    },
    {
      src: this.toucanImg = '../../assets/images/toucan.png', name: 'Toucan', description: 'Blah', hide: true,
      audioSrc: '../../assets/audio/toucan.mp3'
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
