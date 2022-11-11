import React, {  useState } from "react";

/* react datePicker */
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

/* fontawesome icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'


//translation
import { useTranslation } from "react-i18next";



/* css files */
import "../css/durationDate.css"


const DurationDate = ({siteLng})=>{

  const { t } = useTranslation();
  const [selectedStartDate , setSelectedStartDate] = useState(null)
  const [selectedEndDate , setSelectedEndDate] = useState(null)

  const [selectedTime,setSelectedTime]=useState({
    hour:"",
    minuts:"",
    pmAm:"PM"
  })
  
    const [cashORvisa,setCashORvisa] = useState('')

    
    const hoursList = [1,2,3,4,5,6,7,8,9,10,11,12];
    const minutsList=['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20',
                         '21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40',
                         '41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60']
 

 

    return(
        <div className="Date_form"   style={{textAlign:(siteLng==="ar")?"right":"left"}}>
          <div className="container">  
          <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-10 col-sm-12">
          <div className="content">
          <h3 className="date_title">{t('duration_date')}</h3>
          <form>

           {/* choose date*/}
               <div className="inputs">

                {/* from date*/}
               <div className="form-group">
                     <label htmlFor="exampleInputDate1">{t('from')}</label>
                       <DatePicker  
                           selected={selectedStartDate} 
                           onChange={(date)=>{setSelectedStartDate(date)}}
                           dateFormat="dd/MM/yyyy"
                           filterDate={date => date.getDay !== 5} 
                           className="form-control calender"
                           selectRange={true}
                           id="exampleInputDate1"
                           placeholderText="DD/MM/YYYY"
                       />
             </div>

              {/* to date*/}
             <div className="form-group">
                     <label htmlFor="exampleInputDate2">{t('to')}</label>
                     <DatePicker  
                         selected={selectedEndDate} 
                         onChange={(date)=>{setSelectedEndDate(date)}}
                         dateFormat="dd/MM/yyyy"
                         filterDate={date => date.getDay !== 5} 
                         className="form-control calender"
                         selectRange={true}
                         id="exampleInputDate2"
                         placeholderText="DD/MM/YYYY"
                     />
               </div>
               
               </div>


               {/* select time */}
               <div className="select_time">

               <h4 className="time_title">{t('pick_time')} : </h4>
                   <FontAwesomeIcon icon={faClock} className="clock_icon"/>

                           <div className="input-group mb-3">
                                 <select className="custom-select"
                                   value={selectedTime.hour}
                                   onChange={(e)=>{setSelectedTime({...selectedTime,hour:e.target.value});  }} 
                                   >
                                   <option value="" disabled ></option>
                                     {(hoursList) && hoursList.map(hour=>(
                                       <option value={hour} key={hour}>{hour}</option>
                                     )) }
                                 </select>
                           </div>

                           <span > : </span>

                           <div className="input-group mb-3">
                           <select className="custom-select"
                                 value={selectedTime.minuts}
                                 onChange={(e)=>{setSelectedTime({...selectedTime,minuts:e.target.value})}}>

                              <option value="" disabled ></option>
                             {(minutsList)&& minutsList.map(minuts=>(
                               <option value={minuts}  key={minuts}>{minuts}</option>
                             ))}
                           </select>
                     </div>
                   
                     <div className="am_pm">
                         <span className={(selectedTime.pmAm === 'AM')? "am active":"am non_active"} onClick={()=>setSelectedTime({...selectedTime,pmAm:'AM'})}>AM</span>
                         <span className={(selectedTime.pmAm === 'PM')? "pm active":"pm non_active"} onClick={()=>setSelectedTime({...selectedTime,pmAm:'PM'}) }>PM</span>
                     </div>

             

               </div> {/*time select */}

          </form>

              <div className="payment" >
                   <h4>{t('payment_method')} : </h4>
                   <span className={(cashORvisa === 'cash')? "pay pay_active":"pay"} onClick={()=> setCashORvisa('cash')}>{t('visa')}</span>
                   <span className={(cashORvisa === 'visa')? "pay pay_active":"pay"} onClick={()=> setCashORvisa('visa')}>{t('cash')}</span>
              </div>

              
          </div>
          </div>
          </div>
            
               
                
          </div>
        </div>
    )
}

export default  DurationDate 