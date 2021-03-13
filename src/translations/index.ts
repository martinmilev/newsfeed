import en from './locales/en'
import bg from './locales/bg'
import { Translations } from '../models/translations'

const languages = { en, bg }

export const fetchTranslations: (language: string) => Translations = (language) => languages[language]

