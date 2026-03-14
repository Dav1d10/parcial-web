import type { Metadata } from 'next'
import '../globals.css'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'

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
              <Header lang={lang}></Header>  
              <main>
                {children}
              </main>
              <Footer lang={lang}></Footer>
            </body>
        </html>
    )
}