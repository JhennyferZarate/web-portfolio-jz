import es from './es.json';
import en from './en.json';

const translations: Record<string, Record<string, string>> = {
  es,
  en
};

let currentLang = localStorage.getItem('lang') || 'en';

export function setLanguage(lang: string) {
  if (translations[lang]) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
  }
}

export function getLanguage() {
  return currentLang;
}

export function t(key: string): string {
  return translations[currentLang]?.[key] || key;
}
