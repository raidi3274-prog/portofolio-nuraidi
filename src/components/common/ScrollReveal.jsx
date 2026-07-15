import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './ScrollReveal.css';

const REVEAL_GROUPS = [
  { selector: '.about .section-heading', delay: 0 },
  { selector: '.about__copy', delay: 140 },
  { selector: '.about__facts > div', delay: 280, step: 90 },
  { selector: '.experience .section-heading', delay: 0 },
  { selector: '.experience__item', delay: 120, step: 110 },
  { selector: '.projects .section-heading', delay: 0 },
  { selector: '.projects__all', delay: 100 },
  { selector: '.project-card', delay: 0, duration: 900, direction: 'horizontal' },
  { selector: '.skills .section-heading', delay: 0 },
  { selector: '.skills__card', delay: 140, step: 120, direction: 'horizontal' },
  { selector: '.certificates .section-heading', delay: 0 },
  { selector: '.certificates__card', delay: 140, step: 110, direction: 'horizontal' },
  { selector: '.contact .section-heading', delay: 0 },
  { selector: '.contact__info', delay: 140, direction: 'horizontal' },
  { selector: '.contact__form', delay: 280, direction: 'horizontal' },
  { selector: '.project-detail header', delay: 0 },
  { selector: '.project-detail__grid article', delay: 140, step: 110 },
];

function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    let observer;
    let projectSequenceStarted = false;
    const projectTimers = [];
    const frameId = window.requestAnimationFrame(() => {
      const elements = [];

      REVEAL_GROUPS.forEach(({ selector, delay, step = 0, duration = 620, direction = 'vertical' }) => {
        document.querySelectorAll(selector).forEach((element, index) => {
          element.classList.add('scroll-reveal');
          element.dataset.revealDirection = direction;
          element.style.setProperty('--reveal-delay', `${delay + index * step}ms`);
          element.style.setProperty('--reveal-duration', `${duration}ms`);
          elements.push(element);
        });
      });

      if (!('IntersectionObserver' in window)) {
        elements.forEach((element) => element.classList.add('is-visible'));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            if (entry.target.classList.contains('project-card')) {
              if (projectSequenceStarted) return;
              projectSequenceStarted = true;

              const projectCards = [...document.querySelectorAll('.project-card')];
              projectCards.forEach((card, index) => {
                observer.unobserve(card);
                const timer = window.setTimeout(() => card.classList.add('is-visible'), 140 + index * 110);
                projectTimers.push(timer);
              });
              return;
            }

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      );

      elements.forEach((element) => observer.observe(element));
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      projectTimers.forEach((timer) => window.clearTimeout(timer));
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}

export default ScrollReveal;
