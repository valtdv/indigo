import React, { useContext } from 'react';
import { UserContext } from '../states/User';
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"
import "../assets/styles/components/TopMenu.css";

const TopMenu = () => {
  const { user } = useContext(UserContext)
  const name = user.name.split(' ')[0]

  return (
    <div className='top-menu'>
      <div className='top-menu__logo-container'>
        <img className='top-menu__logo' src={logo} alt='Indigo' />
      </div>
      <nav className='top-menu__nav nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <Link to="/home">Home</Link>
          </li>
          <li className='nav__item'>
            <Link to="/create">Create post</Link>
          </li>
        </ul>
      </nav>
      <div className='top-menu__greeting-container'>
        <p className='top-menu__greeting'>Hi, {name}</p>
      </div>
    </div>
  )
}

export default TopMenu;
