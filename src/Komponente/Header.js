import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="Header">
      <div className="navigacija">
        <div className="logo">
          <img src={Logo} id="logo"/>
          <h2>Scuba Dive Center</h2>
        </div>
        <div className="nav">
        <Link to='/'>Home</Link>
          <Link to='/druga'>About</Link>
          <Link to='/treca'>Dive Sites</Link>
        </div>
      </div>
      <div className="centartxt">
        <h1 id="nas">Scuba <br /> Dive Center</h1>
        <h6>Plunge into the Adventure of a Lifetime</h6>
        <a href="#book">Book now</a>
      </div>
    </div>
  );
}

export default Header;
