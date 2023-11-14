import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {


  reviewsCarousel: HTMLElement | null;

  constructor(private el: ElementRef) {
    this.reviewsCarousel = null;
  }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger)
    this.reviewsCarousel = this.el.nativeElement.querySelector('.review');
    this.animateLines()
    this.duplicateReviews()
    this.scrollAnimation()
  }

  animateLines(): void {

    gsap.from("nav ul li", {
      opacity: 0,
      x: -20,
      ease: "power3.inOut",
      stagger: 0.08
    });

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

  duplicateReviews(): void {
    if (this.reviewsCarousel) {
      const reviews = this.reviewsCarousel?.querySelectorAll('.r-container-a');
      reviews.forEach((review: Node) => {
        const clone: Node = review.cloneNode(true);
        this.reviewsCarousel?.appendChild(clone);
      });
    }
  }

  scrollAnimation(): void{
    gsap.from(".services", {
      y:-2,
      opacity: 0,
      duration: 10,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".service",
        start: "-350% center", // Ajusta el valor aquí
        end: "-100% center",
        scrub: 2
      }
    });

    gsap.from(".reviews", {
      y:200,
      opacity: 0,
      duration: 100,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".review",
        start: "-200% center", // Ajusta el valor aquí
        end: "-100% center",
        scrub: 1
      }
    });

    gsap.from("#third-page", {
      y:200,
      opacity: 0,
      duration: 100,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#third-page",
        start: "-50% center", // Ajusta el valor aquí
        end: "0 center",
        scrub: true
      }
    });

    ScrollTrigger.create({
   
      trigger: '#fourth-page',
      start:"top 50%",
      end:"bottom 0%", 
    
      onEnter: () => {
        gsap.to('#fourth-page', { duration: 1.0, backgroundColor: '#B1D4E0'})
        gsap.to('#third-page', { duration: 1.0, backgroundColor: '#B1D4E0'})
        gsap.to('.container-vet', { opacity:0})
        gsap.to('.main-container', { opacity:1})
      },
      
      onLeaveBack: () => {
        gsap.to('#fourth-page', { duration: 1.0, backgroundColor: '#ffffff'})
        gsap.to('#third-page', { duration: 1.0, backgroundColor: '#ffffff'})
        gsap.to('.container-vet', { opacity:1})
        gsap.to('.main-container', { opacity:0})
      },
    })
  }
  
}