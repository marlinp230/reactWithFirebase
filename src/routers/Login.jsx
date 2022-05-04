import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import {useNavigate}from "react-router-dom"

const Login = () => {
    const {user,setUser}=useContext(UserContext)
    const navigate=useNavigate()
    const handlerClickLogin=()=>{
      setUser(true)
      navigate("/")
    }
  return (
    <><h1>Login</h1>
    {user ? 'En linea': ' No en linea'}
    <button onClick={()=>{handlerClickLogin()}}>Acceder</button>
    </>
  )
}

export default Login