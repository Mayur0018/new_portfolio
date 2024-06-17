import { useEffect } from 'react';

const useNavbarToggle = () => {
  useEffect(() => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    const toggleNavbar = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };

    if (menuIcon) {
      menuIcon.addEventListener('click', toggleNavbar);
    }

    return () => {
      if (menuIcon) {
        menuIcon.removeEventListener('click', toggleNavbar);
      }
    };
  }, []);
};

export default useNavbarToggle;
