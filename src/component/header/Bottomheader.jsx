import React, { useEffect, useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { PiSignInBold } from "react-icons/pi";
import { HiMiniUserPlus } from "react-icons/hi2";
import './header.css';


export default function Bottomheader() {
  const navLinks =[
    {tittle:"Home", link:'/'},
    {tittle:"About", link:'/about'},
    {tittle:"Accessories", link:'/accessories'},
    {tittle:"Blog", link:'/blog'},
    {tittle:"Contact", link:'/contact'}
  ]
  const[categories ,setCategories]= useState([]);
  useEffect(()=>{
    fetch('https://dummyjson.com/products/categories')
    .then((res)=>res.json())
    .then((data)=>setCategories(data))
  }, [])
  const location = useLocation ;
  const [isCategoryOpen,setisCategoryOpen]=useState(false);
  return (
    <div className='btm-header'>
      <div className="container">
        <nav className="nav">
            <div className="category-nav">
                <div className="category-btn" onClick={()=>setisCategoryOpen(!isCategoryOpen)}>
                    <MdOutlineMenu/>
                    <p>Browse Category</p>
                    <IoMdArrowDropdown />
                </div>
                <div className={`category-nav-list ${isCategoryOpen ? "active": ""}`} >
                    {categories.map((category)=>(
                      <Link  key={category.slug} to={`category/${category.slug}`}>{category.name}</Link>
                    ))}
                </div>
            </div>
            <div className="nav-links">
              {navLinks.map((item)=>(
              <li  key={item.link}className={location.pathname === item.link ? "active": ""}><Link to={item.link}>  {item.tittle}  </Link></li>
              ))}
            </div>
        </nav>
        <div className="sign-regs-icon">
          <PiSignInBold />
          <HiMiniUserPlus />
        </div>
      </div>
      
      
    </div>
  )
}
