import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import AuthPage from "./page/AuthPage"
import UserPage from "./page/UserPage"

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage />}></Route>
          <Route path="/users" element={<UserPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
