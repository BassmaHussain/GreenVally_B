import React from "react"
import MarkerImage from "../images/location.svg"
import pointTopoint from "../images/fromToLocation.svg"
import '../css/getLocation.css'

/* fontawesome icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

const GetLocation = ()=>{
    const [showFromLoc,setShowFromLoc] = useState(false)
    const [showToLoc,setShowToLoc] = useState(false)
      return(
        <section className="location_section">
          <div className="container">
            <div className="row">
               <div className="col-lg-2">
                  <img src={MarkerImage}  alt="..." className="marker_img" />
               </div>
               <div className="col-lg-10">
                    <div className="choose_location">
                            <img src={pointTopoint} alt="..." />
                            <button className="location_btn" onClick={()=>setShowFromLoc(true)}>Pick Up</button>
                            <div className="show_location"></div>
                            <button className="location_btn" onClick={()=>setShowToLoc(true)} >Drop off</button>
                            <div className="show_location"></div>
                    </div>
               </div>
            </div>
          </div>


          {/* from location map*/}
          <div className={(showFromLoc)? "map active": "map non_active"}>
                <h5>From Location</h5>
                <span className="close" onClick={()=>setShowFromLoc(false)}><FontAwesomeIcon icon={faXmark}/></span>
                <div className="map_cont"></div>
          </div>

          {/* to location map*/}
          <div className={(showToLoc)? "map active": "map non_active"}>
                <h5>To Location</h5>
                <span className="close" onClick={()=>setShowToLoc(false)}><FontAwesomeIcon icon={faXmark}/></span>
                <div className="map_cont"></div>
          </div>




        </section>
      )
}

export default  GetLocation;