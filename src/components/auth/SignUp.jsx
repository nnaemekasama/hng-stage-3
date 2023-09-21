import React, { useState } from "react"
import { auth } from "../../firebase"
import "./AuthStyles.css"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import ErrorMessage from "./ErrorMessage"

const SignUp = ({ authState, toggleState }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        navigate("/users")
      })
      .catch((error) => {
        console.log(error)
        setError(error.code)
      })
  }

  return (
    <div className="sign-container">
      <form onSubmit={handleSignUp} className="flexColStart form-container">
        <h1>Create an Account</h1>
        {error && <ErrorMessage errorCode={error} />}
        <label htmlFor="Email">Email</label>
        <input
          id="Email"
          type="text"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="Password">Password</label>
        <input
          id="Password"
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="auth-check">
          {authState ? "Don't have an account? " : "Already have an account? "}
          <a className="" onClick={toggleState}>
            {authState ? "Sign Up" : "Login"}
          </a>
        </p>
        <button className="button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUp
