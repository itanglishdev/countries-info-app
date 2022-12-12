import { Outlet } from "react-router-dom";

function NavBar() {
  return ( 
    <div>
      <p>This is the NavBar</p>
      <Outlet/>
    </div>
   );
}

export default NavBar;