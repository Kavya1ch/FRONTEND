import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Report extends React.Component {
    render() { 
        return <div>
           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
             <li className="nav-item">
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
                </li>
                </ul>
        </div>;
    }
}
 
export default Report;