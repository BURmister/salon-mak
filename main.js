// gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { EaselPlugin } from 'gsap/EaselPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

// swiper
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
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
      duration: 3,
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

   // place section
   gsap.from('[data-mobile-block]', {
      yPercent: 'random(15, 30)',
      scale: 0.95,
      duration: 1,
      scrollTrigger: {
         trigger: '[data-mobile-block]',
         start: 'top 90%',
         end: 'bottom 90%',
      },
   });

   gsap.from('[data-mobile-block-description] .arrow-vector', {
      yPercent: 'random(-30, -15)',
      rotate: 'random(-45deg, -30deg)',
      scaleY: 0.4,
      scaleX: 0,
      opacity: 0.4,
      duration: 1,
      scrollTrigger: {
         trigger: '[data-mobile-block-description]',
         start: 'top 90%',
         end: 'bottom 90%',
      },
   });

   const videoInPhone = document.querySelector('[data-phone-video]');
   const videoInPhoneTrigger = document.querySelector('[data-phone-video-trigger]');
   if (videoInPhone && videoInPhoneTrigger) {
      let isPlayed = !!(videoInPhone.currentTime > 0 && !videoInPhone.paused && !videoInPhone.ended && videoInPhone.readyState > 2);

      videoInPhoneTrigger.addEventListener('click', () => {
         if (isPlayed) {
            isPlayed = false;
            videoInPhone.load();
            videoInPhone.pause();
         } else {
            isPlayed = true;
            videoInPhone.play();
         }
      });

      ScrollTrigger.create({
         start: 0,
         end: 'max',
         onUpdate: () => {
            if (ScrollTrigger.isInViewport(videoInPhone) && !isPlayed) {
               isPlayed = true;
               videoInPhone.play();
            }
         },
      });
   }

   // workabout section
   gsap.from('[data-workabout-beigewave]', {
      y: 'random(230, 80)',
      duration: 1.5,
      scrollTrigger: {
         trigger: '[data-workabout-beigewave]',
         start: 'top 95%',
         end: 'bottom 95%',
      },
   });
   gsap.to('[data-workabout-beigewave] .wave-top', {
      y: 'random(35, 50)',
      objectPosition: `random(0, 100)% 0%`,
      duration: 3,
      ease: 'back.inOut(1)',
      repeat: -1,
      yoyo: true,
   });
   gsap.to('[data-workabout-beigewave] .wave-bottom', {
      y: 'random(-50, -35)',
      objectPosition: `random(0, 100)% 0%`,
      duration: 3,
      ease: 'back.inOut(1)',
      repeat: -1,
      yoyo: true,
   });

   // global
   const aboutworkItemList = document.querySelectorAll('[data-enter-from-scale]');
   if (aboutworkItemList && aboutworkItemList.length > 0) {
      aboutworkItemList.forEach((item) => {
         const delay = item.dataset.enterFromScale ? Number(item.dataset.enterFromScale) : 0;
         gsap.from(item, {
            opacity: 0.5,
            y: 'random(15px, 50px)',
            scale: 'random(0.6, 0.8)',
            ease: 'power4.out',
            duration: 1,
            delay: delay,
            scrollTrigger: {
               trigger: item,
               start: 'top 90%',
               end: 'top 90%',
               // scrub: true,
            },
         });
      });
   }

   gsap.to('[data-rotate-anim]', {
      rotate: '360deg',
      ease: 'linear',
      duration: 23,
      repeat: -1,
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
            duration: 1,
         });
         flowerTimeline.to(flower, {
            x: 'random(-10, 10)',
            y: 'random(-10, 10)',
            rotate: 'random(-15, 15, 5)' + 'deg',
            scale: 'random(0.9, 0.95)',
            repeat: -1,
            duration: 2,
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

   // teammate card
   const teammateCardList = document.querySelectorAll('[data-teammate-card]');
   if (teammateCardList && teammateCardList.length > 0) {
      teammateCardList.forEach((card) => {
         const video = card.querySelector('[data-teammate-card-video]');
         if (!video) return;

         if (window.innerWidth >= 1024) {
            video.addEventListener('mouseover', () => {
               video.play();
            });

            video.addEventListener('mouseout', () => {
               video.load();
               video.pause();
            });
         } else {
            ScrollTrigger.create({
               start: 0,
               end: 'max',
               onUpdate: () => {
                  if (ScrollTrigger.isInViewport(video)) {
                     setTimeout(() => {
                        try {
                           video.play();
                        } catch (error) {
                           console.error(error);
                           video.load();
                           video.pause();
                        }
                     }, 4000);
                     video.removeAttribute('loop');
                  } else {
                     video.load();
                     video.pause();
                  }
               },
            });
         }

         video.addEventListener('ended', () => {
            video.load();
            video.pause();
         });
      });
   }

   // const mutateSlider = (slider, prevButton, nextButton) => {
   //    if (!slider || !prevButton || !nextButton) return console.error('3 props are required');
   //    if (typeof prevButton === 'string') prevButton = document.querySelector(prevButton);
   //    if (typeof nextButton === 'string') nextButton = document.querySelector(nextButton);

   //    const changeButton = (button, disabled) => {
   //       if (disabled) button.classList.add('btn-disabled');
   //       else button.classList.remove('btn-disabled');
   //    };

   //    let isBeginning = slider.isBeginning;
   //    let isEnd = slider.isEnd;

   //    const updateSlider = () => {
   //       slider.updateSlidesClasses();

   //       const _isBeginning = slider.isBeginning;
   //       if (isBeginning !== _isBeginning) {
   //          isBeginning = _isBeginning;
   //          changeButton(prevButton, _isBeginning);
   //       }

   //       const _isEnd = slider.isEnd;
   //       if (isEnd !== _isEnd) {
   //          isEnd = _isEnd;
   //          changeButton(nextButton, slider.isEnd);
   //       }
   //    };

   //    const turnSlide = (direction) => {
   //       if (direction === 'prev') slider.slidePrev();
   //       if (direction === 'next') slider.slideNext();
   //    };

   //    if (slider.isBeginning) changeButton(prevButton, true);
   //    if (slider.isEnd) changeButton(nextButton, true);
   //    prevButton.addEventListener('click', () => turnSlide('prev'));
   //    nextButton.addEventListener('click', () => turnSlide('next'));
   // };

   const promosSlider = new Swiper('[data-promos-slider]', {
      modules: [Navigation],
      slidesPerView: 1,
      navigation: {
         nextEl: '[data-promos-slider-next]',
         prevEl: '[data-promos-slider-prev]',
      },
   });
   // mutateSlider(promosSlider, '[data-promos-slider-prev]', '[data-promos-slider-next]');

   const productsSlider = new Swiper('[data-products-slider]', {
      modules: [Navigation],
      slidesPerView: 'auto',
      spaceBetween: 20,
      // Navigation arrows
      navigation: {
         nextEl: '[data-products-slider-next]',
         prevEl: '[data-products-slider-prev]',
      },
      breakpoints: {
         // 480: {
         //    slidesPerView: 2.2,
         // },
         720: {
            slidesPerView: 3,
            spaceBetween: 15,
         },
         1024: {
            slidesPerView: 4,
            spaceBetween: 20,
         },
         1280: {
            slidesPerView: 4,
            spaceBetween: 30,
         },
         1440: {
            slidesPerView: 4,
            spaceBetween: 50,
         },
         1920: {
            slidesPerView: 5,
            // spaceBetween: 25,
         },
      },
   });

   const teammateSlider = new Swiper('[data-teammate-slider]', {
      modules: [Navigation],
      slidesPerView: 1,
      // Navigation arrows
      navigation: {
         nextEl: '[data-teammate-slider-next]',
         prevEl: '[data-teammate-slider-prev]',
      },
      breakpoints: {
         1024: {
            slidesPerView: 2,
            spaceBetween: 30,
         },
         1280: {
            slidesPerView: 3,
         },
         1920: {
            slidesPerView: 4,
            spaceBetween: 15,
         },
      },
   });

   const reviewSlider = new Swiper('[data-reviews-slider]', {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 45,
      // Navigation arrows
      navigation: {
         nextEl: '[data-reviews-slider-next]',
         prevEl: '[data-reviews-slider-prev]',
      },
      breakpoints: {
         720: {
            slidesPerView: 2,
         },
         1024: {
            slidesPerView: 3,
            spaceBetween: 30,
         },
         1280: {
            slidesPerView: 3,
            spaceBetween: 50,
         },
         1440: {
            slidesPerView: 3,
            spaceBetween: 60,
         },
         1920: {
            slidesPerView: 4,
            spaceBetween: 70,
         },
      },
   });
});
