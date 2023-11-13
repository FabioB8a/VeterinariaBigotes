import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {
  ngOnInit(): void {
    this.animateLines()
    
  }

  animateLines(): void {
    gsap.from('.line-one', {
      duration: 1,
      opacity: 0,
      delay: 1,
      y: -800,
      ease: 'expo.inOut'
    });

    gsap.from('.line-two', {
      duration: 1,
      opacity: 0,
      delay: 1.5,
      y: -800,
      ease: 'expo.inOut'
    });

    gsap.from('.main-cat', {
      duration: 1,
      opacity: 0,
      delay: 1.5,
      y: 800,
      ease: 'expo.inOut'
    });

    gsap.from('.circle', {
      drawSVG:true,
      duration: 2,
      opacity: 0,
      delay: 1.5,
      ease: 'expo.inOut'
    });

    gsap.from('.info', {
      opacity: 0,
      delay: 0.5,
    });

  }

}



