import { Outlet } from "react-router-dom";

function NavBar() {
  return ( 
    <div className="nav-bar">
      <h1>This is the NavBar</h1>
      <Outlet/>
    </div>
   );
}

export default NavBar;