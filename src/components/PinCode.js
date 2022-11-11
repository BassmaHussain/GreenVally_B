import React , {useState , useEffect} from 'react'
import LoginStyle from '../css/login.module.css'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PinCode = ()=>{
    // states
       const [pinCode,setPinCode]=useState('');

       const {t} = useTranslation()

       const [siteLang, setSiteLang ] = useState('')
   
       useEffect(()=>{
          setSiteLang(localStorage.getItem("i18nextLng"))
       })

   return(
    <div className={`${LoginStyle.login_page} `}   style={{textAlign:(siteLang==="ar")?"right":"left"}}> 
    <div className={`${LoginStyle.LContainer}    container`}>
    
      <div className={`${LoginStyle.login_form}   ${LoginStyle.OPT_container}`}>
          <div className={LoginStyle.content}>
          <h2>{t("reset_pass")}</h2>
          
          <span className={`${LoginStyle.enter_span} ${LoginStyle.opt_title}`}>{t("get_code")}</span>

          <form>
                  <div className="form-group">
                      <input type="text" className={`${LoginStyle.opt_input} form-control`} id="exampleInputEmail1" aria-describedby="emailHelp" value={pinCode} onChange={(e)=>setPinCode(e.target.value)} />
                  </div>

                  <NavLink to="/resetPass"><button type="button" className={`${LoginStyle.login_btn}  btn `} >{t("send")}</button></NavLink>
          </form>



          </div>
      </div>
    </div>
</div>
   )
}
export default PinCode;