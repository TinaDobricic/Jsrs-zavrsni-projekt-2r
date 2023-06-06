import Footer from "./Footer";
import Navigacija from "./Navigacija";
import Objekti from "./Objekti";
function Druga() {
  return (
    <div className="Druga">
      <Navigacija />
      <h1 id="Abt">About Us</h1>
      <h2 id="nass">The Ocean is Our Way of Life</h2>

      <p className="paragrafii">
        Welcome to Scuba Dive Center! We are passionate about scuba diving and committed to sharing the wonders of the underwater world with you.At our diving center, we believe that the ocean is more than just a vast body of water; it is a way of life. Scuba diving allows us to explore a realm teeming with vibrant marine life, breathtaking coral reefs, and awe-inspiring underwater landscapes. It is an adventure that connects us to nature and ourselves in a profound and exhilarating way.</p>
      <p className="paragrafii">
        Immerse yourself in the crystal-clear waters as you embark on an unforgettable journey beneath the surface. Our team of experienced and certified instructors will guide you through every step of your scuba diving experience, ensuring your safety while providing expert knowledge about the marine ecosystem.</p>
      <p className="paragrafii">
        As you descend into the depths, you will witness a symphony of colors and discover a hidden world of marine creatures. Encounter graceful sea turtles gliding through the water, schools of tropical fish darting among coral formations, and mesmerizing seascapes that will leave you in awe. Each dive is a unique opportunity to connect with the ocean and gain a deeper understanding of its importance to our planet.</p>
      <p className="paragrafii">
        Join us and let the ocean become your playground, your sanctuary, and your inspiration. Dive with us, and experience the magic that lies beneath the surface. Whether you are a beginner or an experienced diver, Scuba Dive Center welcomes you to explore, discover, and cherish the wonders of the underwater world.
      </p>
      <Objekti/>
      <Footer />
    </div>
  );
}

export default Druga;