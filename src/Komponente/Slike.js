import bc from "../img/oo.jpg";
import bc2 from "../img/s.jpg";
import bc4 from "../img/ss.jpg";
import bc5 from "../img/l.jpg";
import bc6 from "../img/iii.jpg";
import bc7 from "../img/i.jpg";
import bc8 from "../img/ll.jpg";
import bc9 from "../img/ii.jpg";

import dk0 from "../img/dk0.jpg";
import dk1 from "../img/dk1.jpg";
import dk2 from "../img/dk2.jpg";
import dk3 from "../img/dk3.jpg";
import dk4 from "../img/dk4.jpg";
import dk5 from "../img/dk5.jpg";
import dk6 from "../img/dk6.jpg";
import dk7 from "../img/dk7.jpg";

import vv0 from "../img/vv0.jpg";
import vv1 from "../img/vv.jpg";
import vv2 from "../img/vv2.jpg";
import vv3 from "../img/vv3.jpg";
import vv4 from "../img/vv4.jpg";
import vv5 from "../img/vv5.jpg";
import vv6 from "../img/vv6.jpg";
import vv7 from "../img/vv7.jpg";




function Slike() {
    let misto1 ={
        ime:"Blue Canyon",
        dubina:"8-25 m ",
        struja:"Mild",
        opis:"Good for Beginners"
        };

   
    let misto2={
        ime:"Diver's Key",
        dubina:" 12-30 m",
        struja:" Mild to Strong",
        opis:" Good for Experienced Divers"
    };
    let misto3={
        ime:"Whale View",
        dubina:"15-35 m",
        struja:"Mild ",
        opis:"Great for Photographers"
    };
    return (
      <div className="Slike">
       <h2 id="nass">{misto1.ime}</h2>
       <p className="paragrafiii">Depth: {misto1.dubina}  |  Currents: {misto1.struja}  |  {misto1.opis}</p>
       <div className="slikee">
       <div className="slikica">
        <img src={bc}/>
        <img src={bc2}/>
        </div>
        <div className="slikica">
        <img src={bc4}/>
        <img src={bc5}/>
        <img src={bc6}/>
        
        </div>
        <div className="slikica">
        <img src={bc7}/>
        <img src={bc8}/>
        <img src={bc9}/>
        
        </div>
       </div>
       <h2 id="nass">{misto2.ime}</h2>
       <p className="paragrafiii">Depth: {misto2.dubina}  |  Currents: {misto2.struja}  |  {misto2.opis}</p>
       <div className="slikee">
       <div className="slikica">
        <img src={dk0}/>
        <img src={dk1}/>
        <img src={dk2}/>
        </div>
        <div className="slikica">
        <img src={dk3}/>
        <img src={dk4}/>
        
        </div>
        <div className="slikica">
        <img src={dk5}/>
        <img src={dk6}/>
        <img src={dk7}/>
        
        </div>
       </div>
       <h2 id="nass">{misto3.ime}</h2>
       <p className="paragrafiii">Depth: {misto3.dubina}  |  Currents: {misto3.struja}  |  {misto3.opis}</p>
       <div className="slikee">
       <div className="slikica">
        <img src={vv0}/>
        <img src={vv1}/>
        <img src={vv2}/>
        </div>
        <div className="slikica">
        <img src={vv3}/>
        <img src={vv4}/>
        <img src={vv5}/>
        
        </div>
        <div className="slikica">
        <img src={vv6}/>
        <img src={vv7}/>
        
        
        </div>
       </div>
      </div>
    );
  }
  
  export default Slike;