export interface Character {
    mal_id: number;
    name: string;
    images: {
        jpg: {
            image_url: string;
        }
    }
}

export const fetchCharacters = async(query: string): Promise<Character[]> => {
    try {
        const response = await fetch(`https://api.jikan.moe/v4/characters?q=${query}`)
        if(!response.ok){
            throw new Error("Failed to fetch characters")
        }

        const result = await response.json();
        return result.data;
    
    } catch (error) {
        console.log("Error fetching data", error);
        return [];
        
    }
}