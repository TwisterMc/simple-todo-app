import React from "react"

const Header = () => {
    const headerStyle = {
        padding: "20px 0",
        lineHeight: "2em",
    }
  return (
      <header style={headerStyle}>
        <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>Simple Todo App</h1>
        <p style={{ fontSize: "19px" }}>Please add to-dos item(s) through the input field</p>
          <p>tutorial  via <a href="https://ibaslogic.com/react-form-handling/">ibaslogic</a></p>
    </header>
  )
}

export default Header
