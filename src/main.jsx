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
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
