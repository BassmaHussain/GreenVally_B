import React,{Fragment} from "react"
import "../css/carsCards.css"
import { useTranslation} from "react-i18next"
import { useToasts } from 'react-toast-notifications'

const CarsCards = ({cars})=>{

    const {t} = useTranslation()
    const {addToast} = useToasts()
    const makeAlert =()=>{
        addToast('The Car Choosen Successfully', {
            appearance: 'success',
            autoDismiss: true,
            autoDismissTimeout:1300
          })
    }
    return(
        <Fragment>
        {(cars)&&cars.map((car,indx)=>(
            <div className="card" key={indx}>
                  <img src={car.img} alt="..."/>
                  <div className='car_details text-center'>
                      <span className="car-name">{car.name}</span>
                      <span className="car-price"> <mark>{car.price}</mark>{t("LE")}\{t("day")}</span>
                      <button className="rent" onClick={makeAlert}>{t("rent")}</button>
                  </div>
            </div>
        ))}
        </Fragment>
    )
}

export default CarsCards;