import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import css from "./Header.module.css";
import CartIcon from "./CartIcon";
import { login, logout } from "../redux/actions/user.actions";
import { connect } from "react-redux";

function Header({user, signIn, signOut}) {
  return (
    <div className="border-bottom p-3 mb-5">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link to="/">
          <img className={css.logo} src={Logo}></img>
        </Link>
        {user && user.displayName}
        <div
          className={css["actions-wrapper"] + " d-flex justify-content-between"}
        >
          {/* <Link to="/" className="">
          Home
        </Link>
        <Link to="/about" className="">
          About
        </Link> */}
          {
            user ?
              <button className="btn btn-link" onClick={() => signOut()}>
                Sign out
              </button>
              :
              <button className="btn btn-link" onClick={() => signIn()}>
                Sign in
              </button>
          }
          <CartIcon/>
        </div>
      </div>
    </div>
  ); 
}

function mapPropsToState(state) {
  return {
    user: state.userState.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: () => dispatch(login()),
    signOut: () => dispatch(logout())
  }
}

const mapTo = connect(mapPropsToState, mapDispatchToProps);

export default mapTo(Header);
