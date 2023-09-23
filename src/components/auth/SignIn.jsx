import React, { useState } from "react"
import { auth } from "../../firebase"
import "./AuthStyles.css"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import ErrorMessage from "./ErrorMessage"

const SignIn = ({ authState, toggleState }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
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
    <form onSubmit={handleSignIn} className=" form-container">
      <div>
        <h1>Sign In</h1>
        <p>Enter your email below to sign in to your account</p>
      </div>
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
        Log In
      </button>
    </form>
  )
}

export default SignIn
