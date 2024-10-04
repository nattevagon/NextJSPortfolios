import { useCallback } from 'react';

const useSmoothScroll = () => {
  const scrollToElement = useCallback((el: string, ms: number = 100) => {
    const element = document.querySelector(el) as HTMLElement;
    if (!element) return;

    const start = window.pageYOffset;
    const end = element.offsetTop;
    const change = end - start;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / ms, 1);
      window.scrollTo(0, start + change * progress);
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  return scrollToElement;
};

export default useSmoothScroll;