import React,{Fragment} from "react"
import "../css/carsCards.css"

const CarsCards = ({cars})=>{
    return(
        <Fragment>
        {(cars)&&cars.map((car,indx)=>(
            <div className="card">
                  <img src={car.img} alt="..."/>
                  <div className='car_details text-center'>
                      <span className="car-name">{car.name}</span>
                      <span className="car-price"> <mark>{car.price}</mark>\day</span>
                      <button className="rent">Rent</button>
                  </div>
            </div>
        ))}
        </Fragment>
    )
}

export default CarsCards;