import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import css from "./Header.module.css";

function Header() {
  return (
    <div className="border-bottom p-3 mb-5">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link to="/">
          <img className={css.logo} src={Logo}></img>
        </Link>
        <div
          className={css["actions-wrapper"] + " d-flex justify-content-between"}
        >
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/about" className="">
            About
          </Link>
          <Link to="/login" className="">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
