import { Character } from "../services/animeService"
import { useNavigate } from "react-router-dom";
interface CardProps {
    character : Character
}

const Card: React.FC<CardProps> =({character})=> {
  const navigate = useNavigate();
  return (
    <div className=" h-[550px] flex flex-col items-center justify-center backdrop-blur-lg bg-white/10 border-b-2 border-white/20 shadow-md p-5 rounded-2xl m-4">
      <h2 className="mb-4 font-[Fresh]  text-xl tracking-wider">{character.name}</h2>
      <img src={character.images.jpg.image_url} alt={character.name} loading="lazy" />
      <button 
            className="mt-6 p-2 bg-amber-500 font-extrabold font-[Fresh] text-amber-50 rounded cursor-pointer hover:brightness-75 " 
            onClick={() => navigate(`/character/${character.mal_id}`)}
          >
            View Details
          </button>
    </div>
  )
}

export default Card