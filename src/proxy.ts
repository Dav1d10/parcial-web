import { NextRequest, NextResponse } from 'next/server'


const locales = ['es', 'en'] // Idiomas 
const defaultLocale = 'es'


function getLocale(request: NextRequest): string { // Lee el header Accept-Language del browser
 
  const acceptLanguage = request.headers.get('accept-language')

  if (acceptLanguage) {
    const browserLang = acceptLanguage.split(',')[0].split('-')[0] // Toma el primer idioma del header y lo compara con los soportados (locales)
    if (locales.includes(browserLang)) {
      return browserLang
    }
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {

  const pathname = request.nextUrl.pathname

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}` // Verifico si la URL ya tiene un idioma válido
  )

  if (pathnameHasLocale) return NextResponse.next()
  const locale = getLocale(request)
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url)) // Si no tiene idioma, detecta y redirige
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|api).*)'] // El middleware corre en todas las rutas excepto estas
}