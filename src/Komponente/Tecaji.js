import Ljudi from "../img/sretniljudi.jpg";
import Druga from "../img/openw.jpg";
import Master from "../img/master.jpg";
function Tecaji() {
    return (
      <div className="Tecaji">
         <h1 className="naslovi">Our Courses</h1>

<div className="kartice">
    <div className="prva"><img src={Ljudi} alt=""/>
        <div className="textic">
            <h2>Intro to Scuba</h2>
            <p>Welcome to the world of scuba diving, where underwater wonders await you. Embrace the
                tranquility, explore marine life, and dive into unforgettable experiences.</p>
            <a href="#book" className="malibtn">Book!</a>
        </div>
    </div>
    <div className="druga"><img src={Druga} alt=""/>
        <div className="textic">
            <h2>Open Water Diver</h2>
            <p>Discover the mesmerizing depths of the ocean with our exhilarating scuba diving adventures.
                Dive in and explore today!</p><a href="#book" className="malibtn">Book!</a>
        </div>
    </div>
    <div className="treca"><img src={Master} alt=""/>
        <div className="textic">
            <h2>Dive Master</h2>
            <p>Unlock the depths of your potential as a Scuba Diver Master. Embrace leadership, expertise,
                and unforgettable underwater adventures.</p><a href="#book" className="malibtn">Book!</a>
        </div>
    </div>
</div>

        <div className="uredenje">
            <h1>Explore the depths, discover a world of wonders, and dive into endless possibilities.</h1>
        </div>
       
      </div>
    );
  }
  
  export default Tecaji;
