import Navigacija from './Navigacija';
import Footer from './Footer';
import Slike from './Slike';
function Treca() {
    return (
      <div className="Treca">
        <Navigacija/>
        <h1 id="Abt">Dive Sites</h1>
        <Slike/>
       <Footer/>
      </div>
    );
  }
  
  export default Treca;