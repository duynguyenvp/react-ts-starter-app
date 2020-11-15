import React, { useState } from "react"
import { TKeyValue } from "@Models/base.ts"

const auth: TKeyValue = {}

export const defaultAuthState = {
  setAuth: (auth: TKeyValue) => {},
  auth
}

export function useAuth(): [
  TKeyValue,
  React.Dispatch<React.SetStateAction<TKeyValue>>
] {
  const [auth, setAuth] = useState(() => defaultAuthState.auth)

  return [auth, setAuth]
}
