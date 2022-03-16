import React from 'react'
import {useLocation, useNavigate, Link} from 'react-router-dom'
import './styles/WorkspaceStyles.css';

const Workspace = () => {
  const location  = useLocation();
  const navigate  = useNavigate();

  if(location.state && location.state.loggedIn){
    return (
      <div id="wrapper">
        <h1 className="welcome-title">Welcome {location.state.name}!</h1>
        <article id="workspace">
          <section>
            <h2>Things to do:</h2> 
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae mollitia minus numquam suscipit ducimus aliquid, dolores quas molestiae delectus ipsa, magnam quos, autem pariatur enim necessitatibus voluptas neque tempore accusantium.
            </p>
          </section>
          <section>
            <h2>Apps:</h2> 
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae mollitia minus numquam suscipit ducimus aliquid, dolores quas molestiae delectus ipsa, magnam quos, autem pariatur enim necessitatibus voluptas neque tempore accusantium.
            </p>
          </section>
          <section>
            <h2>Upcoming meetings:</h2> 
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae mollitia minus numquam suscipit ducimus aliquid, dolores quas molestiae delectus ipsa, magnam quos, autem pariatur enim necessitatibus voluptas neque tempore accusantium.
            </p>
          </section>
          <section>
            <h2>Todays schedule:</h2> 
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae mollitia minus numquam suscipit ducimus aliquid, dolores quas molestiae delectus ipsa, magnam quos, autem pariatur enim necessitatibus voluptas neque tempore accusantium.
            </p>
          </section>
        </article>
      </div>
    )

  }else{
    return(
      <div id="error">
        <h1>Oops!</h1>
        <p>You are not logged in! Please visit <Link to='/'>this page</Link> and login before trying to reach this page </p>
      </div>
    )
  }
}

export default Workspace