import React, { useState } from 'react';
import './styles/LoginRegistrationComponents.css';
import {useNavigate} from 'react-router-dom';

const LoginComponent = () => {
    const [mail, setMail]           = useState('');
    const [password, setPassword]   = useState('');
    const navigate                  = useNavigate();
    
    async function handleSubmit (e) {
        e.preventDefault();
        if(mail === '' || password === ''){
            alert('You must write both mail and password before trying to login')
        }else{

            const validation  = document.getElementById('validation');
    
            let userData = {
                "mail": mail,
                "password": password
            } 
            try {
                let response = await fetch('http://localhost:5000/users/login', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(userData)
              })
              let data     = await response.json()
              
              validation.innerText = data.message;
              if (data.loggedIn){
                  setTimeout(() => {
                          navigate('/workspace',
                          {state: {loggedIn: true, name: data.name}}, 1500)
                      }
                  )
              }
        
                
    
            } catch (error) {
                console.log(error)
            }
        }
        
    }
    return (
        <div id="holder">
            <div id="login-div" className="form-div">
                <h1>Login to your workspace</h1>
                <article> 
                    <form onSubmit={ handleSubmit }>
                        <div className="form-group">
                            <label htmlFor="mail">Mail: </label>
                            <input type="mail" name="mail" id="mail" onChange={e => setMail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password: </label>
                            <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)}/> 
                        </div>
                        <button>Sign in</button>
                        <p id="validation" className="bolder"></p>

                    </form>
                    <section id="register">
                    <p className="bolder">Don't have an account? </p>
                    <button onClick = { () => {navigate("/register")} }>Register now!</button>
                        
                    </section>
                </article>
            </div>
      </div>
    )
}

export default LoginComponent;


