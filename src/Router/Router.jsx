import React from 'react';
import { createBrowserRouter, } from "react-router";
import RootLayout from '../Layout/RootLayout';
import Home from '../Pages/Home/Home';
import AuthLayout from '../Layout/AuthLayout';
import Login from '../Pages/Home/login/Login';
import Register from '../Pages/Register/Register';
import AllAssignments from '../Pages/AllAssignments/AllAssignments';
import PrivetRoute from '../Layout/PrivetRoute';
import CreateAssignment from '../Pages/CreateAssignment/CreateAssignment';
import ViewAssignment from '../Pages/AllAssignments/ViewAssignment';
import UpdateAssignment from '../Pages/AllAssignments/UpdateAssignment';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import MyAssignments from '../Pages/Myassignment/MyAssignments';
import PendingAssignments from '../Pages/PendingAssignments/PendingAssignments';
import Loading from '../Pages/Loading/Loading';
import AboutUs from '../Pages/AboutUs/AboutUs';
import DashboardLayout from '../Layout/DashboardLayout';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/createAssignment',
        element: <PrivetRoute><CreateAssignment></CreateAssignment></PrivetRoute>
      },
      {
        path: '/assignments',
        loader: () => fetch('https://online-group-study-assignment-serve.vercel.app/assignments'),
        Component: AllAssignments,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: "/assignments/:id",
        loader: ({ params }) => fetch(`https://online-group-study-assignment-serve.vercel.app/assignments/${params.id}`),
        Component: ViewAssignment,
      },
      {
        path: '/assignment/update/:id',
        loader: ({ params }) =>
          fetch(`https://online-group-study-assignment-serve.vercel.app/assignments/${params.id}`),
        element: <PrivetRoute><UpdateAssignment></UpdateAssignment></PrivetRoute>
      },
      {
        path: '/my-assignments',
        element: <PrivetRoute><MyAssignments></MyAssignments></PrivetRoute>
      },
      {
        path: '/pending-assignments',
        Component: PendingAssignments
      },
      {
        path: 'about',
        Component: AboutUs
      }

    ]
  },
  {
    path: "/dashboard",
    element:<PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
    children:[
      
    ]
  },

  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: '/auth/login',
        Component: Login
      },
      {
        path: '/auth/register',
        Component: Register
      }
    ]
  },
  {
    path: "/*",
    Component: NotFoundPage
  },
]);
