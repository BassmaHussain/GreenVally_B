
import React ,{useState} from "react";
import Slider from "react-slick";

// css
import "../css/showCars.css";

// fontawesome Icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh } from "@fortawesome/free-solid-svg-icons" ;
import { faRotateRight }   from "@fortawesome/free-solid-svg-icons" ;
import { faCircleUser } from "@fortawesome/free-solid-svg-icons" ;
import { faStar } from "@fortawesome/free-solid-svg-icons" ;
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons" ;
import {  faChevronRight } from "@fortawesome/free-solid-svg-icons" ;
import { useSelector } from "react-redux";


const ShowCars = ()=>{

    const [imageIndex,setImageIndex]=useState(0)

    const Images = useSelector((state)=> state.mainCarsImagesReducer)
   

    const NextArrow = ({onClick}) => {
        return (
          <div className="arrow next" onClick={onClick}>
                 <span className="arrow-icon"><FontAwesomeIcon  icon={faChevronRight} /></span>
          </div>
        )
      }
    
      const PrevArrow = ({onClick}) => {
        return (
          <div className="arrow prev" onClick={onClick}>
               <span className="arrow-icon"><FontAwesomeIcon  icon={faChevronLeft} /></span>
          </div>
        )
      }
    
    const setting = {
        infinite:true,
        speed:300,
        lazyLoad: true,
        slidesToShow:3,
        centerMode:true,
        autoplay:true,
        autoplaySpeed: 2000,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />,
        beforeChange:(current,next)=>{setImageIndex(next)},
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
           }
          ]

    }
    

    return(
        <div className="cars_section">
          <div className="container">
                <h6 className="small_title">cars</h6>

                <h3>
                        Check our best <br />
                        rental cars for your ride
                </h3>

                <p>
                        You can explore the cares that we provide with fun and <br />
                        have their own functions each feature.
                </p>

                {/* carse 3D slick slider */}

                    <div  className="sliderContainer"  >
                           <Slider {...setting} className="Slider">
                                {Images.map((car,index)=>(
                                    <div  key={index} className={(index === imageIndex)?"slideActive slide":"slide"}>
                                       {/* car image */}
                                           <img src={car.image} alt={index} />

                                       {/* car info */}
                                      <div className="car-details" >
                                         <h4 className="text-center">{car.name}</h4>


                                             {/* car year && reviews */}
                                             <div className="yearStar">
                                             <div className="row text-center">

                                                <div className="col-6">
                                                <span className="year">{car.year}</span>
                                                </div>
                                                <div className="col-6">
                                                   <span className="review"><FontAwesomeIcon icon={faStar}/>{` ${car.star}  (${car.review} Reviews)`}</span>
                                                </div>

                                             </div>
                                             </div>

                                             {/* car  3 options */}
                                           <div className="options">
                                                <div className="row text-center">
                                                    <div className="col-4 ">
                                                      <div className="option">
                                                          <span className="opt-icon"><FontAwesomeIcon  icon={faTemperatureHigh} /></span>
                                                            {car.speed}
                                                      </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="option">
                                                           <span className="opt-icon"><FontAwesomeIcon  icon={faRotateRight} /></span>
                                                             {car.type}
                                                        </div>
                                                     </div>
                                                    <div className="col-4">
                                                        <div className="option">
                                                           <span className="opt-icon"><FontAwesomeIcon  icon={faCircleUser} /></span>
                                                             {car.use}
                                                        </div>
                                                    </div>
                                                </div>
                                           </div>
                                      </div>
                                    </div>
                                ))}
                           </Slider>
                    </div>
          </div>
        </div>
    )
}

export default ShowCars;