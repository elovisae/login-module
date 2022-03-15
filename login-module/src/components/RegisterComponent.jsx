import React, { useState } from 'react'
import './styles/LoginRegistrationComponents.css';

const RegisterComponent = () => {
  const [mail, setMail]         = useState('');
  const [name, setName]         = useState('');
  const [phone, setPhone]       = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let validation = passwordValidation(password)
    if (validation === true){
      console.log(mail, name, phone, password)
      let data = {name: name, mail: mail, phone: phone, password: password}
      console.log(data)
    }
    fetch('http://localhost:')
    
  }
  

  return (
      <div id="register-div" className='form-div'>
      <h1>Register and create Your Gallery</h1>
      <article> 
          <form onSubmit={ handleSubmit }>
              <div className="form-group">
                <label htmlFor="mail">Mail: </label>
                <input type="mail" name="mail" id="mail" placeholder='name@mail.com' onChange={ e => setMail(e.target.value) }/>
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

const passwordValidation = (password) =>{ 
  const errors = []
  if (password.length < 8){
   errors.push('Password must be at least 8 characters');
  }
  if (password.search(/[a-z]/i) < 0){
    errors.push('Password must contain at least one letter');
  }
  if (password.search(/[0-9]/) < 0) {
    errors.push("Your password must contain at least one digit."); 
  }
  if (errors.length > 0) {
    alert(errors.join("\n"))
    return false
  }
  return true
  
}

export default RegisterComponent

