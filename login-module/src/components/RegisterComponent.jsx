import React, { Component } from 'react'
import './styles/form.css';

export class RegisterComponent extends Component {
  render() {
    return (
        <div id="register-div" className='holding-form'>
        <h1>Register and create Your Gallery</h1>
        <article> 
            <form action="">
                <div className="form-group">
                  <label htmlFor="email">Mail: </label>
                  <input type="email" name="email" id="email" placeholder='name@mail.com'/>
                </div>
                <div className="form-group">
                  <label htmlFor="full-name">Full name: </label>
                  <input type="text" name="full-name" id="full-name" placeholder='Firstname Lastname' />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone number: </label>
                  <input type="number" name="phone" id="phone" placeholder='070-123 45 67'/>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password: </label>
                  <input type="password" name="password" id="password" />
                </div>
                <button>Register</button>

            </form>
        </article>
    </div>
    )
  }
}

export default RegisterComponent

