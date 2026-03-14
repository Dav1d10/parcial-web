import CharacterCard, { Character } from './CharacterCard'

async function getCharacters(): Promise<Character[]> {
  const res = await fetch('https://hp-api.onrender.com/api/characters')
  const data: Character[] = await res.json()
  return data.slice(0, 12)
}

interface CharacterListProps {
  lang: string
}

export default async function CharacterList({ lang }: CharacterListProps) {
  const characters = await getCharacters()

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-8'>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} lang={lang} />
      ))}
    </div>
  )
}