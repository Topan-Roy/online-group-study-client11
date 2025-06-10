import React from 'react';
import {createBrowserRouter,} from "react-router";
import RootLayout from '../Layout/RootLayout';
import Home from '../Pages/Home/Home';
import AuthLayout from '../Layout/AuthLayout';
import Login from '../Pages/Home/login/Login';
import Register from '../Pages/Register/Register';
export const router = createBrowserRouter([
  {
    path: "/",
   Component:RootLayout,
   children:[
    {
       index:true,
       Component:Home
    }
   ]
  },
  {
      path:"/auth",
      Component:AuthLayout,
      children:[
        {
          path:'/auth/login',
          Component:Login
        },
        {
          path:'/auth/register',
          Component:Register
        }
      ]
    },
    //  {
    //   path: "/*",
    //   Component:NotFoundPage
    // },
]);
