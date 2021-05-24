import { App } from './app'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

console.log('client.jsx')

ReactDOM.render(<BrowserRouter><App isServer={false} /></BrowserRouter>, document.getElementById('app'))

if (import.meta.hot) {
  console.log("its hot!")
  import.meta.hot.accept();
}