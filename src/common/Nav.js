import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
      <div>
        <Link to="/">
          <button className="btn">Home</button>
        </Link>
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
      </div>
    )
  }