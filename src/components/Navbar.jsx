import mushroomLogo from '../assets/Mushroom.jpeg';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a className="brand" href="#home">
          <img src={mushroomLogo} alt="Eco Cylon MUSHROOMS logo" className="brand-logo" />
          <span>Eco Cylon MUSHROOMS</span>
        </a>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#benefits">Benefits</a>
          <a href="#gallery">Gallery</a>
        </nav>
      </div>
    </header>
  );
}
