import { Link, NavLink } from "react-router-dom";
import css from "./AppBar.module.css";
import logo from "../../img/Logo.svg";

const AppBar = () => {
  return (
    <header className={css.header}>
      <Link to={"/"} className={css.logo}>
        <img src={logo} alt="logo image"></img>
      </Link>

      <nav className={css.headerNav}>
        <NavLink to={"/"} className={css.navLink}>
          Home
        </NavLink>
        <NavLink to={"/catalog"} className={css.navLink}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
