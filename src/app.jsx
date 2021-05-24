import React, { useState } from 'react'
import { Switch, Route } from 'react-router'
console.log("App.jsx")

export const App = ({isServer, ...props}) => {
  const [state, setState ] = useState(0)
  return <div>
    <button onClick={() => setState(s => s+1)}>count to {state}</button>
    <Switch>
    <Route path="/other">
      The other page! is here wowzzsssssssssss
    </Route>
    <Route path="/">
      Homes
    </Route>
  </Switch>
  </div>
}

export default App