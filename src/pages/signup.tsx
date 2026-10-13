
// import { useState } from "react";
// import {Link } from 'react-router-dom';
import '../App.css'; import '../dist/style.css'; 
import '../css/auth.css'

import '../assets/fonts/flaticon/css/all.css';
import '../assets/fonts/flaticon/css/all.min.css';
import '../assets/fonts/flaticon/icomoon/style.css'

import imgProf from "../assets/images/xc.png"

function signup() {
  
  return (
    <>
    <div className='auth-flow-col flex flex-col gap-1'>
      <div className="form-welcome-col">
        <h2 className='text-xl font-bold'>Welcome to studyHub</h2>
      </div>
      <div className="form-information-col">
      </div>
      <form action="" className='flex flex-col gap-1 shadow'>
        <div className="upload-pic-col flex items-center gap-3 flex-wrap">
          <div className="upload-pic-img"><img src={imgProf} draggable="false"/></div>
          <div className="upload-pic-txt">
            <ul>
              <h5>Instructions:</h5>
              <li>Image size should be less than 2MB</li>
              <li>Image must have white background</li>
              <li>Image resolution should be 600x800 px</li>
            </ul>
            <input type="file" className='uploadImg' id="" placeholder='Upload Image' />
          </div>
        </div>
        <div className="input-col-wrap w-full flex flex-wrap gap-1">
          <div className="input-col flex gap-5 flex-col">
            <label htmlFor="">Full Name<em>*</em></label>
            <input type="text" name="" id="" placeholder='Last Name, First Name,' required/>
          </div>
          <div className="input-col flex gap-5 flex-col">
            <label htmlFor="">Matric Number<em>*</em></label>
            <input type="text" name="" id="" placeholder='***/22/000,' required />
          </div>
        </div>

        <div className="input-col-wrap w-full flex flex-wrap gap-1">
          <div className="input-col flex gap-5 flex-col">
            <label htmlFor="">Select Institution<em>*</em></label>
            <select name="" id="institution" required></select>
          </div>
          <div className="input-col flex gap-5 flex-col">
            <label htmlFor="">Select Department<em>*</em></label>
            <select name="" id="institution" required></select>
          </div>
        </div>

        <div className="input-col-wrap w-full flex flex-wrap gap-1">
          <div className="input-col flex gap-5 flex-col">
            <label htmlFor="">Email Address<em>*</em></label>
            <input type="email" name="" id="" placeholder='example@mail.com' required />
          </div>
          <div className="input-col flex gap-5 flex-col">
            <label htmlFor="">Create Passowrd<em>*</em></label>
            <select name="" id="institution"></select>
          </div>
        </div>

        <div className="input-col-wrap w-full flex flex-wrap gap-1">
          <div className="input-col flex gap-5 flex-col">
            <label htmlFor="">Select Level<em>*</em></label>
            <select name="" id="institution"></select>
          </div>
          <button className='submit-btn bg-blue-500 text-white' id='submitBtn'>submit</button>
        </div>

        <span>Already have an account? <a href="/signin" className='text-blue-500'>Sign In</a></span>

      </form>
    </div>
    </>
  )
}

export default signup