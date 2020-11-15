import React from "react"
import ReactDOM from "react-dom"
import "@/assets/scss/index.scss"
import App from "./App/App"
import * as serviceWorker from "./serviceWorker"
import { AppProvider } from "@Contexts/AppContext"

const MOUNT_NODE = document.getElementById("root") as HTMLElement

interface Props {
  Component: typeof App
}

const ConnectedApp = ({ Component }: Props) => (
  <React.StrictMode>
    <AppProvider>
      <Component />
    </AppProvider>
  </React.StrictMode>
)

const render = (Component: typeof App) => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE)
}

if (module.hot) {
  // Hot reloadable translation json files and app
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(["./App/App"], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    // @ts-ignore
    const App = require("./App/App").App
    render(App)
  })
}
render(App)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
