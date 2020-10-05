import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h1>Where's The Frickin Train</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/union-square">Union Square</Link>
        <Link to="/times-square">Times Square</Link>
        <Link to="/atlantic-avenue">Atlantic Avenue</Link>
        <Link to="/fulton-street">Fulton Street</Link>
      </nav>
    </header>
  )
}

export default Navbar;
