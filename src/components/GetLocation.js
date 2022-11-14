import React from "react"
import {GoogleMap , useLoadScript, MarkerF} from  '@react-google-maps/api';
import MarkerImage from "../images/location.svg"
import pointTopoint from "../images/fromToLocation.svg"
import '../css/getLocation.css'
import { useTranslation } from "react-i18next";

/* fontawesome icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import axios from 'axios'




const GetLocation = ({siteLng})=>{
    const [showFromLoc,setShowFromLoc] = useState(false)
    const [showToLoc,setShowToLoc] = useState(false)
    const [result,setResult] = useState("")
    const [resultTo,setResultTo] = useState("")
    const {t} = useTranslation();
    const [choosenLocFromCoord,setChoosenLocFromCoord] =useState({
       lat:30,
       lng:31
    })

    const [choosenLocToCoord,setChoosenLocToCoord] =useState({
      lat:30,
      lng:31
    })

    // onclick from map
    const getFromLoc = (e)=>{
      const lat=e.latLng.lat()
      const long =e.latLng.lng()
      setChoosenLocFromCoord({lat:lat,lng:long})
      getLocationName(lat,long)
      setShowFromLoc(false)
    }

    // onclick to map
    const getToLoc =(e)=>{
      const lat=e.latLng.lat()
      const long =e.latLng.lng()
      setChoosenLocToCoord({lat:lat,lng:long})
      getLocationToName(lat,long) 
      setShowToLoc(false)
    }

    // show map 
const {isLoaded} = useLoadScript({
  googleMapsApiKey:"AIzaSyB8LNfxjQ6S8WJDw_0_fQbhV4HfXOeulQ4"
})

const containerStyle = {
  width: '100%',
  height: '100%'
}       
const center={
  lat:30,
  lng:31
}

// get current location 
    const getLocationName = async (lat,lng)=>{
      await axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key=AIzaSyB8LNfxjQ6S8WJDw_0_fQbhV4HfXOeulQ4').then((Response)=>{
          setResult(Response.data.results[0].formatted_address)
      })
  }
// location to name
const getLocationToName = async (lat,lng)=>{
  await axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key=AIzaSyB8LNfxjQ6S8WJDw_0_fQbhV4HfXOeulQ4').then((Response)=>{
    setResultTo(Response.data.results[0].formatted_address)
  })
}
//
  const successCallBack =(position)=>{
      getLocationName(position.coords.latitude,position.coords.longitude)
  }

  const errorCallBack =(error)=>{
       
      switch(error.code){
          case error.PERMISSION_DENIED:
              setResult("You denied the request for you location.")
          break;
          case error.POSITION_UNAVAILABLE:
              setResult("Location information is unavailable.")
          break;
          case error.TIMEOUT:
              setResult("The request to get your location timed out.")
          break;
          case error.UNKNOWN_ERROR:
              setResult("An unknown error occurred.")
          break;

          default: setResult("Error")
      }
  }
    const getLocation = ()=>{
      navigator.geolocation.getCurrentPosition(successCallBack,errorCallBack)

    }

      return(
        <section className="location_section"   style={{textAlign:(siteLng==="ar")?"right":"left"}} >
          <div className="container">
            <div className="row">
               <div className="col-lg-2">
                  <img src={MarkerImage}  alt="..." className="marker_img img-fluid" />
               </div>
               <div className="col-lg-10">
                    <div className={`choose_location ${(siteLng==="ar")?"choose_location_rtl":"choose_location_ltr"}`}>
                            <img src={pointTopoint} alt="..."   className={(siteLng==="ar")?"img_rtl":"img_ltr"} />
                            <button className="location_btn" onClick={()=>setShowFromLoc(true)}>{t("from_loc")}</button>
                            <button className="get_current_loc"  onClick={getLocation}>{t("current_loc")}</button>
                            <div className="show_location">{result}</div>
                            <button className="location_btn" onClick={()=>setShowToLoc(true)} >{t("to_loc")}</button>
                            <div className="show_location">{resultTo}</div>
                    </div>
               </div>
            </div>
          </div>


          {/* from location map*/}
          <div className={(showFromLoc)? "map active": "map non_active"}>
                <h5>From Location</h5>
                <span className="close" onClick={()=>setShowFromLoc(false)}><FontAwesomeIcon icon={faXmark}/></span>
                <div className="map_cont">
                    {
                      
                      (isLoaded)&&
                      <GoogleMap   

                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={3}
                            onClick={(e)=>{getFromLoc(e)}}
                            >
                                <MarkerF position={choosenLocFromCoord}></MarkerF>
                            </GoogleMap>
                    }
                      
                </div>
          </div>

          {/* to location map*/}
          <div className={(showToLoc)? "map active": "map non_active"}>
                <h5>To Location</h5>
                <span className="close" onClick={()=>setShowToLoc(false)}><FontAwesomeIcon icon={faXmark}/></span>
                <div className="map_cont">
                {
                      
                  (isLoaded)&&
                  <GoogleMap   

                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={3}
                        onClick={(e)=>{getToLoc(e)}}
                        >
                            <MarkerF position={choosenLocToCoord}></MarkerF>
                   </GoogleMap>
                }
                </div>
          </div>




        </section>
      )
}
        
export default  GetLocation;