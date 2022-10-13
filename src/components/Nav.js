import React  from "react";
import {NavLink} from "react-router-dom"
import NavStyle from "../css/Nav.module.css"
import LogoImage from "../images/logo.png"

const Nav =()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light ">
             <div className="container">
                            
                        <a className="navbar-brand" href="!#"><img src={LogoImage} alt="logo" /></a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item ${NavStyle.loginli}`}>
                                <NavLink  to="/loginPage"><button className={`  btn ${NavStyle.loginBtn} my-2 my-sm-0`  }>Login</button></NavLink> 
                            </li>

                            <li className="nav-item">
                                <NavLink  to="/signUpPage" className={NavStyle.RegistA}><button  className={`    ${NavStyle.RegistBtn} my-2 my-sm-0`}>Sign Up</button></NavLink>
                            </li>
                        </ul>
                        </div>
             </div>
        </nav>
    )
}

export default Nav;