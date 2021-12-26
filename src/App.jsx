import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/Navbar/Navbar'


import './styles/App.css'


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </div>
  )
}

export default App
