import Logo from "../img/logo.png";
import facebook from "../img/facebook.jpg";
import instagram from "../img/insta.png";
import twitter from "../img/tvit.jpg";

function Footer() {
    return (
      <div className="Footer">
        <div className="footer">
            <div className="ilogo"><img src={Logo} alt="kao neki logo" id="logo"/>
                <h2>Scuba Dive Center</h2>
                <p>Tina Dobričić </p>
            </div>
            <div className="text">
                <p>Thank you for exploring the depths with us, embracing the wonders of the underwater world. Happy diving!
                </p>
                
            </div>
            <div className="input">
                <p>Newsletter:</p><br/><input type="email" name="" id="mailf" placeholder="Email"/>
            </div>
            <div className="mreze">
                <a href="https://hr-hr.facebook.com/"><img src={facebook}/></a><a
                    href="https://www.instagram.com/"><img src={instagram}/></a><a
                    href="https://twitter.com/"><img src={twitter}/></a>
                     <p>&#169;Copyright 2023</p>
    
            </div>
        </div>
       
      </div>
    );
  }
  
  export default Footer;