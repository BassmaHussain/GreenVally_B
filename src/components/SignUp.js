import React ,{useState}from "react"
import SignStyle from "../css/login.module.css"
import Style from "../css/signUp.module.css"
import eyeIcon from "../images/icons8-eye-30.png"
import hideEyeIcon from "../images/invisible.png"
import google from "../images/search.png"
import facebook from "../images/facebook.png"
import {useSelector , useDispatch} from "react-redux"
import { NavLink } from "react-router-dom"

const SignUp = ()=>{
    const [passShow,setPassShow] =useState(false)
    const [type, setType]= useState("password")


    const userData = useSelector((User)=> User)
    const dispatch = useDispatch();

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
  
    return(
        <div className={SignStyle.login_page}>
        <div className={`${SignStyle.LContainer} container`}>
        
          <div className={SignStyle.login_form}>
              <div className={`${SignStyle.content} ${Style.content}`} >
                  <h2>Sign Up</h2>
                  <span className={SignStyle.enter_span}>Enter your required data to enjoy the services</span>

                  <form onSubmit={(e)=>{e.preventDefault(); console.log(userData)}}>

                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">First Name</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userData.firstName} onChange={(e)=>makeAction("FIRSTNAME",e.target.value)} />
                    </div>


                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Last Name</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userData.lastName} onChange={(e)=>makeAction("LASTNAME",e.target.value)} />
                    </div>


                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Phone</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userData.phone} onChange={(e)=>makeAction("PHONE",e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
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
                  
                    <button type="submit" className={`${SignStyle.login_btn}  btn `} >Login</button>
                  </form>
                      <div>
                            Do you have an account ?
                            <NavLink to="/loginPage">Login</NavLink>
                      </div>


                      <div className={`${SignStyle.google} ${SignStyle.log_with}`}>
                        <img  src={google} alt="google"/> Login with Google
                      </div>
                      <div className={`${SignStyle.facebook}  ${SignStyle.log_with}`}>
                        <img  src={facebook} alt="facebook"/>  Login with facebook
                      </div>
              </div>


          </div>
        
        </div>
        </div>
    )
}

export default SignUp