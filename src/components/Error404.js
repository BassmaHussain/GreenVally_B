import React from 'react'
import { NavLink } from 'react-router-dom';


const Error404 =()=>{
    const headingStyle ={
            background:'#ef4824',
            width:'350px',
            height:'250px',
            color:'#fff',
            margin:'100px auto 20px auto',
            display:'flex',
            alignItems:'center',
            justifyContent:"center",
            borderRadius:'15px'
            
        }
    const linkStyle={
        color:'#fff',
        backgroundColor:'#5b5a5a',
        borderRadius:'5px',
        width:'200px',
        padding:'13px 0',
        fontSize:'20px',
        margin:'auto'
    }


      return(
        <div>
           <div className="container text-center">
                    <div  style={headingStyle}>
                          <h1 style={{fontSize: '100px'}}>404</h1>
                    </div>
                    <p style={{fontSize:'40px',color:'#606060'}}>PAGE NOT FOUND</p>
                    <NavLink to="/" style={linkStyle}>Back To Home</NavLink>
           </div>
        </div>
      )
}

export default Error404;