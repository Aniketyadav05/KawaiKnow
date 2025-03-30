import { motion } from "framer-motion";
import luffy from "../images/luffy.png"
import tanjiro from "../images/tanjiro.png"
import kakashi from "../images/kakashi.png"
import asta from "../images/asta.png"
import devil from "../images/devil.png"
import eren from "../images/eren.png"
import itachi from "../images/itachi.png"
import goku from "../images/goku.png"
import mikasa from "../images/mikasa.png"
import nezuko from "../images/nezuko.png"
import spidy from "../images/spidy.png"
import team7 from "../images/team7.png"
const HeroSection = () => {
  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">

      {/* Floating Anime Images */}
      
      
      <motion.img
        src={luffy}
        alt="Goku"
        className="absolute bottom-100 right-0 w-24 md:w-32 rounded-lg shadow-lg"
        initial={{ x: 200, opacity: 0 }}  // Start below the screen
        animate={{ x: 0, opacity: 1 }}  // Move to normal position
        transition={{ duration: 2, ease: "easeOut" }} // Smooth animation
      />
            <motion.img
        src={asta}
        alt="Goku"
        className="absolute bottom-0 right-80 w-24 md:w-32 rounded-lg shadow-lg"
        initial={{ y: 200, opacity: 0 }}  // Start below the screen
        animate={{ y: 0, opacity: 1 }}  // Move to normal position
        transition={{ duration: 2, ease: "easeOut" }} // Smooth animation
      />
      
      <motion.img
        src={devil}
        alt="Tanjiro"
        className="absolute bottom-0 right-0 w-24 md:w-32 rounded-lg shadow-lg"
        initial={{ x: 200, opacity: 0 }}  // Start below the screen
        animate={{ x: 0, opacity: 1 }}  // Move to normal position
        transition={{ duration: 2, ease: "easeOut" }} // Smooth animation
      />
      <motion.img
        src={eren}
        alt="Tanjiro"
        className="absolute bottom-0 left-110 w-24 md:w-32 rounded-lg shadow-lg"
        initial={{ y: 200, opacity: 0 }}  // Start below the screen
        animate={{ y: 0, opacity: 1 }}  // Move to normal position
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.img
        src={itachi}
        alt="Tanjiro"
        className="absolute bottom-0 right-40 w-24 md:w-32 rounded-lg shadow-lg"
        initial={{ y: 200, opacity: 0 }}  // Start below the screen
        animate={{ y: 0, opacity: 1 }}  // Move to normal position
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.img
        src={goku}
        alt="Tanjiro"
        className="absolute  right-120 w-24 md:w-32 rounded-lg shadow-lg"
        initial={{ y: 200, opacity: 0 }}  // Start below the screen
        animate={{ y: 0, opacity: 1 }}  // Move to normal position
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.img
        src={kakashi}
        alt="Tanjiro"
        className="absolute bottom-0 left-85 w-24 md:w-32 rounded-lg shadow-lg"
        initial={{ y: 200, opacity: 0 }}  // Start below the screen
        animate={{ y: 0, opacity: 1 }}  // Move to normal position
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.img
        src={mikasa}
        alt="Tanjiro"
        className="absolute bottom-100 left-0 w-24 md:w-32 rounded-lg shadow-lg"
        initial={{ x: -200, opacity: 0 }}  // Start below the screen
        animate={{ x: 0, opacity: 1 }}  // Move to normal position
        transition={{ duration: 2, ease: "easeOut" }} // Smooth animation
      />
           
            <motion.img
        src={spidy}
        alt="Goku"
        className="absolute top-0 left-20 w-24 md:w-32 rounded-lg shadow-lg"
        initial={{ y: -200, opacity: 0 }}  // Start below the screen
        animate={{ y: 0, opacity: 1 }}  // Move to normal position
        transition={{ duration: 2, ease: "easeOut" }}
        
      />
       <motion.img
        src={nezuko}
        alt="Goku"
        className="absolute bottom-0 left-0 w-24 md:w-32 rounded-lg shadow-lg"
        initial={{ x: -200, opacity: 0 }}  // Start below the screen
        animate={{ x: 0, opacity: 1 }}  // Move to normal position
        transition={{ duration: 2, ease: "easeOut" }} // Smooth animation
      />
            <motion.img
        src={tanjiro}
        alt="Goku"
        className="absolute bottom-0 left-30 w-24 md:w-32 rounded-lg shadow-lg"
        initial={{ y: 200, opacity: 0 }}  // Start below the screen
        animate={{ y: 0, opacity: 1 }}  // Move to normal position
        transition={{ duration: 2, ease: "easeOut" }}
      />
            <motion.img
        src={team7}
        alt="Goku"
        className="absolute bottom-0 left-175 w-28 md:w-32 rounded-lg shadow-lg size-36 "
        initial={{ y: 200, opacity: 0 }}  // Start below the screen
        animate={{ y: 0, opacity: 1 }}  // Move to normal position
        transition={{ duration: 2, ease: "easeOut" }}
        
      />
    </div>
  );
};

export default HeroSection;
