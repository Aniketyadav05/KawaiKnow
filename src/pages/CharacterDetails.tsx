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

  if (!character) return <p>Loading...</p>;

  return (
    <div className="p-10 ">
      <button className="p-2 bg-gray-700 text-white rounded" onClick={() => navigate(-1)}>
        Back
      </button>
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl my-4 text-white">{character.name}</h1>
      <img src={character.images.jpg.image_url} alt={character.name} />
      <p className="mt-4 text-white">{character.about || "no data available"}</p>
      </div>
    </div>
  );
};

export default CharacterDetails;
