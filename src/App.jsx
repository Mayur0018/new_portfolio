import './App.css';
import 'boxicons/css/boxicons.min.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import useTyped from './hooks/useTyped';
import useScrollReveal from './hooks/useScrollReveal';
import useNavbarToggle from './hooks/useNavbarToggle.jsuseNavbarToggle';
import useActiveLinkOnScroll from './hooks/useActiveLinkOnScroll';

const App = () => {
  useTyped('.multiple-text', {
    strings: ['Web Developer', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  useScrollReveal(
    {
      distance: '80px',
      duration: 2000,
      delay: 200,
    },
    [
      { selector: '.home-content, .heading', config: { origin: 'top' } },
      { selector: '.home-img, .services-container, .portfolio-box, .contact form', config: { origin: 'bottom' } },
      { selector: '.home-content h1, .about-img, .header', config: { origin: 'left' } },
    ]
  );

  useNavbarToggle();
  useActiveLinkOnScroll();

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
