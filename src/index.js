import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

//style sheet
import './functionBased/components/App.css'

//component file
import { default as TodoContainer } from './functionBased/components/TodoContainer'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
