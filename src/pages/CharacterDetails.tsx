import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCharacterDetails, Character } from "../services/animeService";

const CharacterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const getCharacter = async () => {
      if (id) {
        const data = await fetchCharacterDetails(id);
        setCharacter(data);
      }
    };
    getCharacter();
  }, [id]);

  if (!character) return <div className="flex items-center justify-center mt-[20%] text-6xl font-extrabold">
    <p>Loading...</p>
  </div>;

  return (
    <div className="p-10 ">
      <button className="p-2 bg-gray-700  rounded" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl my-4 font-[Alaska] tracking-wider">{character.name}</h1>
      <div className=" backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-md shadow-amber-500 p-5">
      <img  src={character.images.jpg.image_url} alt={character.name} />
      </div>
      <p className="mt-4 font-bold text-xl mx-4">{character.about || "no data available"}</p>
      </div>
    </div>
  );
};

export default CharacterDetails;
