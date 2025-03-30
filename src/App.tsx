import { useEffect, useState } from "react"
import { fetchCharacters,Character } from "./services/animeService"


const App = () => {
const [characters, setCharacters] = useState<Character[]>([])
const [error, setError] = useState<string | null>(null);
const [searchParams, setSearchParams] = useState<string>("")
const [loading, setLoading] = useState<boolean>(false);
console.log(searchParams);

useEffect(() => {
  if(searchParams.trim() === ""){
    setCharacters([]);
    setError(null);
    return
  }
    const getCharacters = async ()=>{
      setLoading(true);
      try {
        const data = await fetchCharacters(searchParams);
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
    
  }, [searchParams])


  return (
    <div className="h-[100vh] bg-black text-white">
      <h1>Anime Characters</h1>
      <input 
      className="border-4 border-white" 
      type="text" value={searchParams} 
      onChange={(e) => setSearchParams(e.target.value)}/>
      {loading && <p>Searching........</p>}
      {error && <p>{error}</p>}

      {!loading && characters.length > 0 && (
        characters.map((char) => (
          <div key={char.mal_id}>
            <h1>{char.name}</h1>
            <img src={char.images.jpg.image_url} alt="" />
          </div>
        ))
      ) }

    </div>
  )
}

export default App