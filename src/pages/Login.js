import React, { useContext } from 'react';
import { UserContext } from '../states/User';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import logo from "../assets/images/logo.png"
import "../assets/styles/pages/Login.css"

const Login = () => {
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate();

  const loginUser = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const data = res.data;
        const id = Math.floor(Math.random() * 10);
        const userData = data[id];
        setUser(userData)
        
        const path = '/home'; 
        navigate(path);
      })
  }

  return (
    <div className='login'>
      <img className='login__img' src={logo} alt='Indigo' />
      <hr className='login__underline' />
      <button className='login__btn btn' onClick={loginUser}>Login</button>
    </div>
  )
}

export default Login;
