import React from 'react'
import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={scss.Footer}>
        <div className="container">
            <div className={scss.content}>
                <p>Powered by <span className="hover-target">ADEV</span></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer