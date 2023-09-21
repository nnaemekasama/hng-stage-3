import React from "react"
import "./Footer.css"

const Footer = ({ item }) => {
  return (
    <div className="footer">
      <p className="footer-text">{item} albums and counting</p>
      <p className="">&copy; 2023 albumArtGallery by Nnaemeka Nnodim</p>
    </div>
  )
}

export default Footer
