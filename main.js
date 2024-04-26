// gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { EaselPlugin } from 'gsap/EaselPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

// swiper
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
   gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, EaselPlugin, TextPlugin);

   // animation for preview beige section
   const previewWaveTimeline = gsap.timeline();
   previewWaveTimeline.from('[data-preview-beigewave]', {
      y: 'random(-230, -80)',
      // opacity: 'random(0.6, 0.9)',
      // ease: 'back.out(2)',
      duration: 1.5,
   });
   previewWaveTimeline.to('[data-preview-beigewave] img', {
      y: 'random(-50, -35)',
      objectPosition: `random(0, 100)% 0%`,
      duration: 4.5,
      ease: 'back.inOut(1)',
      repeat: -1,
      yoyo: true,
   });

   gsap.to('[data-preview-beigewave]', {
      yPercent: 'random(-20, -10)',
      ease: 'none',
      scrollTrigger: {
         trigger: '[data-preview-beigewave]',
         start: '50% bottom',
         end: 'bottom top',
         scrub: true,
      },
   });

   // uslugi section
   const animListList = document.querySelectorAll('[data-small-rotate-anim]');
   if (animListList && animListList.length > 0) {
      animListList.forEach((item, index) => {
         gsap.from(item, {
            rotate: 'random(30, 45)' + 'deg',
            opacity: 0.5,
            scale: 'random(0.3, 0.6)',
            ease: 'power4.out',
            duration: 1,
            delay: index % 2 === 0 ? 0 : 0.2,
            scrollTrigger: {
               trigger: item,
               start: 'top 90%',
               end: 'top 90%',
               // scrub: true,
            },
         });
      });
   }

   // promos section
   gsap.from('[data-rotation-anim]', {
      rotate: '180deg',
      opacity: 0.5,
      ease: 'power4.out',
      duration: 1.5,
      scrollTrigger: {
         trigger: '[data-rotation-anim]',
         start: 'top 90%',
         end: 'top 90%',
         // scrub: true,
      },
   });

   gsap.from('[data-anim-from-bottom]', {
      yPercent: 'random(30, 60)',
      opacity: 0.6,
      scale: 'random(0.7, 0.9)',
      ease: 'power4.out',
      duration: 1,
      scrollTrigger: {
         trigger: '[data-anim-from-bottom]',
         start: 'top 95%',
         end: 'top 95%',
         // scrub: true,
      },
   });

   // parallax animation
   gsap.to('[data-parallax-down]', {
      yPercent: 'random(15, 23)',
      ease: 'none',
      scrollTrigger: {
         trigger: '[data-parallax-down]',
         start: 'top bottom',
         end: 'bottom top',
         scrub: true,
      },
   });

   // animating text
   // const animTextList = document.querySelectorAll('[data-text-anim');
   // if (animTextList && animTextList.length > 0) {
   //    animTextList.forEach((item) => {
   //       console.log(item);
   //       gsap.to(item, {
   //          scrollTrigger: {
   //             trigger: item,
   //             start: 'top bottom',
   //             end: 'top bottom',
   //          },
   //          duration: 1,
   //          text: item.dataset.textAnim,
   //          ease: 'power1.out',
   //       });
   //    });
   // }

   // animation for flowers
   const animFlowerList = document.querySelectorAll('[data-anim-flower]');
   if (animFlowerList && animFlowerList.length > 0) {
      animFlowerList.forEach((flower) => {
         let flowerWasAnimated = flower.dataset.animFlower === 'true' ? true : false;
         let flowerAnimateImmediately = flower.dataset.animFlower === 'true' ? true : false;

         const flowerTimeline = gsap.timeline({ paused: !flowerAnimateImmediately });
         flowerTimeline.from(flower, {
            rotate: 'random(-50, 50, 15)' + 'deg',
            scale: 'random(0.6, 0.8)',
            opacity: 'random(0.3, 0.6)',
            duration: 1.4,
         });
         flowerTimeline.to(flower, {
            x: 'random(-10, 10)',
            y: 'random(-10, 10)',
            rotate: 'random(-15, 15, 5)' + 'deg',
            scale: 'random(0.9, 0.95)',
            repeat: -1,
            duration: 4,
            yoyo: true,
         });

         ScrollTrigger.create({
            start: 0,
            end: 'max',
            onUpdate: () => {
               if (ScrollTrigger.isInViewport(flower) && !flowerWasAnimated) {
                  flowerTimeline.play();
                  flowerWasAnimated = true;
               }
            },
         });

         gsap.to(flower, {
            yPercent: 'random(23, 43)',
            ease: 'none',
            scrollTrigger: {
               trigger: flower,
               start: 'top bottom',
               end: 'bottom top',
               scrub: true,
            },
         });
      });
   }

   const teammateSlider = new Swiper('[data-teammate-slider]', {
      slidesPerView: 1,
      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      breakpoints: {
         1024: {
            slidesPerView: 2,
         },
         1280: {
            slidesPerView: 3,
         },
         1920: {
            slidesPerView: 4,
         },
      },
   });
});
