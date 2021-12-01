import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Login from "./login";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              FurnitureStore
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/furniture">
                    Furniture
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
                 <li className="nav-item">
                  <NavLink className="nav-link" to="/report">
                    Report
                  </NavLink>
                </li>


                
                 {/*  <li className="nav-item">
                    <NavLink className="nav-link" to="/custReport">
                      CustReport
                    </NavLink>
                  </li>
                

                <li className="nav-item">
                  <NavLink className="nav-link" to="/cartreport">
                    CartReport
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/orderReport">
                    OrderReport
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/billReport">
                    BillReport
                  </NavLink>
                </li>  */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
