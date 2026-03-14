import Image from 'next/image'
import { getDictionary } from '@/lib/dictionaries'
import { Character } from '@/app/components/CharacterCard'

const BorderColorHouses: { [key: string]: string } = {
  Gryffindor: 'border-[#740001]',
  Slytherin: 'border-[#1A472A]',
  Ravenclaw: 'border-[#0E1A40]',
  Hufflepuff: 'border-[#FFD800]',
  NoHouse: 'border-[#D1D5DB]',
}

async function getCharacter(id: string): Promise<Character> {
  const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`)
  const data: Character[] = await res.json()
  return data[0]
}

export default async function CharacterDetail({
  params,
}: {
  params: Promise<{ lang: string; id: string }>
}) {
  const { lang, id } = await params
  const dict = await getDictionary(lang)
  const character = await getCharacter(id)

  const borderColor = BorderColorHouses[character.house] || BorderColorHouses['NoHouse']

  return (
    <main className='min-h-screen bg-[#e0e0e0] p-8'>
      <div className='max-w-2xl mx-auto'>

        <h1 className='text-3xl font-bold text-center text-[#FDB608] mb-6'>
          {character.name}
        </h1>

        <div className={`flex min-h-[420px] bg-[#e0e0e0] rounded-xl border-4 overflow-hidden ${borderColor}`}>

            <div className='flex-1 flex flex-col justify-center gap-3 p-6'>
                <p className='text-gray-900'><span className='font-bold'>{dict.house}:</span> {character.house}</p>
                <p className='text-gray-900'><span className='font-bold'>{dict.gender}:</span> {character.gender}</p>
                <p className='text-gray-900'><span className='font-bold'>{dict.wand}:</span> {character.wand.core}</p>
                <p className='text-gray-900'><span className='font-bold'>{dict.wood}:</span> {character.wand.wood}</p>
                <p className='text-gray-900'><span className='font-bold'>{dict.length}:</span> {character.wand.length}</p>
            </div>

            <div className='relative w-1/2 self-stretch'>
                {character.image ? (
                <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />
                ) : (
                <div className='w-full h-full bg-gray-300 flex items-center justify-center'>
                    <p className='text-gray-500'>No image</p>
                </div>
                )}
            </div>

        </div>
      </div>
    </main>
  )
}