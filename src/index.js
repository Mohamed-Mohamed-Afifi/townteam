import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Root from './routes/Root.jsx';
import { Faq } from './routes/Faq.jsx';
import { Index } from './routes/Index.jsx';
import { Products } from './routes/Products.jsx';
import { Error } from './routes/Error.jsx';
import { Login } from './routes/Login.jsx';
import { User } from './routes/User.jsx';
import { ChangePassword } from './routes/ChangePassword.jsx';
import { UserProfile } from './routes/UserProfile.jsx';
const routes=createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Index/>
      },
      {
        path:"faq",
        element:<Faq/>
      },
      {
        path:"products",
        element:<Products/>
      },
    ]
  },
  {
    path:"/user",
    element:<User/>,
    children:[
      {
        index:true,
        element:<div>User</div>
      },
      {
        path:":id",
        element:<UserProfile/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"change",
        element:<ChangePassword/>
      },
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={routes}/>
);
