import React from 'react'
import { useParams } from 'react-router-dom'

export const UserProfile = () => {
    const userId=useParams();
  return (
    <div>{userId.id}</div>
  )
}
