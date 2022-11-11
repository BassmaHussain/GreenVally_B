
import React ,{useState , useEffect} from "react";
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
import axios from "axios";
import { useTranslation} from 'react-i18next';

const ShowCars = ({siteLng})=>{


     const {t} = useTranslation()
    const [imageIndex,setImageIndex]=useState(0)

    const [Images , setImages] = useState([])
     
    useEffect(()=>{
          axios.get("https://backend.tawseela.online/api/cars").then(response => {
            setImages(response.data.data)
          })
    },[])

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
            breakpoint: 992,
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
        <section className="cars_section" style={{textAlign:(siteLng==="ar")?"right":"left"}} >
          <div className="container">
                <h6 className="small_title">{t("show_cars_small_title")}</h6>

                <h3 dangerouslySetInnerHTML={{__html:t("show_cars_head")}} ></h3>

                <p  dangerouslySetInnerHTML={{__html:t("show_cars_text")}}></p>

                {/* carse 3D slick slider */}

                    <div  className="sliderContainer"  >
                           <Slider {...setting} className="Slider" rtl={(siteLng==="ar")?true:false}>
                                {(Images)&&Images.map((car,index)=>(
                                    <div  key={index} className={(index === imageIndex)?"slideActive slide":"slide"}>
                                       {/* car image */}
                                           <img src={`https://backend.tawseela.online${car.image}`} alt={index} />

                                       {/* car info */}
                                      <div className="car-details" >
                                         <h4 className="text-center">{car.car_name}</h4>


                                             {/* car year && reviews */}
                                             <div className="yearStar">
                                             <div className="row text-center">

                                                <div className="col-6">
                                                <span className="year">{car.model}</span>
                                                </div>
                                                <div className="col-6">
                                                   <span className="review"><FontAwesomeIcon icon={faStar}/>{` ${car.reviews_count}  (${car.reviews_count} Reviews)`}</span>
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
                                                             {car.geer}
                                                        </div>
                                                     </div>
                                                    <div className="col-4">
                                                        <div className="option">
                                                           <span className="opt-icon"><FontAwesomeIcon  icon={faCircleUser} /></span>
                                                             {car.price_per_kilo}
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
        </section>
    )
}

export default ShowCars;