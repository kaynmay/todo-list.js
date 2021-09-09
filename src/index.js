import React from 'react'
import ReactDOM from 'react-dom'

//style sheet
import './App.css'

//component file
import { default as TodoContainer } from './components/TodoContainer'

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root')
)
