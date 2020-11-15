import React, { Children } from "react"
import { useLocale, defaultLocaleState } from "./localeContext"
import { useAuth, defaultAuthState } from "./authContext"
const defaultState = {
  ...defaultLocaleState,
  ...defaultAuthState
}

const AppContext = React.createContext(defaultState)

function AppProvider(props: any) {
  const [locale, setLocale] = useLocale()
  const [auth, setAuth] = useAuth()

  return (
    <AppContext.Provider
      value={{
        locale,
        setLocale,
        auth,
        setAuth
      }}
    >
      {Children.toArray(props.children)}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
