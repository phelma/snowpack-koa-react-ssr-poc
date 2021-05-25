import React, { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
console.log("App.jsx")

export const App = ({isServer, ...props}) => {
  const [state, setState] = useState(0)
  return <div>
    <button onClick={() => setState(s => s+1)}>count to {state}</button>
    <Switch>
    <Route path="/other">
      The other page!
      <Link to="/">Go Home!</Link>
    </Route>
    <Route path="/">
      Homes
      <Link to="/other">Go to other page</Link>
    </Route>
  </Switch>
  </div>
}

export default App