import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage]); // ✅ Runs every time `currentPage` changes
    
    
    const handleSearch = () => {
      if(searchParams.trim() === ""){
        setCharacters([]);
        setError(null);
        return
      }
      setLoading(true);
        const getCharacters = async ()=>{
          
          try {
            const data = await fetchCharacters(searchParams, currentPage);
            if(data.length === 0){
              setError("NO CHARACTERS FOUND");
              setCharacters([])
            }
            else{
              setCharacters(data);
              setError(null)
            }
          } catch (error) {
            setError("Failed to fetch data")
            setCharacters([])
            console.log(error);
            
          }
          finally{
            setLoading(false)
          }
        }
        const timer = setTimeout(() => {
          getCharacters();
          
        },2000)
        
        return () => clearTimeout(timer)
        
      }
    
    
      return (
        <div className="min-h-screen overflow-hidden text-white flex flex-col items-center justify-center ">
          <h1 className="font-[Alaska] text-6xl my-16">KNOW KAWAI</h1>
          <input 
          className="border-4 border-white p-2 font-bold font-[Campus] text-amber-400" 
          type="text" value={searchParams} 
          onChange={(e) => setSearchParams(e.target.value)}/>
          <button
        onClick={handleSearch}
        className="mt-4 px-6 py-2 bg-amber-500 text-black font-bold rounded-lg"
      >
        Search
      </button>
        {characters.length === 0 && <HeroSection/>}
          {loading && <p>Searching........</p>}
          {error && <ErrorCard message={error} onRetry={() => setSearchParams(searchParams)} />}
    
        
          
            <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[60%]">
            {loading ? (
              [...Array(3)].map((_,index) => <SkeletonCard key={index}/>)
            ) : (
            
              characters.map((char) => (
                
              <div key={char.mal_id}>
                <Card  character={char} />
                <button 
            className="mt-2 p-2 bg-blue-500 text-white rounded" 
            onClick={() => navigate(`/character/${char.mal_id}`)}
          >
            View Details
          </button>
          </div>
            
            ))
          
            )}
            </div>
            
      {
        characters.length>1 &&
        <div className="flex justify-center items-center gap-4 m-4"> 
        <button 
        className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        Previous
      </button>
    
      <span className="text-white ">Page {currentPage}</span>
    
      <button 
        className="px-4 py-2 bg-gray-700 text-white rounded disabled:cursor-not-allowed cursor-pointer"
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
      }
    
            </div>
          
    
        </div>
      )
};

export default Home;
