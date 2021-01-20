import React from 'react'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'
import instagram from '../images/instagram.png'
import '../signin.css'


function login(){
    document.getElementById("login").style.left='50px';
    document.getElementById("register").style.left='450px';
    document.getElementById("btn").style.left='0px';
    
}
function register(){
    document.getElementById("login").style.left='-400px';
    document.getElementById("register").style.left='50px';
    document.getElementById("btn").style.left='110px';
}


function SingIn(){

return ( 
    <div className='body'>
<div className="hero">
<div className="form-box">
    <div className="button-box">
        <div id="btn"></div>
         <button id='log' type="button" className="toggle-btn" onClick={login}>Log In</button>
         <button type="button" className="toggle-btn"  onClick={register} >Register</button>  
    </div>
    <div className="social-icons">
        <img src={facebook} alt=""></img>
        <img src={twitter}alt=""></img>
        <img src={instagram} alt=""></img>
        <img src={linkedin} alt=""></img>
    </div>
    <form id="login" className="input-group">
        <input type="text" className="input-field" placeholder="User Id" required />
        <input type="text" className="input-field" placeholder="Enter Password" required />
        <input type="checkbox" className="check-box" /><span>Remember Password</span>
        <button type="submit" className="submit-btn" >Log In</button>
    </form>
    <form id="register" className="input-group">
        <input type="text" className="input-field" placeholder="User Id" required />
        <input type="email" className="input-field" placeholder="Email" required />
        <input type="text" className="input-field" placeholder="Enter Password" required />
        <input type="checkbox" className="check-box" /><span>I agree to the terms & conditions</span>
        <button type="submit" className="submit-btn" >Register</button>
    </form>
</div>   
</div>
</div>

)

}


export default SingIn