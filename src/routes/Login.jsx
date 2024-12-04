import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate=useNavigate();
  const HandelChange=()=>{
    navigate("/user/change")
  }
  return (
    <div>
                <input type='text' placeholder='userName'/>
                <input type='password' placeholder='Password'/>
                <button>Login</button>
                <button onClick={()=>HandelChange()}>change password</button>
    </div>
  )
}
