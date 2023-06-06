import Zaposlenici from "./Zaposlenici";


function Objekti() {
    let osoba1 ={
        imeprezime:"Nathan Watts",
        pozicija:"Instructor",
        opis:"Dive deeper, explore the unknown, and unlock your underwater potential."};

   
    let osoba2={
        imeprezime:"Craig Morris",
        pozicija:"Owner and Chief Instructor",
        opis:"Explore the depths, embrace adventure, and let the ocean inspire you."
    };
    let osoba3={
        imeprezime:"Jodi Moore",
        pozicija:"Instructor",
        opis:"Dive deep, embrace the unknown, and discover the wonders beneath."
    };
    return (
      <div className="Objekti">
        <Zaposlenici inst={osoba1} sef={osoba2} zena={osoba3}/>
      </div>
    );
    
};
  export default Objekti;