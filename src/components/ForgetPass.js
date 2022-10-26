import React , {useState} from 'react'
import { NavLink } from 'react-router-dom';
import LoginStyle from '../css/login.module.css'

const ForgetPass = ()=>{
    // states
       const [phone,setPhone]=useState('');

   
   


   return(
    <div className={`${LoginStyle.login_page} `}>
    <div className={`${LoginStyle.LContainer}    container`}>
    
      <div className={`${LoginStyle.login_form}   ${LoginStyle.OPT_container}`}>
          <div className={LoginStyle.content}>
          <h2>Reset Password</h2>
          <span className={`${LoginStyle.enter_span} ${LoginStyle.opt_title}`}>Enter your Phone</span>

          <form >
                  <div className="form-group">
                  <input type="text" className={`${LoginStyle.opt_input} form-control`} id="exampleInputEmail1" aria-describedby="emailHelp" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                  </div>

                  <NavLink to="/pin"><button type="button" className={`${LoginStyle.login_btn}  btn `} >Send</button></NavLink>
          </form>



          </div>
      </div>
    </div>
</div>
   )
}
export default ForgetPass;