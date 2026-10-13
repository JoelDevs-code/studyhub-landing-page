
// import { useState } from "react";
// import {Link } from 'react-router-dom';
import '../App.css'; import '../dist/style.css'; 
import '../css/auth.css'

import '../assets/fonts/flaticon/css/all.css';
import '../assets/fonts/flaticon/css/all.min.css';
import '../assets/fonts/flaticon/icomoon/style.css'

function signin() {
  
  return (
    <>
    <div className='auth-flow-col flex flex-col gap-1 items-center justify-center'>
      <div className="form-welcome-col">
        <h2 className='text-xl font-bold'>Login to Dashboard</h2>
      </div>
      <div className="form-information-col">
      </div>
      <form action="" className='sign-in flex flex-col gap-1 shadow'>
        
        <div className="input-col-wrap w-full flex flex-col gap-1">
          <div className="input-col flex gap-5 flex-col">
            <label htmlFor="">Email Adress<em>*</em></label>
            <input type="email" name="" id="" placeholder='mail@example.com' required/>
          </div>
          <div className="input-col flex gap-5 flex-col">
            <label htmlFor="">Enter Password<em>*</em></label>
            <input type="text" name="" id="" placeholder='***/22/000,' required />
          </div>
        </div>

        <div className="input-col-wrap w-full flex flex-wrap gap-1">
          <button className='submit-btn bg-blue-500 text-white' id='submitBtn'>Sign In</button>
        </div>

        <span>Don't have an account? <a href="/signup" className='text-blue-500'>Sign Up</a></span>

      </form>
    </div>
    </>
  )
}

export default signin