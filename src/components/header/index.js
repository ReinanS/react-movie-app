import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = ()=> {
    return <header>
            <Link className="logo" to="/">Movies</Link>
            <Link className="favorites" to="/favourites">Favourites</Link>
        </header>
}

export default Header;