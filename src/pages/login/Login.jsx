import React, { useState } from 'react'
import stylelogin from './login.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useApi } from '../../customHooks/CustomHooks'
import toast from 'react-hot-toast'
const Login = () => {

  //returns NavigateFunction , helps to navigate between copmonent Programatically
  let Navigate = useNavigate();

  let [signinUser, setSigninUser] = useState({
    email: '',
    password: '',
  });
 

  //Custom Hook Api
  let ALlSignupData = useApi("http://localhost:8080/users");
  console.log(ALlSignupData);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setSigninUser({ ...signinUser, [name]: value })
  }
  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signinUser);

    //we can use tha find method (but it return undefine details no match) instead of some method (it return true /false)  
    let authUser = ALlSignupData.find((ele) => {
      return ele.email === signinUser.email && ele.password === signinUser.password
    });
    console.log(authUser);

    if (authUser) {
      toast.success(' Welcome your Profile ☺')

      //navigate  Profile.jsx
      Navigate(`/profile/${authUser.id}`)
      //authuser id save localstorage
      localStorage.setItem("userid", authUser.id)
    } else {
      toast.error("Login failed plz check details !")
      //navigate Signup.jsx
      Navigate("/")
    }

  }
  return (
    <div id={stylelogin.signupWrapper}>
      <p className={stylelogin.head}>Sign in {signinUser.value}</p>
      <div className={stylelogin.signupContainer}>
        {/* =============Left side========== */}
        <div className={stylelogin.signupRight}>
          <h1>Sign in</h1>
          <div className={stylelogin.icons}>
            <a href="">😎</a>
            <a href="">😎</a>
            <a href="">😎</a>
          </div>
          <p>or use your account</p>
          <form className={stylelogin.inputBox} onSubmit={handleSubmit}>
            <div>
              <input type="email" placeholder='Email' name='email' value={signinUser.email} onChange={handleChange} />
            </div>
            <div>
              <input type="password" placeholder='Password' name='password' value={signinUser.password} onChange={handleChange} />
            </div>
            <div>
              <p>Forget your password?</p><br />
              <button type='submit'>SIGN IN</button>
            </div>
          </form>

        </div>

        {/* =======Right-side====== */}
        <div className={stylelogin.signupLeft}>
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <div>
            <Link to="/"> <button>SIGN UP</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
