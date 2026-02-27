import "./navbarstyle.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyHospital</div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#" className="btn register-btn">Register</a></li>
        <li><a href="#" className="btn login-btn">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;