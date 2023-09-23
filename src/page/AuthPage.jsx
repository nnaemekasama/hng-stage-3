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
      {hasAccount ? (
        <SignIn authState={hasAccount} toggleState={toggleForm} />
      ) : (
        <SignUp authState={hasAccount} toggleState={toggleForm} />
      )}
    </section>
  )
}

export default AuthPage
