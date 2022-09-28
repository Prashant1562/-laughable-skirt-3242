import React from "react"
import Header from "./components/header/Header"
import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"


const App = () => {
  return (
    <>
      <Router>
        <Header />
      </Router>
    </>
  )
}
                                     

export default App
