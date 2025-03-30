import { Character } from "../services/animeService"

interface CardProps {
    character : Character
}

const Card: React.FC<CardProps> =({character})=> {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 p-5 rounded-lg m-4">
      <h2 className="mb-4 font-[Fresh] text-blue-600 text-xl tracking-wider">{character.name}</h2>
      <img src={character.images.jpg.image_url} alt={character.name} loading="lazy" />
    </div>
  )
}

export default Card