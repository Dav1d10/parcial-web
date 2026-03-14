'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface LanguageSwitcherProps {
  lang: string
}

export default function LanguageSwitcher({ lang }: LanguageSwitcherProps) {
  const pathname = usePathname()
  
  const pathnameWithoutLang = pathname.replace(`/${lang}`, '') || ''

  return (
    <div className='flex gap-2 mt-1 text-sm'>
      <Link href={`/en${pathnameWithoutLang}`} className={lang === 'en' ? 'font-bold' : 'text-white-600'}>
        EN
      </Link>
      
      <Link href={`/es${pathnameWithoutLang}`} className={lang === 'es' ? 'font-bold' : 'text-white-600'}>
        ES
      </Link>
    </div>
  )
}