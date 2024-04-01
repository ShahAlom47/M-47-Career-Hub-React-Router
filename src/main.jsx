import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Root.jsx';
import Home from './Pages/Home.jsx';
import JobDetail from './Pages/JobDetail.jsx';
import AppliedJob from './Pages/AppliedJob.jsx';
import Blog from './Components/Blog.jsx';
import LogIn from './Pages/LogIn.jsx';
import Register from './Pages/Register.jsx';
import AuthProvider from './Auth Provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: "/blog",
        element: <Blog></Blog>,

      },
      {
        path: "/JobDetail/:jobId",
        element: <JobDetail></JobDetail>,
        loader :()=>fetch('../jobs.json')
      },
      {
        path: "/appliedJob",
        element: <AppliedJob></AppliedJob>,
        loader :()=>fetch('../jobs.json')
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider><RouterProvider router={router} /> </AuthProvider>
  </React.StrictMode>
)
