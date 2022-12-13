import { Outlet } from "react-router-dom";

function NavBar() {
  return ( 
    <div className="nav-bar">
      <h1>Get info from a nation</h1>
      <Outlet/>
    </div>
   );
}

export default NavBar;