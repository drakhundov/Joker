import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          {/* <li className="nav-elem">
            <NavLink activeClassName="active" to="/">
              Ana sayfa
            </NavLink>
          </li> */}
          <li className="nav-elem">
            <NavLink activeClassName="active" to="/joke">
              Şakalar
            </NavLink>
          </li>
          <li className="nav-elem">
            <NavLink activeClassName="active" to="/about">
              Kodu Yazan Kim?
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
