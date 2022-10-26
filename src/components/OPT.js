import React , {useState} from 'react'
import { NavLink } from 'react-router-dom';
import LoginStyle from '../css/login.module.css'

const OPT = ()=>{
    // states
       const [phone,setPhone]=useState('');

   
   


   return(
    <div className={`${LoginStyle.login_page} `}>
    <div className={`${LoginStyle.LContainer}    container`}>
    
      <div className={`${LoginStyle.login_form}   ${LoginStyle.OPT_container}`}>
          <div className={LoginStyle.content}>
          <h2>OPT</h2>
          <span className={`${LoginStyle.enter_span} ${LoginStyle.opt_title}`}>You will get a code</span>

          <form >
                  <div className="form-group">
                       <input type="text" className={`${LoginStyle.opt_input} form-control`} id="exampleInputEmail1" aria-describedby="emailHelp" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                  </div>

                  <button type="submit" className={`${LoginStyle.login_btn}  btn `} >Send</button>
          </form>



          </div>
      </div>
    </div>
</div>
   )
}
export default OPT;