import CharacterList from '../components/CharacterList'
import { getDictionary } from '@/lib/dictionaries'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <main className='min-h-screen bg-[#e0e0e0] p-8'>
      <div className='max-w-5xl mx-auto'>
        <h1 className='text-3xl font-bold text-center text-[#FDB608] mb-2'>
          {dict.welcome}
        </h1>
        <p className='text-center text-gray-600 mb-8'>
          {dict.description}
        </p>
        <CharacterList lang={lang} />
      </div>
    </main>
  )
}