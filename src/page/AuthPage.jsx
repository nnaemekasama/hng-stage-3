import React, { useState } from "react"
import SignUp from "../components/auth/SignUp"
import SignIn from "../components/auth/SignIn"
import AuthDetails from "../components/Header/Header"

const AuthPage = () => {
  const [hasAccount, setHasAccount] = useState(true)

  const toggleForm = () => {
    setHasAccount(!hasAccount)
  }

  return (
    <section className="authpage-section  paddings innerWidth">
      <div className="page-container ">
        <div>
          {hasAccount ? (
            <p className="text">Welcome Back!</p>
          ) : (
            <p className="text">Sign Up</p>
          )}
        </div>
        <div>
          {hasAccount ? (
            <SignIn authState={hasAccount} toggleState={toggleForm} />
          ) : (
            <SignUp authState={hasAccount} toggleState={toggleForm} />
          )}
        </div>
      </div>
    </section>
  )
}

export default AuthPage
