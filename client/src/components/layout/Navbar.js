import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    console.log('Does Nothnig...')
    // this.props.logoutUser();
  };
  render() {
    const logoutStyle = {
      color: "black",
      letterSpacing: '2px',
    };
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <nav>
            <div className="nav-wrapper white">
              <Link
                to="/"
                style={{
                  fontFamily: "monospace"
                }}
                className="col s5 brand-logo center black-text"
              >
                ADMIN
            </Link>
              <ul id="nav-mobile" class="right">
                <li><a href="#" style={logoutStyle} onClick={this.onLogoutClick}>Logout</a></li>
              </ul>
            </div>
          </nav>
        </nav>
      </div>
    );
  }
}

export default Navbar;