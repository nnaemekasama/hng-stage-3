import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import AuthPage from "./page/AuthPage"
import UserPage from "./page/UserPage"
import AuthDetails from "./components/Header/Header"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <div className="paddings innerWidth app">
      <BrowserRouter>
        <AuthDetails />
        <Routes>
          <Route path="/" element={<AuthPage />}></Route>
          <Route path="/users" element={<UserPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
