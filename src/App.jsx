import React from 'react'
import Navbar from './Componants/navbar/Navbar'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'

import { RouterProvider } from 'react-router-dom'
import { myRoutes } from './router/Router'

const App = () => {

  return (
    <div> 
     <RouterProvider  router={myRoutes}>
    
     </RouterProvider>
    </div>
  )
}

export default App
