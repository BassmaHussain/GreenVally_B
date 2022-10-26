import React from "react";
import appleAppImage from "../images/apple-downlod.svg"
import androidAppImage from "../images/android-download.svg"
import HeaderStyle from "../css/Header.module.css"
import HeaderImg from "../images/heade_bg.svg"
import { useTranslation} from 'react-i18next';

const Header =()=>{
    const { t } = useTranslation()
    return(
        <header>
           <div className={`${HeaderStyle.headCont}  container`}>
                

                <div className={HeaderStyle.head_content}>

                 <div className={`row`}>
                    <div className={`col-lg-6 col-md-6 col-sm-12`} >
                        <div className={HeaderStyle.head_desc}>
                                <h1  dangerouslySetInnerHTML={ { __html: t("head_title") } }></h1>
                                
                                <p>{t("head_text")}</p>
                                <div className="d-flex">
                                <a href="!#"><img src={appleAppImage} className="img-fluid" alt="download app"/></a>
                                <a href="!#"><img src={androidAppImage} className="img-fluid" alt="download app"/></a>
                                </div>
                                
                                </div>
                    </div>
                    <div className={`col-lg-6 col-md-6 col-sm-12`}>
                        <img  src={HeaderImg} alt="..." className={`${HeaderStyle.head_side_img} img-fluid`} />
                    </div>
                 </div>

                </div>
           </div>
        </header>
    )
}

export default Header;