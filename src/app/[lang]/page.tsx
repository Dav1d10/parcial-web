import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
    const { lang } = await params
    const dict = await getDictionary(lang)

    return (
        <main className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-2xl mx-auto">
            
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {dict.welcome}
            </h1>

            <p className="text-gray-600 text-lg mb-8">
            {dict.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl shadow-md">
                <h2 className="text-xl font-semibold text-gray-700">{dict.profile}</h2>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-md">
                <h2 className="text-xl font-semibold text-gray-700">{dict.language}</h2>
            </div>
            </div>

            <div className="flex gap-4 mt-8">
            <Link href="/es" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Español
            </Link>
            <Link href="/en" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                English
            </Link>
            </div>

        </div>
        </main>
    )
}