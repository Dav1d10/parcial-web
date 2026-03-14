import { getDictionary } from '@/lib/dictionaries'

interface FooterProps {
  lang: string
}

export default async function Footer({ lang }: FooterProps) {
  const dict = await getDictionary(lang)

  return (
    <footer className='w-full flex justify-between items-center px-8 py-4 bg-[#BBCCBB]'>
        <p className='text-sm text-gray-800 font-bold'>{dict.rights}</p>
        <p className='text-sm text-gray-800 font-bold'>{dict.course}</p>
    </footer>
  )
}