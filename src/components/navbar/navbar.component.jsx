import React from "react";
import "./navbar.styles.scss";

import { useNavigate, NavLink } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon.compontn.jsx";
import { useAuthStore } from "../../store/modules/appState";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  return (
    <nav>
      <div className="nav-container">
        <div onClick={() => navigate("/")} className="brand">
          COMFY
        </div>

        <div className="links">
          <ul>
            <li>
              <NavLink to="/products">shop</NavLink>
            </li>

            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              {user ? <LogoutBtn/> : <NavLink to="/sign-in">sign in</NavLink>}
            </li>
            <li>
              <NavLink to="/cart">
                <CartIcon />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const LogoutBtn = () => {
  const setUser = useAuthStore(state=>state.setUser)
  return (
    <button className="btn" onClick={()=>setUser(null)}>
      Logout
    </button>
  )
}

export default Navbar;
