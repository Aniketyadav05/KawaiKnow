import { useState, useEffect } from "react";


import Card from "../components/Card";

import { fetchCharacters,Character } from "../services/animeService"

import SkeletonCard from "../components/SkeletonCard";
import ErrorCard from "../components/ErrorCard";
import HeroSection from "../components/HeroSection";


const Home = () => {
    const [characters, setCharacters] = useState<Character[]>([])
    const [error, setError] = useState<string | null>(null);
    const [searchParams, setSearchParams] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false);
  
    useEffect(() => {
      if (characters.length > 0) {
          document.body.style.overflow = "auto"; // Enable scrolling when characters are loaded
      } else {
          document.body.style.overflow = "hidden"; // Disable scrolling when on the home page
      }
      return () => {
          document.body.style.overflow = "auto"; // Reset on unmount
      };
  }, [characters]);
    
  const handleSearch = () => {
    if (searchParams.trim() === "") {
      setCharacters([]);
      setError(null);

    }
  
    setLoading(true);
    

  
    const getCharacters = async () => {
      try {
        const data = await fetchCharacters(searchParams);
        if (data.length === 0) {
          setError("NO CHARACTERS FOUND");
          setCharacters([]);
        } else {
          setCharacters(data);
          setError(null);
        }
      } catch (error) {
        setError("Failed to fetch data");
        setCharacters([]);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    
    const timer = setTimeout(() => {
      getCharacters();
    }, 1000);
  
    return () => clearTimeout(timer);
  };
  
  
    
    
      return (
        <div className="overflow-hidden  flex flex-col items-center justify-center ">
          <h1 className="font-[Alaska] text-6xl my-16">KNOW KAWAI</h1>
          <input 
          className="border-4 border-[#FFC107] p-2 font-bold font-[Campus] " 
          type="text" value={searchParams} 
          onChange={(e) => setSearchParams(e.target.value)}/>
          <button
        onClick={handleSearch}
        className="mt-4 px-6 py-2 bg-amber-500 text-black font-bold rounded-lg hover:brightness-75  cursor-pointer "
      >
        Search
      </button>
        {characters.length === 0 &&!loading && <HeroSection/>}
          { loading && <p>Searching........</p>}
          {error && <ErrorCard message={error} onRetry={() => setSearchParams(searchParams)} />}
          
            <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[60%]">
            {loading ? (
              [...Array(3)].map((_,index) => <SkeletonCard key={index}/>)
            ) : (
              characters.map((char) => (  
                <div key={char.mal_id}>
                <Card  character={char} />
          </div>
            
            ))
          
            )}
            </div>
            
          
    
            </div>
          
    
        </div>
      )
};

export default Home;
