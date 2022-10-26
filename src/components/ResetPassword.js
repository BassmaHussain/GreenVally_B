import React , {useState} from 'react'
import { NavLink } from 'react-router-dom';
import LoginStyle from '../css/login.module.css'

const ResetPassword = ()=>{
    // states
       const [password,setPassword]=useState('');
       const [newPassWord,setNewPassWord]= useState('');

   
   


   return(
    <div className={`${LoginStyle.login_page} `}>
    <div className={`${LoginStyle.LContainer}    container`}>
    
      <div className={`${LoginStyle.login_form}   ${LoginStyle.OPT_container}`}>
          <div className={LoginStyle.content}>
          <h2>Reset Password</h2>

          
          <span className={`${LoginStyle.enter_span} ${LoginStyle.opt_title}`}>Enter your Phone</span>


          <form>
                  <div className="form-group">
                       <input type="password" className={`${LoginStyle.opt_input} form-control`}  aria-describedby="emailHelp" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder=" Password"/>
                       <input type="password" className={`${LoginStyle.opt_input} form-control`}  aria-describedby="emailHelp" value={newPassWord} onChange={(e)=>setNewPassWord(e.target.value)}  placeholder=" New Password" />
                  </div>

                  <button type="button" className={`${LoginStyle.login_btn}  btn `} >Submit</button>
          </form>



          </div>
      </div>
    </div>
</div>
   )
}
export default ResetPassword;