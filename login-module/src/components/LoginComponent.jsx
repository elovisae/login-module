import React, { Component } from 'react'
import './styles/loginComponent.css'

export class LoginComponent extends Component {
  render() {
    return (
      <div>
          <h1>Login to Your Gallery</h1>
          <article> 
              <form action="">
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
              <p>Don't have an account?</p>
              <button>Register now!</button>
                  
              </section>
          </article>
      </div>
    )
  }
}

export default LoginComponent