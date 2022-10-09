import React, { useState } from "react";
import LoginStyle from '../css/login.module.css'
import eyeIcon from "../images/icons8-eye-30.png"
import hideEyeIcon from "../images/invisible.png"
import google from "../images/search.png"
import facebook from "../images/facebook.png"
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux"

const Login =()=>{
  const [passShow,setPassShow] =useState(false)
  const [logedPhone,setLogedPhone]=useState('')
  const [logedPass,setLogedPass]=useState('')
  const [type, setType]= useState("password")


  const userData = useSelector((state)=> state.userReducer)

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

  const submitLogin = (e)=>{
       e.preventDefault();
       if(logedPhone === userData.phone && logedPass === userData.password){
           console.log("login Success")
           console.log(userData)
       } else{
          console.log("login Faild")
          console.log(userData)
       }    
  }

    return(
        <div className={LoginStyle.login_page}>
          <div className={`${LoginStyle.LContainer} container`}>
          
            <div className={LoginStyle.login_form}>
                <div className={LoginStyle.content}>
                    <h2>Login</h2>
                    <span className={LoginStyle.enter_span}>Enter your number and password</span>

                    <form onSubmit={(e)=>{submitLogin(e)}}>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Phone</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={logedPhone} onChange={(e)=>setLogedPhone(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <div className="d-flex " >
                        <input type={type} className="form-control d-inline-block" id="exampleInputPassword1" value={logedPass} onChange={(e)=>setLogedPass(e.target.value)} />
                            <div className={LoginStyle.eye}  onClick={handlePassword}>
                                {
                                  (passShow)? 
                                  <img src={eyeIcon}  alt="eye" className={LoginStyle.show} style={{height:22}} /> :
                                  <img src={hideEyeIcon}  alt="eye" className={LoginStyle.hide} style={{height:22}}  />
                                }
                                
                            </div>
                        </div>
                       </div>
                    
                      <button type="submit" className={`${LoginStyle.login_btn}  btn `}>Login</button>
                    </form>
                        <div>
                              Don't have an account ?
                              <NavLink to="/signUpPage">Sign Up</NavLink>
                        </div>


                        <div className={LoginStyle.forget}>
                           <a href="!#">Forget your password ?</a>
                        </div>

                        <div className={`${LoginStyle.google} ${LoginStyle.log_with}`}>
                          <img  src={google} alt="google"/> Login with Google
                        </div>
                        <div className={`${LoginStyle.facebook}  ${LoginStyle.log_with}`}>
                          <img  src={facebook} alt="facebook"/>  Login with facebook
                        </div>
                </div>


            </div>
          
          </div>
          </div>
    )
}

export default Login;