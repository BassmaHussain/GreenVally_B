import React , {useState} from 'react'
import LoginStyle from '../css/login.module.css'
import { NavLink } from 'react-router-dom';

const PinCode = ()=>{
    // states
       const [pinCode,setPinCode]=useState('');

   
   


   return(
    <div className={`${LoginStyle.login_page} `}>
    <div className={`${LoginStyle.LContainer}    container`}>
    
      <div className={`${LoginStyle.login_form}   ${LoginStyle.OPT_container}`}>
          <div className={LoginStyle.content}>
          <h2>Reset Password</h2>
          
          <span className={`${LoginStyle.enter_span} ${LoginStyle.opt_title}`}>You will get a code</span>

          <form>
                  <div className="form-group">
                      <input type="text" className={`${LoginStyle.opt_input} form-control`} id="exampleInputEmail1" aria-describedby="emailHelp" value={pinCode} onChange={(e)=>setPinCode(e.target.value)} />
                  </div>

                  <NavLink to="/resetPass"><button type="button" className={`${LoginStyle.login_btn}  btn `} >Send</button></NavLink>
          </form>



          </div>
      </div>
    </div>
</div>
   )
}
export default PinCode;