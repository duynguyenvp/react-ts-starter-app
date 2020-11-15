import React, { Suspense } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.scss"
import "../assets/scss/index.scss"

import { GuestOnlyRoute } from "@Routes/GuestOnlyRoute"
import { PrivateRoute } from "@Routes/PrivateRoute"
import Loading from "@Components/Loading/Loading"

import Home from "@Pages/Home/Loadable"

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <GuestOnlyRoute exact path="/guest" component={Home} />
            <PrivateRoute exact path="/private" component={Home} />
          </Switch>
        </div>
      </Suspense>
    </Router>
  )
}

export default App
