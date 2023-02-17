// 1) Import the react and react dom libraries

import React from 'react'
import ReactDom from 'react-dom/client'

const el = document.getElementById('root')

const root = ReactDom.createRoot(el)

function App(){
  const data = new Date();
  const time = data.toLocaleDateString()
  return <h1>{time}</h1>;
}

root.render(<App/>)