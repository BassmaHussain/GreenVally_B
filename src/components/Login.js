import React, { useState , useEffect } from "react";
import LoginStyle from '../css/login.module.css'
import eyeIcon from "../images/icons8-eye-30.png"
import hideEyeIcon from "../images/invisible.png"
import google from "../images/search.png"
import facebook from "../images/facebook.png"
import { NavLink , useNavigate , useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Login =()=>{
  const {t}= useTranslation()
  const [passShow,setPassShow] =useState(false)
  const [logedPhone,setLogedPhone]=useState('')
  const [logedPass,setLogedPass]=useState('')
  const [type, setType]= useState("password")
  const navigate = useNavigate()
 const location = useLocation();

  const handlePassword=()=>{
      if(passShow){
        setPassShow(false)
        setType('password')
      }

      
      if(!passShow){
        setPassShow(true)
        setType('text')
      }
  }

  const submitLogin =  (e)=>{
       e.preventDefault();   

               axios.post("https://backend.tawseela.online/api/login",{ phone:logedPhone,password:logedPass}).then((res)=>{
                window.localStorage.setItem("auth",res.data.data.token)
                const name = res.data.data.user.first_name
                window.localStorage.setItem("userName",name)

                navigate('/')
              }
             ) 
  }

  const [siteLang, setSiteLang ] = useState('')
   
    useEffect(()=>{
       setSiteLang(localStorage.getItem("i18nextLng"))
    })

    return(
        <section className={LoginStyle.login_page}  style={{textAlign:(siteLang==="ar")?"right":"left"}}>
          <div className={`${LoginStyle.LContainer} container`}>
          
            <div className={LoginStyle.login_form}>
                <div className={`${LoginStyle.content} ${(siteLang==="ar")?LoginStyle.content_log_rtl:LoginStyle.content_log_ltr}`}>
                    <h2>{t("login")}</h2>
                    <span className={LoginStyle.enter_span}>{t("enter_num_pass")}</span>

                    <form onSubmit={(e)=>{submitLogin(e)}}>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">{t("phone")}</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"   
                            value={logedPhone} onChange={(e)=>setLogedPhone(e.target.value)}  name="logedPhone"  required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">{t("password")}</label>
                        <div className="d-flex " >
                        <input type={type} className="form-control d-inline-block" id="exampleInputPassword1"
                         value={logedPass} onChange={(e)=>setLogedPass(e.target.value)} required />
                            <div className={LoginStyle.eye}  onClick={handlePassword} name="logedPass">
                                {
                                  (passShow===false)? 
                                  <img src={eyeIcon}  alt="eye" className={LoginStyle.show} style={{height:22}} /> :
                                  <img src={hideEyeIcon}  alt="eye" className={LoginStyle.hide} style={{height:22}}  />
                                }
                                
                            </div>
                        </div>
                       </div>
                    
                      <button type="submit" className={`${LoginStyle.login_btn}  btn `} >{t("login")}</button>
                    </form>
                        <div>
                              {t("don't_have_account")}
                              <NavLink to="/signUpPage"> {t("sign_up")}</NavLink>
                        </div>


                        <div className={LoginStyle.forget}>
                          <NavLink to="/loginPage/forgetpass">{t("forget_pass")}</NavLink>
                        </div>

                        <div className={`${LoginStyle.google} ${LoginStyle.log_with}`}>
                          <img  src={google} alt="google"/>  {t("login_with_google")}
                        </div>
                        <div className={`${LoginStyle.facebook}  ${LoginStyle.log_with}`}>
                          <img  src={facebook} alt="facebook"/>  {t("login_with_facebook")}
                        </div>
                </div>


            </div>
          
          </div>
        
                         
          </section>
    )
}

export default Login;