import React, { useState } from 'react'
import './styles/LoginRegistrationComponents.css';

const RegisterComponent = () => {
  const [mail, setMail]         = useState('');
  const [name, setName]         = useState('');
  const [phone, setPhone]       = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mail, name, phone, password)
  }
  return (
      <div id="register-div" className='form-div'>
      <h1>Register and create Your Gallery</h1>
      <article> 
          <form onSubmit={ handleSubmit }>
              <div className="form-group">
                <label htmlFor="email">Mail: </label>
                <input type="email" name="email" id="email" placeholder='name@mail.com' onChange={ e => setMail(e.target.value) }/>
              </div>
              <div className="form-group">
                <label htmlFor="full-name">Full name: </label>
                <input type="text" name="full-name" id="full-name" placeholder='Firstname Lastname' onChange={ e => setName(e.target.value) }/>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone number: </label>
                <input type="number" name="phone" id="phone" placeholder='070-123 45 67' onChange={ e => setPhone(e.target.value) }/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={ e => setPassword(e.target.value) }/>
              </div>
              <button>Register</button>

          </form>
      </article>
  </div>
  )
}

export default RegisterComponent

