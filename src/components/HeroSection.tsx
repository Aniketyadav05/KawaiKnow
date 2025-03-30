
import luffy from "../images/luffy.png"
const HeroSection = () => {
  

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-black text-white">

      {/* Floating Anime Images */}
      <img
        src={luffy}
        alt="Naruto"
        className="absolute top-10 left-10 w-24 md:w-32 rounded-lg shadow-lg"
      />
      <img
        src={luffy}
        alt="Luffy"
        className="absolute top-20 right-20 w-24 md:w-32 rounded-lg shadow-lg"
      />
      <img
        src={luffy}
        alt="Goku"
        className="absolute bottom-10 left-20 w-24 md:w-32 rounded-lg shadow-lg"
      />
      <img
        src={luffy}
        alt="Tanjiro"
        className="absolute bottom-20 right-10 w-24 md:w-32 rounded-lg shadow-lg"
      />
    </div>
  );
};

export default HeroSection;
