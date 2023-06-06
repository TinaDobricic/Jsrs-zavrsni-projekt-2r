import Zena from "../img/zena.jpg";
import Sef from "../img/sef.jpg";
import Inst from "../img/ins.jpg";

function Zaposlenici({inst,sef,zena}) {
    return (
      <div className="Zaposlenici">
         <h2 id="nasslov">Meet Our Staff</h2>
         <p className="paragrafii">Our dedicated and experienced staff at Scuba Dive Center is here to make your scuba diving experience exceptional. From our passionate and knowledgeable instructors to our friendly and helpful support team, we are committed to ensuring your safety, enjoyment, and satisfaction every step of the way.</p>
       <div className="instruktori">
       <div className="instruktor">
        <img src={Inst} className="slikeljudi"/>
        <h3>{inst.imeprezime}</h3>
        <h4>{inst.pozicija}</h4>
        <p>{inst.opis}</p>

        </div>
        <div className="instruktor">
        <img src={Sef} className="slikeljudi"/>
        <h3>{sef.imeprezime}</h3>
        <h4>{sef.pozicija}</h4>
        <p>{sef.opis}</p>

       </div>
       <div className="instruktor">
       <img src={Zena} className="slikeljudi"/>
       <h3>{zena.imeprezime}</h3>
        <h4>{zena.pozicija}</h4>
        <p>{zena.opis}</p>

       </div>

       </div>
      </div>
    );
  }
  
  export default Zaposlenici;