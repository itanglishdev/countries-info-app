import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function NavBar() {
  return ( 
    <Fragment className="nav-bar">
      <p>This is the NavBar</p>
      <Outlet/>
    </Fragment>
   );
}

export default NavBar;