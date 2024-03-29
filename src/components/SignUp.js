import React ,{useState, useEffect}from "react"
import SignStyle from "../css/login.module.css"
import Style from "../css/signUp.module.css"
import eyeIcon from "../images/icons8-eye-30.png"
import hideEyeIcon from "../images/invisible.png"
import google from "../images/search.png"
import facebook from "../images/facebook.png"
import {useSelector , useDispatch} from "react-redux"
import { NavLink , useNavigate} from "react-router-dom"
import { useTranslation } from "react-i18next"
import {signInWithPopup , FacebookAuthProvider} from "firebase/auth"
import { authentication } from "../firebase_config"

const SignUp = ()=>{


  const {t} = useTranslation() 

    const [passShow,setPassShow] =useState(false)
    const [type, setType]= useState("password")


    const userData = useSelector((User)=> User)
    const dispatch = useDispatch();
    
    const navigate = useNavigate()
    //login with facebook
    const loginWithFacebook =()=>{
      const provider = new FacebookAuthProvider();
      signInWithPopup(authentication,provider).then(res => {
        console.log(res)
        localStorage.setItem("auth",res.user.accessToken)
        navigate('/')
      }).catch(err => console.log(err)) 
    }


    const makeAction = (type ,value) =>{
       const action = {type:type, payload:value}
       dispatch(action)
    }

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

    const [siteLang, setSiteLang ] = useState('')
   
    useEffect(()=>{
       setSiteLang(localStorage.getItem("i18nextLng"))
    })
  
    return(
        <section className={SignStyle.login_page}  style={{textAlign:(siteLang==="ar")?"right":"left"}} >
        <div className={`${SignStyle.LContainer} container`}>
        
          <div className={SignStyle.login_form}>
              <div className={`${SignStyle.content} ${(siteLang === "ar"?Style.content_rtl:Style.content_ltr)}`} >
                  <h2>{t("sign_up")}</h2>
                  <span className={SignStyle.enter_span}>{t("sign_text")}</span>

                  <form onSubmit={(e)=>{e.preventDefault(); console.log(userData)}}>

                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">{t("sign_first_name")}</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userData.firstName} onChange={(e)=>makeAction("FIRSTNAME",e.target.value)} />
                    </div>


                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">{t("sign_last_name")}</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userData.lastName} onChange={(e)=>makeAction("LASTNAME",e.target.value)} />
                    </div>


                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">{t("phone")}</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userData.phone} onChange={(e)=>makeAction("PHONE",e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">{t("password")}</label>
                      <div className="d-flex " >
                      <input type={type} className="form-control d-inline-block" id="exampleInputPassword1" value={userData.password} onChange={(e)=>makeAction("PASSWORD",e.target.value)} />
                          <div className={SignStyle.eye}  onClick={handlePassword}>
                              {
                                (passShow)? 
                                <img src={eyeIcon}  alt="eye" className={SignStyle.show} style={{height:22}} /> :
                                <img src={hideEyeIcon}  alt="eye" className={SignStyle.hide} style={{height:22}}  />
                              }
                              
                          </div>
                      </div>
                     </div>
                  
                    <button type="submit" className={`${SignStyle.login_btn}  btn `} >{t("sign_up")}</button>
                  </form>
                      <div>
                            {t("have_account")}
                            <NavLink to="/loginPage">  {t("login")}</NavLink>
                      </div>


                      <div className={`${SignStyle.google} ${SignStyle.log_with}`}>
                        <img  src={google} alt="google"/> {t("login_with_google")}
                      </div>
                      <div className={`${SignStyle.facebook}  ${SignStyle.log_with}`} onClick={loginWithFacebook}>
                        <img  src={facebook} alt="facebook"/>   {t("login_with_facebook")}
                      </div>
              </div>


          </div>
        
        </div>
        </section>
    )
}

export default SignUp