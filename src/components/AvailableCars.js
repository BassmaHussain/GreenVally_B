import React ,{useState} from 'react';

// images
import Slider from "react-slick";

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faChevronLeft} from "@fortawesome/free-solid-svg-icons" ;
import {  faChevronRight } from "@fortawesome/free-solid-svg-icons" ;

//css
import "../css/availbleCar.css"
import { useSelector } from 'react-redux';

const AvailableCars = ()=>{

   
    const [shown,setShown]=useState('available')

    const AvailableCars=useSelector((state)=>state.availableCarsReducer)
    const NonAvailableCars=useSelector((state)=>state.nonAvailableCarsReducer)
   
  
    
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
        slidesToShow:1,
        centerMode:true,
        autoplay:true,
        autoplaySpeed: 2000,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />,
      
    }
    
    return(
        <div>
            <div className='container'>

          {/** click to show available cars */}
            <div className={(shown === 'unavailable')?' active click text-center':'non_active click text-center'}>
                 <div onClick={()=> setShown('available')}>Available Cars</div>
            </div>

            {/** slide show available cars*/}
                <div className={(shown === 'available')?'active available_car cars_show':'non_active available_car cars_show'}>
                       <h5 className='av_title'>Available Cars</h5>
                        <Slider {...setting} className="Slider">
                            {(AvailableCars)&&AvailableCars.map((img,indx)=>(
                                <div className="img_cont" key={indx}><img src={img} alt="..."/></div>
                            ))}
                        </Slider>
                </div>


                {/**click to show unavailable cars */}
                <div className={(shown === 'available')?' active click text-center':'non_active click text-center'}>
                    <div onClick={()=> setShown('unavailable')}>Unavailable Cars</div>
                </div>

                 {/** slide show unavailable cars*/}
                <div className={(shown === 'unavailable')?'active unavailable_car cars_show':'non_active unavailable_car cars_show'}>
                       <h5 className='av_title'>Unavailable Cars</h5>
                        <Slider {...setting} className="Slider">
                            {(NonAvailableCars)&&NonAvailableCars.map((img,indx)=>(
                              <div className="img_cont" key={indx}><img src={img} alt="..."/></div>
                            ))}
                        </Slider>
                </div>

                <button className=' continue'>Continue</button>

            </div>
        </div>
    )
}

export default  AvailableCars;