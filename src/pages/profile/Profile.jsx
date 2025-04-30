import React, { useEffect, useState } from 'react'
import styleProfile from "../profile/profile.module.css"
import { useParams } from 'react-router-dom';
import { useApi } from '../../customHooks/CustomHooks';

const Profile = () => {

   let {id}=useParams();
   let user= useApi(`http://localhost:8080/users/${id}`)
  console.log(user);
  
  // let [products, setProducts] = useState(null);

  // async function getApiData() {
  //   let response = await fetch("https://fakestoreapi.com/products/")
  //   let res = await response.json();
  //   setProducts(res);
  //   console.log(res);
    
  // }
 let userApiData=useApi('https://fakestoreapi.com/products');
  // setProducts(userApiData)

  // useEffect(() => {
  //   getApiData()
  // }, []);

  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}> Hii {user?.username}, Welcome to your Profile...</h1>
      </div>
      <div>

      </div>
      <div id={styleProfile.itemWrapper}>
        {
          userApiData?.map((ele) => {
            let { id, title, category, image, price,rating, description } = ele;
            return (
              <section  key={id}>
                <img src={image} alt="imgg" /><br/>
                <h1>{id}</h1>
                <h3>Price : {price}</h3>
                <p style={{fontSize:"1.5rem",textTransform:"uppercase"}}>{category}</p>
                <p>{title}</p><br/>
              </section>
            )
          })
        }
      </div>
    </div>
  )
}

export default Profile
