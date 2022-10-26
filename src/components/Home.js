import React ,{useState,useEffect}from "react"
import { useTranslation } from "react-i18next"
// css
import HomeStyle from "../css/home.module.css"

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone}  from "@fortawesome/free-solid-svg-icons"

//components
import Header from "./Header"
import ShowCars from "./ShowCars"
import DurationDate from "./DurationDate"
import AvailableCars from "./AvailableCars"
import GetLocation from "./GetLocation"
import Feedbacks  from './Feedbacks'

// images
import  ServicesImg from '../images/carServices.svg'
import AndroidDownload from "../images/android-download.svg"
import AppleDownload from "../images/apple-downlod.svg"
import PhoneImg from "../images/iPhone 12 Pro Max.svg"
import LogoImage from "../images/logo.png"
import num1 from "../images/1.svg"
import num2 from "../images/2.svg"
import num3 from "../images/3.svg"
import Nav from "./Nav.js"



const Home = ()=>{
    const {t} = useTranslation()

    const [currentLangCode, setCurrentLangCode ] = useState('')
   
    useEffect(()=>{
       setCurrentLangCode(localStorage.getItem("i18nextLng"))
    })

    return(
        <div className={HomeStyle.home}  dir={(currentLangCode === "ar")?"rtl":"ltr"}>
        <Nav siteLng={currentLangCode}/>
           <Header siteLng={currentLangCode}/>
           <ShowCars siteLng={currentLangCode}/>

           {/* performance steps */}
           <section className={`${HomeStyle.performance_steps}`}>
              <div className="container">

               <h6  className={`${HomeStyle.small_title} text-center`}>{t("performance_steps_small_title")}</h6>
               <h2  className={`${HomeStyle.steps_title} text-center`}>{t("performance_steps_title")}</h2>

                <div className="row" style={{textAlign:(currentLangCode==="ar")?"right":"left"}}>

                   <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className={HomeStyle.step}>
                           <img src={num1} alt="..." className={`${HomeStyle.step_number} ${(currentLangCode==="ar")?HomeStyle.left_zero:HomeStyle.right_zero}`}  />
                            
                            <div className={HomeStyle.step_content}>
                                <span className={`${HomeStyle.icon}`}> <FontAwesomeIcon icon={faArrowRightArrowLeft} /></span>
                                <h3>{t("step_one_H")}</h3>
                                <p>
                                    {t("step_one_P")}
                                </p>
                            </div>
                           
                      </div>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={HomeStyle.step}>
                        <img src={num2} alt="..."  className={`${HomeStyle.step_number} ${(currentLangCode==="ar")?HomeStyle.left_zero:HomeStyle.right_zero}`}/>
                            <div className={HomeStyle.step_content}>
                                    <span className={`${HomeStyle.icon}`}> <FontAwesomeIcon icon={faCalendarCheck} /> </span>
                                    <h3>{t("step_two_H")}</h3>
                                    <p>
                                        {t("step_two_P")}
                                    </p>
                            </div>
                        </div>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className={HomeStyle.step}>
                            <img src={num3} alt="..."  className={`${HomeStyle.step_number} ${(currentLangCode==="ar")?HomeStyle.left_zero:HomeStyle.right_zero}`}/>

                            <div className={HomeStyle.step_content}>
                                    <span className={`${HomeStyle.icon}`}> <FontAwesomeIcon icon={faCarSide} /> </span>
                                    <h3>{t("step_three_H")}</h3>
                                    <p>
                                        {t("step_three_P")}
                                    </p>
                            </div>
                            
                            </div>
                   </div>


                </div>
              </div>
           </section>
           {/* End  performance steps*/}
           
           <GetLocation siteLng={currentLangCode}/>
           <DurationDate siteLng={currentLangCode}/>
           <AvailableCars siteLng={currentLangCode}/>

           {/* Services */}
           <section className={HomeStyle.services}   style={{textAlign:(currentLangCode==="ar")?"right":"left"}}> 
               <div className="container-fluid">
                   <div className="row">

                      <div className="col-lg-8  col-sm-12">
                         <img src={ServicesImg} alt="..." className="img-fluid" />
                      </div>

                      <div className="col-lg-4  col-sm-12">
                         <div className={HomeStyle.details}>
                             <h6>{t('services_small_title')}</h6>
                             <h3>{t('services_title')}</h3>
                             <p>{t('services_text')}</p>
                             <ul className="list-unstyled">
                                 <li> <FontAwesomeIcon icon={faCircleCheck}  className={HomeStyle.icon}/>{t('service_one')}</li>
                                 <li> <FontAwesomeIcon icon={faCircleCheck}  className={HomeStyle.icon} />{t('service_two')}</li>
                                 <li> <FontAwesomeIcon icon={faCircleCheck}  className={HomeStyle.icon} />{t('service_three')}</li>
                                 <li> <FontAwesomeIcon icon={faCircleCheck}  className={HomeStyle.icon} />{t('service_four')}</li>
                             </ul>
                         </div>
                      </div>

                   </div>
               </div>
           </section>
           {/* End Services */}

           <Feedbacks siteLng={currentLangCode}/>

           {/* Download App Section */}
           <section className={HomeStyle.download_app}>
             <div className="container-fluid">
               <div className={HomeStyle.download_content}>
                  <div className="container">
                        <h4>{t("download_app")}</h4>
                        <img src={AndroidDownload}  alt="..." />
                        <img src={AppleDownload}    alt="..." />
                  </div>
                  <div className={HomeStyle.phone_img}><img  src={PhoneImg} alt="..." /> </div>
               </div>
             </div>
           </section>

           {/* End Download App Section */}

           {/* Footer */}
           <footer className={HomeStyle.footer}  style={{textAlign:(currentLangCode==="ar")?"right":"left"}}>
               <div className="container">
                  <div className="row">

                     <div className="col-lg-4 col-md-6">
                        <div className={HomeStyle.logo}>
                           <img src={LogoImage} alt="..." />
                           <p  dangerouslySetInnerHTML={{__html:t("footer_text")}}></p>
                        </div>
                     </div>


                     <div className="col-lg-3 col-md-6">
                         <div className={HomeStyle.contact}>
                            <h5>{t("contact_us")}</h5>
                            <ul className="list-unstyled">
                                <li><FontAwesomeIcon  icon={faEnvelope} />  greenvalley@gmail.com</li>
                                <li><FontAwesomeIcon icon={faPhone}/>   (010) 123 - 5772</li>
                            </ul>
                         </div>
                     </div>


                     <div className="col-lg-2 col-md-6">
                         <div className={HomeStyle.links}>
                            <h5>{t("usefull_links")}</h5>
                            <ul className="list-unstyled">
                                <li><a href="!#">{t("car_lists")}</a></li>
                                <li><a href="!#">{t("rent_car")}</a></li>
                                <li><a href="!#">{t("feedbacks")}</a></li>
                            </ul>
                         </div>
                     </div>


                     <div className="col-lg-3 col-md-6">
                        <div className={HomeStyle.download}>
                           <img   src={AppleDownload} alt="..." />
                           <img   src={AndroidDownload} alt="..." />
                        </div>
                     </div>


                  </div>
 
                    <div className={HomeStyle.copyright}>Copyright © 2022 Green Valley | Made Bassma Hussain</div>
               </div>
           </footer>

        </div>
    )
}

export default Home