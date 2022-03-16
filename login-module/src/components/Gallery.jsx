import React from 'react'
import {useLocation, useNavigate, Link} from 'react-router-dom'

const Gallery = () => {
  const location  = useLocation();
  const navigate  = useNavigate();

  if(location.state && location.state.loggedIn){
    return (
      <div>
        <h1>Welcome {location.state.name}!</h1>
      </div>
    )

  }else{
    return(
      <div>
        <h1>Oops!</h1>
        <p>You are not logged in! Please visit <Link to='/'>this page</Link> and login before trying to reach this page </p>
      </div>
    )
  }
}

export default Gallery