import React from "react";
import appleAppImage from "../images/apple-downlod.svg"
import androidAppImage from "../images/android-download.svg"
import HeaderStyle from "../css/Header.module.css"
import HeaderImg from "../images/heade_bg.svg"

const Header =()=>{
    return(
        <header>
           <div className={`${HeaderStyle.headCont}  container`}>
                

                <div className={HeaderStyle.head_content}>

                 <div className={`row`}>
                    <div className={`col-lg-6 col-md-6 col-sm-12`} >
                        <div className={HeaderStyle.head_desc}>
                                <h1>Looking to <mark>save</mark>  time and get <mark>comfortable</mark> journey?</h1>
                                <p>Discover Green valley to find your perfect rental car for a great journey and great price.</p>

                                <a href="!#"><img src={appleAppImage} alt="download app"/></a>
                                <a href="!#"><img src={androidAppImage} alt="download app"/></a>
                                
                                </div>
                    </div>
                    <div className={`col-lg-6 col-md-6 col-sm-12`}>
                        <img  src={HeaderImg} alt="..." className={HeaderStyle.head_side_img} />
                    </div>
                 </div>

                </div>
           </div>
        </header>
    )
}

export default Header;