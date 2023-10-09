import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root';
import Home from './Components/Home';
import Errorpage from './Components/Errorpage';
import Login from './Components/Login';
import AuthProvider from './Components/AuthProvider';
import Register from './Components/Register';
import EventsDetails from './Components/EventsDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/Data.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/event/:id",
        element: <EventsDetails></EventsDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>  
</React.StrictMode>,
)
