import React from 'react';
import FormGroup from '../components/FormGroup/FormGroup';
import { Link } from "react-router-dom";
import "./Login.css";
import { useUsuario } from '../Context/UserContext';


function Login() {

  const [user, setUser] = useUsuario();

  console.log(setUser)
  return (
    <>
      <div className='loginWrapper container text-center'>
        <div className="form">
          <h1 className='welcomeTitle' data-aos="fade-left">Welcome back! <br /> <span className='text-white'>Login</span> </h1>
          <FormGroup set={setUser} />
          <br />
          <hr />
          <div className='registerContainer'>
            <h2 className='welcomeTitle' data-aos="fade-right">Are you not registered yet?</h2>
            <Link to="/register" className="btn registerBtn mx-auto justify-content-end">Register Now</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
