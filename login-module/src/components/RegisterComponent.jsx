import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './styles/LoginRegistrationComponents.css';

const RegisterComponent = () => {
  const [mail, setMail]         = useState('');
  const [name, setName]         = useState('');
  const [phone, setPhone]       = useState('');
  const [password, setPassword] = useState('');
  const navigate                = useNavigate()

  async function handleSubmit (e) {
    const validation = document.getElementById('validation');
    e.preventDefault();
    if (passwordValidation(password) === true){      
      let userData = {

        "mail": mail,
        "name": name,
        "phone": phone,
        "password": password
      }  
      try{
          let response = await fetch('http://localhost:5000/users', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData)
          })
          let data     = await response.json()
          validation.innerText = data.message;
          if(data.success){
            setTimeout(() => {navigate('/')}, 3000)
          }
      } catch(error){
          console.log(error)
  
      }
      
    }
  }
  

  return (
      <div id="register-div" className='form-div'>
      <h1>Register and create Your Gallery</h1>
      <article> 
          <form  onSubmit={ handleSubmit }>
              <div className="form-group">
                <label htmlFor="mail">Mail: </label>
                <input type="mail" name="mail" id="mail" placeholder='name@mail.com' onChange={ e => setMail(e.target.value.toLowerCase()) } required/>
              </div>
              <div className="form-group">
                <label htmlFor="name">Full name: </label>
                <input type="text" name="name" id="name" placeholder='Firstname Lastname' onChange={ e => setName(e.target.value) } required/>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone number: </label>
                <input type="number" name="phone" id="phone" placeholder='070-123 45 67' onChange={ e => setPhone(e.target.value) } required/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={ e => setPassword(e.target.value) } required/>
              </div>
              <button>Register</button>
              <p id="validation"></p>

          </form>
          <section id="register">
                    <p>Already a user? </p>
                    <button onClick = { () => {navigate("/")} }>Login</button>
                    </section>
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

