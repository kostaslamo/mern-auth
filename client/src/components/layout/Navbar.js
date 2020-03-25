import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
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
                to="/Dashboard"
                style={{
                  fontFamily: "monospace"
                }}
                className="col s5 brand-logo center black-text"
              >
                ADMIN
              </Link>
              {this.props.auth.isAuthenticated ? <ul id="nav-mobile" className="right">
                <li><a href="#!" style={logoutStyle} onClick={this.onLogoutClick}>Logout</a></li>
              </ul> : null}
            </div>
          </nav>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);