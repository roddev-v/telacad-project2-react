import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { app } from "../firebase-init";
import css from "./Header.module.css";
import { getAuth, GoogleAuthProvider,signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { Component } from "react";
import CartIcon from "./CartIcon";

class Header extends Component {

  auth = getAuth(app);

  state = {
    user: null,
    loading: false
  }

  componentDidMount() {
    this.setState({loading: true})
    onAuthStateChanged(this.auth, (data) => {
      this.setState({user: data, loading: false});
    })
  }

  signIn = () => {
    signInWithPopup(this.auth, new GoogleAuthProvider()).then((data) => {
      this.setState({user: data.user});
    })
  }

  logOut = () => {
    signOut(this.auth).then(() => {
      this.setState({user: null});
    })
  }

  render() {
    return (
      <div className="border-bottom p-3 mb-5">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link to="/">
            <img className={css.logo} src={Logo}></img>
          </Link>
          {this.state.user && this.state.user.displayName}
          <div
            className={css["actions-wrapper"] + " d-flex justify-content-between"}
          >
            {/* <Link to="/" className="">
            Home
          </Link>
          <Link to="/about" className="">
            About
          </Link> */}
            {this.state.loading && 'Loading...'}
            {
              this.state.user ?
                <button className="btn btn-link" onClick={() => this.logOut()}>
                  Sign out
                </button>
                :
                <button className="btn btn-link" onClick={() => this.signIn()}>
                  Sign in
                </button>
            }
            <CartIcon/>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
