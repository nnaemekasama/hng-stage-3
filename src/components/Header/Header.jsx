import React, { useEffect, useState } from "react"
import { auth } from "../../firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import "./Header.css"

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })

    return () => {
      listen
    }
  }, [])

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="auth-header">
      <h2>CoverArt Pro</h2>
      {authUser ? (
        <>
          <p>
            Hey{" "}
            <span className="user-icon">{`${authUser.email
              .slice(0, 4)
              .toUpperCase()}`}</span>
          </p>

          <button className="button" onClick={userSignOut}>
            Log Out
          </button>
        </>
      ) : (
        <button className="button">Log in</button>
      )}
    </div>
  )
}

export default AuthDetails
