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
import { ProtectedRoute } from './routes/utils/ProtectedRoute.jsx';
const routes=createBrowserRouter([
  {
    path:"/",
    element:(
        <Root/>
    ),
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:(
          <ProtectedRoute><Index/></ProtectedRoute>
        )
      },
      {
        path:"faq",
        element:(
          <ProtectedRoute>
            <Faq/>
          </ProtectedRoute>
        )
      },
      {
        path:"products",
        element:(
          <ProtectedRoute>
            <Products/>
          </ProtectedRoute>
        )
      },
    ]
  },
  {
    path:"/user",
    element:(
        <User/>
    ),
    children:[
      {
        index:true,
        element:(
          <ProtectedRoute>
            <h1>user home page</h1>
          </ProtectedRoute>
        )
      },
      {
        path:":id",
        element:(
          <ProtectedRoute>
            <UserProfile/>
          </ProtectedRoute>
        )
      },
      {
        path:"change",
        element:(
          <ProtectedRoute>
            <ChangePassword/>
          </ProtectedRoute>
        )
      },
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={routes}/>
);
