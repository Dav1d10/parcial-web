import Image from 'next/image'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

interface HeaderProps {
    lang: string
}

 export default function Header({ lang }: HeaderProps) {
    return (
        <header className='w-full flex flex-col justify-center items-center py-4 bg-[#FDB608]'>
            <Link href={`/${lang}`}>
                <Image 
                src="https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"
                alt='Logo'
                width={200}
                height={200}
                />  
            </Link>
            <LanguageSwitcher lang={lang}></LanguageSwitcher>
        </header>
    )
}