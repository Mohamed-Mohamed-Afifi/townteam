import React from 'react'
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({childern}) => {
    const Auth=true;
    console.log(childern)
  return Auth ? childern :<Navigate to="/login"/>       
}
