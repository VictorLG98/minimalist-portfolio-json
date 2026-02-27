import cvEs from "../../cv.json"
import cvEn from "../../cv_english.json"

export type Lang = "es" | "en"

const CVS = {
  es: cvEs,
  en: cvEn,
} as const

export type CVEs = typeof cvEs
export type CVEn = typeof cvEn

export function getCV(lang: "es"): CVEs
export function getCV(lang: "en"): CVEn
export function getCV(lang: Lang) {
  return CVS[lang]
}

