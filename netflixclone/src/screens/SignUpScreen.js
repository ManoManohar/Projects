import React, { useRef } from 'react';
import './singupscreen.css'; // Corrected filename
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // Corrected import for Firebase authentication methods

const SignUpScreen = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((authUser) => {
                console.log(authUser);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((authUser) => {
                console.log(authUser);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder='Email' /> {/* Corrected placeholder */}
                <input ref={passwordRef} type="password" placeholder='Password' /> {/* Corrected placeholder */}
                <div className="signupScreen__buttons">
                <button type='submit' onClick={register}>Sign Up</button>
                <button type='submit' onClick={signIn}>Log In</button>
                </div>
               
                <h4>
                    <span className='signupScreen__gray'>New to Netflix?</span>
                    <span className='signupScreen__link'onClick={register} > Sign Up Now</span>
                </h4>
            </form>
        </div>
    );
}

export default SignUpScreen;
