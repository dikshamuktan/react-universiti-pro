import React  from "react";
import {Link} from "react-router-dom";

const Navbar=()=> {


    return(
        <nav>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/fovourites">Favourites</Link>
            </ul>
        </nav>

    )
}

export default Navbar;