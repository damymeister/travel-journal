import React from "react"
export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
      <footer>
        <h1>DamyMeister© {year}</h1>
      </footer>
    )
}