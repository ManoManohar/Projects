import React, { useState } from 'react'
import './loginscree.css'
import SignUpScreen from './SignUpScreen';
const LoginScreen = () => {

    const[signIn,setSignIn]=useState(false);

  return (
    <div className='loginScreen'>
       
      <div className="loginScreen__background">
        <img className='loginScreen__logo' src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png" alt="" />
        <button className='loginScreen__button' onClick={()=>setSignIn(true)}>
            Sign in
        </button>

        <div className="loginScreen__gradient"></div>
      </div>
      <div className="loginScreen__body">
      {signIn ? 
    <SignUpScreen/>:(
        <>
        <h1>Unlimited films ,TV programmes and more.</h1>
        <h2>Watch anywhere ,Cancel at any time</h2>
        <h3>Ready to Watch?Enter yyour eamil to create or restart your membership</h3>
        <div className="loginScreen__input">
            <form>
                <input type="email" placeholder='Email Adress'  />
                <button className='loginScreen__getStarted' onClick={()=>setSignIn(true)}>Get Started</button>
            </form>
        </div>
        </>
    )    
    }
        
      </div>
    </div>
  )
}

export default LoginScreen
