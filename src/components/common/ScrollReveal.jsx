import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './ScrollReveal.css';

const REVEAL_GROUPS = [
  { selector: '.about .section-heading', delay: 0, duration: 680 },
  { selector: '.about__copy', delay: 120, duration: 720, direction: 'left' },
  {
    selector: '.about__facts > div',
    delay: 180,
    step: 110,
    duration: 720,
    direction: 'right',
    sequence: 'about-facts',
  },
  { selector: '.experience .section-heading', delay: 0, duration: 520 },
  {
    selector: '.experience__item',
    delay: 80,
    step: 140,
    duration: 620,
    direction: 'left',
    sequence: 'experience-items',
  },
  { selector: '.projects .section-heading', delay: 0, duration: 520 },
  {
    selector: '.project-card',
    delay: 140,
    step: 110,
    duration: 760,
    direction: 'left',
    sequence: 'project-cards',
  },
  { selector: '.skills .section-heading', delay: 0, duration: 520 },
  {
    selector: '.skills__card',
    delay: 80,
    step: 110,
    duration: 580,
    direction: 'up',
    sequence: 'skills-cards',
  },
  { selector: '.certificates .section-heading', delay: 0, duration: 520 },
  {
    selector: '.certificates__card',
    delay: 80,
    step: 120,
    duration: 620,
    direction: 'left',
    sequence: 'certificate-cards',
  },
  { selector: '.contact .section-heading', delay: 0, duration: 520 },
  {
    selector: '.contact__info a',
    delay: 60,
    step: 90,
    duration: 520,
    direction: 'left',
    sequence: 'contact-links',
  },
  { selector: '.contact__form', delay: 180, duration: 620, direction: 'right' },
];

function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    let observer;
    const startedSequences = new Set();
    const revealTimers = [];
    const frameId = window.requestAnimationFrame(() => {
      const elements = [];

      REVEAL_GROUPS.forEach(({ selector, delay, step = 0, duration = 620, direction = 'up', sequence }) => {
        document.querySelectorAll(selector).forEach((element, index) => {
          const elementDelay = delay + index * step;
          element.classList.add('scroll-reveal');
          element.dataset.revealDirection = direction;
          if (sequence) {
            element.dataset.revealSequence = sequence;
            element.dataset.revealSequenceDelay = String(elementDelay);
          }
          element.style.setProperty('--reveal-delay', sequence ? '0ms' : `${elementDelay}ms`);
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

            const sequenceName = entry.target.dataset.revealSequence;
            if (sequenceName) {
              if (startedSequences.has(sequenceName)) return;
              startedSequences.add(sequenceName);

              const sequenceElements = [...document.querySelectorAll(`[data-reveal-sequence="${sequenceName}"]`)];
              sequenceElements.forEach((element) => {
                observer.unobserve(element);
                const delay = Number.parseInt(element.dataset.revealSequenceDelay, 10) || 0;
                const timer = window.setTimeout(() => element.classList.add('is-visible'), delay);
                revealTimers.push(timer);
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
      revealTimers.forEach((timer) => window.clearTimeout(timer));
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}

export default ScrollReveal;
