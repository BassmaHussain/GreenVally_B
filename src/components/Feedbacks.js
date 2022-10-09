import React from 'react'
import Slider from "react-slick"

// images
import person1 from "../images/person1.svg"
import person2 from "../images/person2.jpg"
// css
import "../css/feedback.css"
//icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons" ;

const Feedbacks = ()=>{
  const reviews=[
  {name:'Ahmed Ali',stars:4.5,opinion:'Goooooood',img:person1},
  {name:'Mazen Amr',stars:5,opinion:'nice',img:person2},
  {name:'Amr Mohammed',stars:3,opinion:'Good',img:person1},
  {name:'Maher Zaki',stars:3.5,opinion:'Goooooood',img:person2},
  {name:'Osama Ali',stars:2,opinion:'Goood',img:person1}]

  const setting = {
    Infinite:true,
    slidesToShow:3,
    autoplay:true,
    autoplaySpeed:2000,
    centerMode:true ,
    responsive:[
      {
        breakpoint:992,
        settings:{
          slidesToShow:2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint:768,
        settings:{
          slidesToShow:1,
          slidesToScroll: 1,
          dots:true
        }
      }
    ]
  }
  return(
    <section className='feedbacks text-center'>
       <div className='container-fluid'>
            <h6 className="small_title">Feedbacks</h6>
            <h4>Trusted By Thousands Of Happy Customer</h4>
            <p className="feed_desc">These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>

            <div className='reviews text-center'>
              <Slider  {...setting}>
                {reviews.map(review =>(
                  <div className='rev-details '>
                      <div className='header'>
                            <div><img src={review.img} alt="..." />   <span className='name'>{review.name}</span></div>
                            <span >{review.stars} <FontAwesomeIcon icon={faStar} className='star-icon'/></span>
                      </div>
                      <p>{review.opinion}</p>
                  </div>
                ))}
              </Slider>
            </div>
       </div>
    </section>
  )
}

export default Feedbacks;