import type { CV } from "../cv"

import cvEs from "../../cv.json"
import cvEn from "../../cv_english.json"

export type Lang = "es" | "en"

const CVS: Record<Lang, CV> = {
  es: cvEs as CV,
  en: cvEn as CV,
}

export const getCV = (lang: Lang): CV => CVS[lang]

