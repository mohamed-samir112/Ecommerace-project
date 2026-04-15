import React, { useContext } from 'react'
import { Link, Links, NavLink } from 'react-router-dom'
import Logo from '../../img/logo.png'
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import './header.css';
import { CardContext } from '../context/CardContext';
import SearchBox from './SearchBox';

export default function Topheader() {
    const {cardItems,favorites}= useContext(CardContext)


  return (
    <div className='top-header'>
        <div className="container">
        <Link className='logo' to='/'><img src={Logo} alt="logo" /></Link>
        <SearchBox/>
        <div className="header-icons">
            <div className="icon">
                <CiHeart />
                <span className='count'>{favorites.length}</span>
            </div>
            <div className="icon">
                <Link to="/card">
                <CiShoppingCart />
                <span className='count'>{cardItems.length}</span>
                </Link>
            </div>
        </div>

        </div>
    </div>
  )
}
