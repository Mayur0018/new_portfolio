import 'boxicons/css/boxicons.min.css';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">Portfolio</a>
      <i className="bx bx-menu" id="menu-icon"></i>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Service</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contect">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
