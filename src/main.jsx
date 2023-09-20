import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './components/Layout/Main.jsx';
import Home from './Components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Review from './components/Review/Review.jsx';
import Contact from './components/Contact/Contact.jsx';
import Grandpa from './components/Grandpa/Grandpa.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('tshirts.json')
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'review',
        element:<Review></Review>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      }
      ,
      {
        path:'grandpa',
        element:<Grandpa></Grandpa>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
