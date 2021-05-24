import { App } from './app'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import ReactDOMServer from 'react-dom/server'

console.log('server-app.jsx')

const ServerApp = ({url}) => {
  console.log("rendering ServerApp")
  return <div id="app"><StaticRouter location={url}>
      <App isServer={true} path={url}/>
    </StaticRouter></div>
}

export default {ServerApp, React, ReactDOMServer}
