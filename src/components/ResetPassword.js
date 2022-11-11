import React , {useState , useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import LoginStyle from '../css/login.module.css'
import { useTranslation } from 'react-i18next';

const ResetPassword = ()=>{
    // states
       const [password,setPassword]=useState('');
       const [newPassWord,setNewPassWord]= useState('');

       const {t}= useTranslation()
   
       const [siteLang, setSiteLang ] = useState('')
   
       useEffect(()=>{
          setSiteLang(localStorage.getItem("i18nextLng"))
       })
   


   return(
    <div className={`${LoginStyle.login_page} `}  style={{textAlign:(siteLang==="ar")?"right":"left"}}>
    <div className={`${LoginStyle.LContainer}    container`}>
    
      <div className={`${LoginStyle.login_form}   ${LoginStyle.OPT_container}`}>
          <div className={LoginStyle.content}>
          <h2>{t("reset_pass")}</h2>

          
          <span className={`${LoginStyle.enter_span} ${LoginStyle.opt_title}`}>{t("enter_new_pass")}</span>


          <form>
                  <div className="form-group">
                       <input type="password" className={`${LoginStyle.opt_input} form-control`}  aria-describedby="emailHelp"
                        value={password} onChange={(e)=>setPassword(e.target.value)} placeholder={t("password")}/>


                       <input type="password" className={`${LoginStyle.opt_input} form-control`}  aria-describedby="emailHelp"
                        value={newPassWord} onChange={(e)=>setNewPassWord(e.target.value)}  placeholder={t("new_pass")} />
                  </div>

                  <button type="button" className={`${LoginStyle.login_btn}  btn `} >{t("submit")}</button>
          </form>



          </div>
      </div>
    </div>
</div>
   )
}
export default ResetPassword;