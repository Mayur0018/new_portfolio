import { useEffect } from 'react';

const useActiveLinkOnScroll = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navlinks = document.querySelectorAll('header nav a');
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    const handleScroll = () => {
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navlinks.forEach((link) => {
            link.classList.remove('active');
          });
          document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
        }
      });

      const header = document.querySelector('header');
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
      }

      if (menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useActiveLinkOnScroll;
