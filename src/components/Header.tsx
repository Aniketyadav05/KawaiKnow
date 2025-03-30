import { Link } from "react-router-dom";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

const Header = () => {
  const randomId = Math.floor(Math.random() * (30000 - 1000 + 1)) + 1000;
    return (
      <header className="font-[Alaska] fixed top-0 self-center w-[70%] backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-md rounded-4xl mt-4 z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/">
          <h1 className="text-xl tracking-widest ">KawaiKnow</h1>
          </Link>
          <nav className="space-x-6 flex items-center  ">
            <Link to={`/character/${randomId}`} className="text-l tracking-widest hover:text-amber-400">Random Character</Link>
            <Link to="" className=" hover:text-amber-400"><FaXTwitter/></Link>
            <Link to="/" className=" hover:text-amber-400"><FaGithub/></Link>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  