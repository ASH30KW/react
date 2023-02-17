// 1) Import the react and react dom libraries
import React from 'react'
import ReactDom from 'react-dom/client'
const el = document.getElementById('root')
const root = ReactDom.createRoot(el)
function App(){
  const name = 'Jinxin Ai'
  const inputType = "number"
  const minValue = 5;
  //return <h1>{new Date().toLocaleDateString()}</h1>;
  // return <input type={inputType} min={minValue}></input>
  return <textarea autoFocus={true}/>
}
root.render(<App/>)