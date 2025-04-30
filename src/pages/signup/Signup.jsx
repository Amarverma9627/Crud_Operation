import React, { useState } from 'react'
import styleSignup from './signup.module.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import { FaFacebookSquare } from "react-icons/fa";

const Signup = () => {
  let [signupUser, setSignupUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  let [verify, setverify] = useState(false);

  let navigate = useNavigate();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setSignupUser({ ...signupUser, [name]: value })
  }

  let handleSubmit = async (e) => {
    e.preventDefault();

    if (signupUser.username != '' && signupUser.email != '' && signupUser.password != '') {
      setverify(false);
      try {
        let response = await axios.post("http://localhost:8080/users", signupUser)
        console.log(response);
        toast.success('Successfully Sign up !')
        navigate("/login")
      } catch (error) {
        console.log("error while posting tha signupUser");
        toast.error("Login failed ? plz check details !");
      }
      //clearing input field
      setSignupUser({ username: '', email: "", password: "" });
    }
    else {
      setverify(true);
    }


  }

  return (
    <div id={styleSignup.signupWrapper}>
      <p className={styleSignup.head}>Sign up</p>
      <div className={styleSignup.signupContainer}>
        {/* ==========left-side========== */}

        <div className={styleSignup.signupLeft}>
          <h1>Welcome Back !</h1>
          <p>To keep connected with us please login with your personal info</p>
          <div>
            <Link to="/login"><button>SIGN IN</button></Link>
          </div>
        </div>

        {/* =============Right side========== */}
        <div className={styleSignup.signupRight}>
          <h1>Create Account</h1>
          <div className={styleSignup.icons}>
            <a href=""><FaFacebookSquare /></a>
            <a href="">😎</a>
            <a href="">😎</a>
          </div>
          <p>or use your email for registration</p>
          <form className={styleSignup.inputBox} onSubmit={handleSubmit}>
            <div>
              <input type="text" placeholder='Name' name='username' value={signupUser.username} onChange={handleChange} />
              {verify && <p>Enter tha username !</p>}
            </div>
            <div>
              <input type="text" placeholder='Email' name='email' value={signupUser.email} onChange={handleChange} />
              {verify && <p>Enter tha Email !</p>}
            </div>
            <div>
              <input type="password" placeholder='Password' name='password' value={signupUser.password} onChange={handleChange} />
              {verify && <p>Enter tha password !</p>}
            </div>
            <div>
              <button type="submit">SIGN UP</button>
            </div>
          </form>
        </div>

      </div>
    </div >
  )
}

export default Signup
