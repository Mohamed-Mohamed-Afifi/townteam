import React from 'react'
import { NavLink } from 'react-router-dom'

export const Login = () => {
  return (
    <div>
                <input type='text' placeholder='userName'/>
                <input type='password' placeholder='Password'/>
                <button>Login</button>
                <button><NavLink to="change">change password</NavLink></button>
    </div>
  )
}
