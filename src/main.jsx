import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github,{githubInfoLoader} from './Components/Github/Github.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path:'/',
        element:<Home/>
        
      },
      {
        path:'About',
        element:<About/>
      },
      {
        path:'Contact',
        element:<Contact/>
      },
      {
        path:'User/:userId',
        element:<User/>
      },
      {
        path:'github',
        element:<Github />,
        loader:githubInfoLoader
        
      }
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

   
  </React.StrictMode>,
)
