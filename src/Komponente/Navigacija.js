import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
function Navigacija() {
    return (
      <div className="Navigacija">
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
       
      </div>
    );
  }
  
  export default Navigacija;