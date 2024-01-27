import React from 'react'
import './Login.scss'
import { google, logo } from '../../images/Images'
import AppleIcon from '@mui/icons-material/Apple';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord,faLinkedin,faTwitterSquare,faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router'; 
const Login = () => {
   const navigate = useNavigate();
  return (
    <section className='Login'>
      <div className="l-container">
        <div className="l-left">
          <div className="background"></div>
          <div className="l-data">
            <div className="l-logo">
              <img src={logo} alt="img" />
            </div>
            <div className="base-logo">
              <h1>BASE</h1>
            </div>
            <nav className="social-media">
              <ul>
                <li><FontAwesomeIcon icon={faGithub} /></li>
                <li><FontAwesomeIcon icon={faTwitterSquare} /></li>
                <li><FontAwesomeIcon icon={faLinkedin} /></li>
                <li><FontAwesomeIcon icon={faDiscord} /></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="l-right">
             <section className="l-header">
              <h1>Sign In</h1>
              <h4>Sign in to your account</h4>
            </section>
           <form className="login-form">
              <div className="l-social">
                <div className="l-google">
                  <img src={google} alt="google" />
                  <span>Sign in with Google</span>
                </div>
                <div className="l-apple">
                  <span><AppleIcon /></span>
                  <span>Sign in with Apple</span>
                </div>
              </div>
            <div className="l-email">
              <label htmlFor="">Email address</label>
              <input type="text" name="email" id="email" required/>
            </div>
            <div className="l-pass">
              <label htmlFor="">Password</label>
              <input type="password" name="password" id="password" required/>
            </div>
            <div className="submit">
            <h4>Forgot password?</h4>
            <button type="submit" id='Signin'  onClick={()=>{navigate('/home')}}>Sign In</button>
            </div>
            <div className="l-createAcc">
              <p>Don't have an account? <span>Register here</span></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
