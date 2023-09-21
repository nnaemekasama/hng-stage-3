import React from "react"
import "./AuthStyles.css"

const ErrorMessage = ({ errorCode }) => {
  const customErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/user-not-found":
        return "User not found. Please sign up to create an account."
      case "auth/wrong-password":
        return "Incorrect password. Please try again."
      // Add more cases for other error codes as needed
      default:
        return "Invalid Email or Password."
    }
  }

  const errorMessage = customErrorMessage(errorCode)
  return <p className="error-text">{errorMessage}</p>
}

export default ErrorMessage
