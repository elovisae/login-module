import React, { Component } from 'react';
import './styles/LoginRegistrationComponents.css';
import RegisterComponent from './RegisterComponent';

const LoginComponent = () => {
    const handleClick =() =>{
        console.log("button onclick is working and connected w func")
    }

    return (
        <div id="holder">
            <div id="login-div" className="form-div">
                <h1>Login to Your Gallery</h1>
                <article> 
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Mail: </label>
                                <input type="email" name="email" id="email"/>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password: </label>
                                <input type="password" name="password" id="password" />
                            
                        </div>
                        <button>Sign in</button>

                    </form>
                    <section id="register">
                    <p>Don't have an account? </p>
                    <button onClick = { handleClick }>Register now!</button>
                        
                    </section>
                </article>
            </div>
      </div>
    )
}

export default LoginComponent;


