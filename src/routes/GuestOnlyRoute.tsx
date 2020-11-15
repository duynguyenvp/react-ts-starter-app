import React, { useContext } from "react"
import { Route, useHistory } from "react-router-dom"
import { AppContext } from "@Contexts/AppContext"

export const GuestOnlyRoute = ({ component: Component, ...rest }: any) => {
  const { auth } = useContext(AppContext)

  const history = useHistory()
  if (auth && auth.token) {
    history.goBack()
  }
  return <Route {...rest} render={props => <Component {...props} />} />
}
