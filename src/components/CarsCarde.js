import React,{Fragment} from "react"
import "../css/carsCards.css"
import { useTranslation} from "react-i18next"

const CarsCards = ({cars})=>{

    const {t} = useTranslation()
    return(
        <Fragment>
        {(cars)&&cars.map((car,indx)=>(
            <div className="card">
                  <img src={car.img} alt="..."/>
                  <div className='car_details text-center'>
                      <span className="car-name">{car.name}</span>
                      <span className="car-price"> <mark>{car.price}</mark>{t("LE")}\{t("day")}</span>
                      <button className="rent">{t("rent")}</button>
                  </div>
            </div>
        ))}
        </Fragment>
    )
}

export default CarsCards;