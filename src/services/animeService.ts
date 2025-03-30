export interface Character {
    mal_id: number;
    name: string;
    images: {
        jpg: {
            image_url: string;
        }
    }
    about: string;
}

export const fetchCharacters = async(query: string, page : number=1): Promise<Character[]> => {
    try {
        const response = await fetch(`https://api.jikan.moe/v4/characters?q=${query}&page=${page}`)
        if(!response.ok){
            throw new Error("Failed to fetch characters")
        }

        const result = await response.json();
        return result.data || [];
    
    } catch (error) {
        console.log("Error fetching data", error);
        return [];
        
    }
}
export const fetchCharacterDetails = async (id: string) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/characters/${id}`);
      const data = await response.json();
      return data.data; 
    } catch (error) {
      console.error("Failed to fetch character details:", error);
      return null;
    }
  };
  