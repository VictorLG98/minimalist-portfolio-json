import cvEs from "../../cv.json"
import cvEn from "../../cv_english.json"

export type Lang = "es" | "en"

const CVS = {
  es: cvEs,
  en: cvEn,
} as const

export type CV = typeof cvEs

export const getCV = (lang: Lang): CV => CVS[lang]

