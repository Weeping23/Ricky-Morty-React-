import React from 'react'
import photocart from "../assets/img/shopping-cart.png"
import { Link } from 'react-router-dom'
export function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>Rick & Morty</h1>
        <h1 className="header-wiky"> NFT</h1>
      </div>
      <ul className="header-menu">
        <Link to="/">Characters</Link>
        <Link to="episode">Episode</Link>
        <Link to="location">Location</Link>
        <Link to="cart"><img src={photocart} alt=""></img></Link>
      </ul>
    </header>
  )
}


