import Image from 'next/image'

 export default function Header() {
    return (
        <div className='bg-blue-500 place-content-center'>
        <Image
        src="https://www.clipartmax.com/png/full/71-713336_harry-potter-logo-harry-potter-logo-png.png"
        alt='Logo'
        width={200}
        height={200}
        />
        </div>
    )
}