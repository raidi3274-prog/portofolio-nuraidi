import { useEffect, useRef } from 'react';

import './BlueprintCursor.css';

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, [role="button"]';

function BlueprintCursor() {
  const reticleRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const reticle = reticleRef.current;
    const trail = trailRef.current;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!reticle || !trail || !finePointer.matches || reducedMotion.matches) return undefined;

    let frameId;
    let clickTimer;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let reticleX = pointerX;
    let reticleY = pointerY;
    let trailX = pointerX;
    let trailY = pointerY;

    const render = () => {
      reticleX += (pointerX - reticleX) * 0.34;
      reticleY += (pointerY - reticleY) * 0.34;
      trailX += (reticleX - trailX) * 0.12;
      trailY += (reticleY - trailY) * 0.12;

      reticle.style.transform = `translate3d(${reticleX}px, ${reticleY}px, 0)`;
      trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`;
      frameId = window.requestAnimationFrame(render);
    };

    const showCursor = () => {
      reticle.dataset.visible = 'true';
      trail.dataset.visible = 'true';
    };

    const hideCursor = () => {
      reticle.dataset.visible = 'false';
      trail.dataset.visible = 'false';
    };

    const handlePointerMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      const isInteractive = Boolean(event.target.closest?.(INTERACTIVE_SELECTOR));
      reticle.dataset.interactive = String(isInteractive);
      trail.dataset.interactive = String(isInteractive);
      showCursor();
    };

    const handlePointerDown = () => {
      reticle.dataset.pressed = 'true';
      window.clearTimeout(clickTimer);
      clickTimer = window.setTimeout(() => {
        reticle.dataset.pressed = 'false';
      }, 180);
    };

    document.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('pointerdown', handlePointerDown, { passive: true });
    document.documentElement.addEventListener('mouseleave', hideCursor);
    frameId = window.requestAnimationFrame(render);

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerdown', handlePointerDown);
      document.documentElement.removeEventListener('mouseleave', hideCursor);
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(clickTimer);
    };
  }, []);

  return (
    <div className="blueprint-cursor" aria-hidden="true">
      <div className="blueprint-cursor__trail" ref={trailRef} />
      <div className="blueprint-cursor__reticle" ref={reticleRef}>
        <span />
      </div>
    </div>
  );
}

export default BlueprintCursor;
