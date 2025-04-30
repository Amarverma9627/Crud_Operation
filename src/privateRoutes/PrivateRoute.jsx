import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {

    let id=localStorage.getItem("userid")
  return (
    <>
      {
        id ? <>{children}</> : <Navigate to={"/"}></Navigate>
      }
    </>
  )
}

export default PrivateRoute; 
