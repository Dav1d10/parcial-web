import type { Metadata } from 'next'
import '../globals.css'
import Header from '@/app/components/header'

export const metadata: Metadata = {
  title: 'App',
  description: 'App con internacionalización',
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
    const { lang } = await params

    return (
        <html lang={lang}>
            <body>
              <Header></Header>  
              <main>
                {children}
              </main>
              <footer></footer>
            </body>
        </html>
    )
}