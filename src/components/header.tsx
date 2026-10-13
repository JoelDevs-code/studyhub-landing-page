
// import { useState } from "react";
// import {Link } from 'react-router-dom';
import '../App.css'; import '../dist/style.css';

import '../assets/fonts/flaticon/css/all.css';
import '../assets/fonts/flaticon/css/all.min.css';
import '../assets/fonts/flaticon/icomoon/style.css'

import menu from "../assets/images/Hamburger Menu.png"


function header() {
  
  const navList = [
    {list: "About", url: "#about",},
    {list: "Operations", url: "#operations",},
    {list: "Faqs", url: "#faqs",},
  ]

  function toggleNav(){
    const mainNav = document.getElementById("mainNav");
    // const navLink = document.getElementById("navLink");
    mainNav?.classList.toggle("main--navigation-open")
  }
  function goHome(){window.location.href = "/";}
  function signIn(){window.location.href = "/signin";}

  return (
    <>
      <section className='main--header bg-white w-full' aria-label='main header' id='mainHeader'>
        <div className="main--header-col w-full flex items-center justify-between" data-aos="fade-down">
          <div className="main--logo flex items-center gap-5 cursor-pointer" onClick={goHome}>
            <i className="fa fa-graduation-cap text-blue-500 fa-bounce"></i>
            <h4 className='text-blue-900 font-bold'>StudyHub</h4>
          </div>
          <nav className="main--navigation" id='mainNav'>
            <ul className='flex gap-4'>
              {
                navList.map((navlist, index)=>(
                  <li className='' key={index}>
                    <a id='navLink' href={navlist.url}><span>{navlist.list}</span></a>
                  </li>
                ))
              }
            </ul>
          </nav>
          <div className='flex items-center gap-5'>
            <button className='sign-btn gap-1 bg-blue-500 text-white' onClick={signIn}>
              <span>Sign In</span> <i title='Sign In' className='fa-regular fa-user fa-shake'></i>
            </button>
            <div className='menu-btn cursor-pointer' onClick={toggleNav}><img src={menu}/></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default header