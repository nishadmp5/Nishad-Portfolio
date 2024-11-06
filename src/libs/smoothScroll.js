// utils/smoothScroll.js
import Lenis from '@studio-freight/lenis'

export let lenis = null;

export const initSmoothScroll = ({
  duration = 1.2,
  smoothWheel = true,
  smoothTouch = false,
  wheelMultiplier = 1.0,
  infinite = false
} = {}) => {
  if (typeof window === 'undefined') return;
  
  lenis = new Lenis({
    duration,
    smoothWheel,
    smoothTouch,
    wheelMultiplier,
    infinite
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
  
  return lenis;
}

export const getLenis = () => lenis;


const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
};

export default scrollToSection;