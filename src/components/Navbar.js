import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            thanks for coming.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#home")}>Hi, I'm 주인장</button>
            <button onClick={() => scrollTo("#contents")}>contents</button>
            <button onClick={() => scrollTo("#greetings")}>greetings</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
