import { Link } from "react-router-dom";
function Maliabout() {
    return (
      <div className="Maliabout">
        <div className="textaboutmali">
                <h1 className="naslovi">About Us</h1>
                <p>Scuba Five Center is a premier diving facility that offers an unforgettable underwater experience.
                    With
                    expert instructors, state-of-the-art equipment, and stunning dive sites, it caters to both beginners
                    and
                    advanced divers. Whether you're exploring vibrant coral reefs or encountering fascinating marine
                    life, Scuba
                    Five Center ensures safety and excitement in every dive. Dive into adventure and discover the
                    wonders of the
                    ocean with Scuba Five Center.</p>
                    <Link to='/druga' className="malibtn">Read more</Link>
            </div>
       
      </div>
    );
  }
  
  export default Maliabout;