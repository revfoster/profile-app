import React, { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // Initial animations for hero element
    if (document.body.classList.contains('has-animations')) {
      const doc = document.documentElement;
      doc.classList.add('anime-ready');

      const anime = window.anime;

      anime.timeline({
        targets: '.hero-figure-box-05'
      }).add({
        duration: 400,
        easing: 'easeInOutExpo',
        scaleX: [0.05, 0.05],
        scaleY: [0, 1],
        perspective: '500px',
        delay: anime.random(0, 400)
      }).add({
        duration: 400,
        easing: 'easeInOutExpo',
        scaleX: 1
      }).add({
        duration: 800,
        rotateY: '-15deg',
        rotateX: '8deg',
        rotateZ: '-1deg'
      });

      anime.timeline({
        targets: '.hero-figure-box-06, .hero-figure-box-07'
      }).add({
        duration: 400,
        easing: 'easeInOutExpo',
        scaleX: [0.05, 0.05],
        scaleY: [0, 1],
        perspective: '500px',
        delay: anime.random(0, 400)
      }).add({
        duration: 400,
        easing: 'easeInOutExpo',
        scaleX: 1
      }).add({
        duration: 800,
        rotateZ: '20deg'
      });

      anime({
        targets: '.hero-figure-box-01, .hero-figure-box-02, .hero-figure-box-03, .hero-figure-box-04, .hero-figure-box-08, .hero-figure-box-09, .hero-figure-box-10',
        duration: anime.random(600, 800),
        delay: anime.random(600, 800),
        rotate: [anime.random(-360, 360), function (el) { return el.getAttribute('data-rotation') }],
        scale: [0.7, 1],
        opacity: [0, 1],
        easing: 'easeInOutExpo'
      });
    }
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title mt-0">Foster personal profile page</h1>
            <p className="hero-paragraph">Create a professional profile page Showcase my skills, experience, and achievements with a stunning, customizable profile page.</p>
            <div className="hero-cta"><a className="button button-primary" href="#">Pre order now</a><a
              className="button" href="#">Get in touch</a></div>
          </div>
          <div className="hero-figure anime-element">
            <svg className="placeholder" width="528" height="396" viewBox="0 0 528 396">
              <rect width="528" height="396" style={{ fill: 'transparent' }} />
            </svg>
            <div className="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>
            <div className="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
            <div className="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
            <div className="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
            <div className="hero-figure-box hero-figure-box-05"></div>
            <div className="hero-figure-box hero-figure-box-06"></div>
            <div className="hero-figure-box hero-figure-box-07"></div>
            <div className="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
            <div className="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
            <div className="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
