import React ,{useEffect,useState} from "react";
import {NavLink} from "react-router-dom"
import NavStyle from "../css/Nav.module.css"
import LogoImage from "../images/logo.png"
// <FontAwesomeIcon icon="fa-solid fa-earth-americas" />

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import i18n from 'i18next';
import { useTranslation} from 'react-i18next';

const Nav =({siteLng})=>{
   const { t } = useTranslation();
   const languages=[
            {
                code:"en",
                name:"English"
            },
            {
                code:"ar",
                name:"العربية"
            }
   ]

const handleChangeLanguage=(lng)=>{
   i18n.changeLanguage(lng)
}
    return(
        <nav className="navbar navbar-expand-lg navbar-light ">
             <div className="container">
                            
                        <a className="navbar-brand" href="!#"><img src={LogoImage} alt="logo" /></a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={(siteLng==="ar")?`${NavStyle.collapse_rtl} ${NavStyle.collapseStyle} collapse navbar-collapse`:`${NavStyle.collapseStyle} collapse navbar-collapse`} id="navbarSupportedContent">

                        <ul className="navbar-nav ml-auto">
                            <li className={`${NavStyle.icon_global} mr-auto`}>
                                 <div className={(siteLng==="en")? `${NavStyle.lang_drop} dropdown`:"dropdown"}>
                                        <button className={`btn  dropdown-toggle ${NavStyle.tog_btn}`} type="button" data-toggle="dropdown" aria-expanded="false">
                                             <span><FontAwesomeIcon icon={faGlobe}  /></span>
                                        </button>

                                        <div className={`dropdown-menu ${NavStyle.drop_menu}`}>
                                            {languages.map(({code,name}) =>(
                                                <button className="dropdown-item" onClick={()=> handleChangeLanguage(code)}>{name}</button>
                                            )) }
                            
                                        </div>
                                </div>
                            </li>
                            <li className={`nav-item ${NavStyle.loginli}`}>
                                <NavLink  to="/loginPage"><button className={`  btn ${NavStyle.loginBtn} my-2 my-sm-0`  }>
                                    {t("nav_link1")}
                                </button></NavLink> 
                            </li>

                            <li className="nav-item">
                                <NavLink  to="/signUpPage" className={NavStyle.RegistA}><button  className={`    ${NavStyle.RegistBtn} my-2 my-sm-0`}>{t("nav_link2")}</button></NavLink>
                            </li>

                            
                        </ul>

                        </div>
             </div>
        </nav>
    )
}

export default Nav;