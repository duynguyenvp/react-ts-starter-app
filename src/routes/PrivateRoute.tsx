import React, { useContext } from "react"
import { Redirect, Route } from "react-router-dom"

import { AppContext } from "@Contexts/AppContext"

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { auth } = useContext(AppContext)
  return (
    <Route
      {...rest}
      render={props =>
        auth && auth.token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}
