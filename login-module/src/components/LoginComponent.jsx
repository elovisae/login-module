import React from 'react';
import './styles/LoginRegistrationComponents.css';
import {useNavigate} from 'react-router-dom';
import RegisterComponent from './RegisterComponent';

const LoginComponent = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <div id="holder">
            <div id="login-div" className="form-div">
                <h1>Login to Your Gallery</h1>
                <article> 
                    <form onSubmit={ handleSubmit }>
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
                    <button onClick = { () => {navigate("/register")} }>Register now!</button>
                        
                    </section>
                </article>
            </div>
      </div>
    )
}

export default LoginComponent;


