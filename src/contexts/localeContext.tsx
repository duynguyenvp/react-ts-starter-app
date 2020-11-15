import React, { useState } from "react"
import { LOCALES } from "@Constants/enum"

export const defaultLocaleState = {
  locale: LOCALES.en_US,
  setLocale: (locale: string) => {}
}

export function useLocale(): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] {
  const [locale, setLocale] = useState(() => defaultLocaleState.locale)

  return [locale, setLocale]
}
