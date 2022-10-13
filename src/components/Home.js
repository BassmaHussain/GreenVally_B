import React from "react"

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
    return(
        <div className={HomeStyle.home}>
        <Nav />
           <Header />
           <ShowCars />

           {/* performance steps */}
           <section className={`${HomeStyle.performance_steps}`}>
              <div className="container">

               <h6  className={`${HomeStyle.small_title} text-center`}>How It Work</h6>
               <h2  className={`${HomeStyle.steps_title} text-center`}>3 steps to high performance</h2>

                <div className="row">

                   <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className={HomeStyle.step}>
                           <img src={num1} alt="..." className={HomeStyle.step_number}/>
                            
                            <div className={HomeStyle.step_content}>
                                <span className={`${HomeStyle.icon}`}> <FontAwesomeIcon icon={faArrowRightArrowLeft} /></span>
                                <h3>Choose a location</h3>
                                <p>
                                    The first step is to choose where you are as we will pick you
                                    from th required place immediality with a high performance
                                </p>
                            </div>
                           
                      </div>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={HomeStyle.step}>
                        <img src={num2} alt="..." className={HomeStyle.step_number}/>
                            <div className={HomeStyle.step_content}>
                                    <span className={`${HomeStyle.icon}`}> <FontAwesomeIcon icon={faCalendarCheck} /> </span>
                                    <h3>Pick the date</h3>
                                    <p>
                                        By useing the calender you will pick the required date and time to go to your 
                                        journey which is an imprtant step
                                    </p>
                            </div>
                        </div>
                   </div>

                   <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className={HomeStyle.step}>
                            <img src={num3} alt="..." className={HomeStyle.step_number}/>

                            <div className={HomeStyle.step_content}>
                                    <span className={`${HomeStyle.icon}`}> <FontAwesomeIcon icon={faCarSide} /> </span>
                                    <h3>Check your rental car</h3>
                                    <p>
                                        With a variety of cars you can pick whatever you need,
                                        as it will be very clean and the driver will save your own privacy
                                    </p>
                            </div>
                            
                            </div>
                   </div>


                </div>
              </div>
           </section>
           {/* End  performance steps*/}
           
           <GetLocation />
           <DurationDate />
           <AvailableCars />

           {/* Services */}
           <section className={HomeStyle.services}> 
               <div className="container-fluid">
                   <div className="row">

                      <div className="col-lg-8  col-sm-12">
                         <img src={ServicesImg} alt="..." className="img-fluid" />
                      </div>

                      <div className="col-lg-4  col-sm-12">
                         <div className={HomeStyle.details}>
                             <h6>Best Services</h6>
                             <h3>We Provide Many Features You Can Use</h3>
                             <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                             <ul className="list-unstyled">
                                 <li> <FontAwesomeIcon icon={faCircleCheck}  className={HomeStyle.icon}/>Deals with every budget</li>
                                 <li> <FontAwesomeIcon icon={faCircleCheck}  className={HomeStyle.icon} />24/7 with a high quality in each minute</li>
                                 <li> <FontAwesomeIcon icon={faCircleCheck}  className={HomeStyle.icon} />Best price for huge journey</li>
                                 <li> <FontAwesomeIcon icon={faCircleCheck}  className={HomeStyle.icon} />Clean cars and high privacy.</li>
                             </ul>
                         </div>
                      </div>

                   </div>
               </div>
           </section>
           {/* End Services */}

           <Feedbacks />

           {/* Download App Section */}
           <section className={HomeStyle.download_app}>
             <div className="container-fluid">
               <div className={HomeStyle.download_content}>
                  <div className="container">
                        <h4>For more services, download the free green valley app</h4>
                        <img src={AndroidDownload}  alt="..." />
                        <img src={AppleDownload}    alt="..." />
                  </div>
                  <div className={HomeStyle.phone_img}><img  src={PhoneImg} alt="..." /> </div>
               </div>
             </div>
           </section>

           {/* End Download App Section */}

           {/* Footer */}
           <footer className={HomeStyle.footer}>
               <div className="container">
                  <div className="row">

                     <div className="col-lg-4 col-md-6">
                        <div className={HomeStyle.logo}>
                           <img src={LogoImage} alt="..." />
                           <p>
                               A company to rent cars for anyone who needs a great journey with a <br /> high privacy
                           </p>
                        </div>
                     </div>


                     <div className="col-lg-3 col-md-6">
                         <div className={HomeStyle.contact}>
                            <h5>Contact US</h5>
                            <ul className="list-unstyled">
                                <li><FontAwesomeIcon  icon={faEnvelope} />  greenvalley@gmail.com</li>
                                <li><FontAwesomeIcon icon={faPhone}/>   (010) 123 - 5772</li>
                            </ul>
                         </div>
                     </div>


                     <div className="col-lg-2 col-md-6">
                         <div className={HomeStyle.links}>
                            <h5>Useful Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="!#">Car lists</a></li>
                                <li><a href="!#">Rent car</a></li>
                                <li><a href="!#">Feedbacks</a></li>
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