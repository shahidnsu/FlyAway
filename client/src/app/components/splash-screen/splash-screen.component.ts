import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent {
  options: AnimationOptions = {    
    path: './assets/19417-no-place-like-home-flight.json'  
  };  

  constructor() { }  

  onAnimate(animationItem: AnimationItem): void {    
  }
}
