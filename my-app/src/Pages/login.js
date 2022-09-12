import React, { useState } from 'react';

import Email from '../images/email.png';
import padlock from '../images/padlock.png';

import loginphoto from '../images/lo.png';
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const submission = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = res.json();
    if (!data) {
      console.log("not found")
    } else {
      
      history("/about");
    }

  };



  return <>

    <div className='div'>
      <div className='divvv'>

        <form method='POST' onSubmit={submission}>

          <div className='div1'>
            <h2>Login</h2>

          </div>



          <div className='div1'>
            <label><img id='img' src={Email}></img>
              <input type="email"
                name='email'

                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                id='email'
                required


              >
              </input>
            </label>
          </div>



          <div className='div1'>
            <label><img id='img' src={padlock}></img>
              <input type="password"
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                minLength={6}
                id='password'
                required


              >
              </input>
            </label>
          </div>
          <button type='submit'>Login</button>
        </form>

      </div>

      <div className='divvvimage'>
        <img id='imgl' src={loginphoto}></img>
        <Link to="/signup" style={{ textDecoration: 'none' }}><p id='p'>Create Account</p></Link>

      </div>
    </div>
  </>

}
export default Login;