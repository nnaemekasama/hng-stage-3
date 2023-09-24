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
      {authUser ? (
        <>
          <p className="brand">CoverGalleria</p>

          <button className="button" onClick={userSignOut}>
            Sign Out
          </button>
        </>
      ) : (
        <>
          <p className="brand">CoverGalleria</p>

          <button className="button">Sign In</button>
        </>
      )}
    </div>
  )
}

export default AuthDetails
