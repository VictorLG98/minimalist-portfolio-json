import cvEs from "../../cv.json"
import cvEn from "../../cv_english.json"

export type Lang = "es" | "en"

const CVS = {
  es: cvEs,
  en: cvEn,
} as const

export type CVEs = typeof cvEs
export type CVEn = typeof cvEn
export type CV = CVEs | CVEn

export const getCV = (lang: Lang): CV => CVS[lang]

