"use client"

interface Data {
    name: string
    image: string
}

interface ApiResponse {
    data: Data
}

interface Character {
    name: string
    image: string
}

interface characterCardProp {
    character: Character
}




export default function Home() {

    async function fetchCharacter(character: string): Promise< Character | null> {
    try {
      const res = await fetch(
         `https://hp-api.onrender.com/api/${character}$`
      )
      const data: ApiResponse = await res.json()
            
      return {
        
      }
    } catch (err) {
       console.error(`Error fetching ${character}:`, err)
       return null
    }
  }
}



