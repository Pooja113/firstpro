import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
  const token = localStorage.getItem('_token')
  if (token) {
    return true
  } else {
    return false
  }
}

const ProtectedRoutes = () => {
  const auth = useAuth()

  return auth ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes
