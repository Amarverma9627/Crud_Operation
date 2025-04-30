import React, { Fragment } from 'react'
import styles from './navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import { IoMenu } from "react-icons/io5";
import axios from 'axios';

const Navbar = () => {
  let navigate=useNavigate();
  let id=localStorage.getItem("userid");

  let logout=()=>{
   localStorage.removeItem("userid")
   navigate("/login");
   toast.success("logout Successfull ")
  }

  let deleteProfile=async ()=>{
    let permission=confirm("Are you Sure !")
    
    if(permission){
      let res=await axios.delete(`http://localhost:8080/users/${id}`)
      console.log(res);

      if(res){
        toast.success("Profile Deleted")
        localStorage.removeItem("userid");
        navigate("/")
      }
      else{
        toast.error("Unable to delete !");
      }
    }
    
  }
// let update=()=>{
//   navigate("/update")

// }
  return (
    <div >
      <nav id={styles.navbar}>
       { 
        <h2>Logo</h2>
        }

       
        <ul>
          {
            id ? 
            <div className={styles.menu} >
              <IoMenu />
              <div className={styles.dropdown}>
                <li onClick={logout}>Logout</li>
                <li><Link  to={`/edit/${id}`}>update</Link></li>
                <li onClick={deleteProfile}>delete</li>
              </div>
            </div> 
            : 
            <Fragment> 
            <Link to="/login" >
              <li className={styles.signinbtn}>Login</li>
            </Link>
            <Link to="/" >
              <li className={styles.signupbtn}>Signup</li>
            </Link> 
            </Fragment>
          }
       
        </ul>
      </nav>
      
    </div>
  )
}

export default Navbar
