import 'server-only'

export interface Dictionary {
  welcome: string
  profile: string
  language: string
  description: string
}

const dictionaries: { [key: string]: () => Promise<Dictionary> } = {
  es: () => import('../dictionaries/es.json').then((m) => m.default as Dictionary),
  en: () => import('../dictionaries/en.json').then((m) => m.default as Dictionary),
}

export const getDictionary = async (lang: string): Promise<Dictionary> => {
  const loader = dictionaries[lang] || dictionaries['es']
  return loader()
}