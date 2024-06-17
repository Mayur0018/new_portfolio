import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = (settings, revealConfig) => {
  useEffect(() => {
    ScrollReveal(settings);
    revealConfig.forEach(({ selector, config }) => {
      ScrollReveal().reveal(selector, config);
    });
  }, [settings, revealConfig]);
};

export default useScrollReveal;
