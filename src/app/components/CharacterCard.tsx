import Image from 'next/image'
import Link from 'next/link'

interface Wand {
  wood: string
  core: string
  length: number
}

export interface Character {
  id: string
  name: string
  image: string
  house: string
  gender: string
  wand: Wand
}

const BgColorHouses: { [key: string]: string } = {
  Gryffindor: 'bg-[#740001]',
  Slytherin: 'bg-[#1A472A]',
  Ravenclaw: 'bg-[#0E1A40]',
  Hufflepuff: 'bg-[#FFD800]',
  NoHouse: 'bg-[#D1D5DB]',
}

interface CharacterCardProps {
  character: Character
  lang: string
}

export default function CharacterCard({ character, lang }: CharacterCardProps) {
  const bgColor = BgColorHouses[character.house] || BgColorHouses['NoHouse']

  return (
    <Link href={`/${lang}/character/${character.id}`}>
      <div className={`${bgColor} rounded-xl overflow-hidden shadow-md cursor-pointer`}>
        <p className='text-white text-center font-bold py-2 text-sm'>{character.name}</p>
        <div className='relative w-full h-96'>
          {character.image ? (
            <Image
              src={character.image}
              alt={character.name}
              fill
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <div className='w-full h-full bg-gray-300 flex items-center justify-center'>
              <p className='text-gray-500'>No image</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}