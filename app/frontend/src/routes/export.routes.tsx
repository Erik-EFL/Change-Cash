import { useEffect, useState } from "react";
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import Home from '../pages/transactions/index';
import Login from '../pages/Login';
import Register from '../pages/Register';

function Routing() {
  const [isLogued, setIsLogued] = useState(true)

  const handleLogin = () => {
    const user = localStorage.getItem('user')
    if (!user) {
      setIsLogued(false)
    } else {
      setIsLogued(true)
    }
  }

  useEffect(() => {
    handleLogin()
  }, [isLogued])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register  />} />
          <Route path="/dashboard" element={<Home />} />
          {
            isLogued
              ? <Route path="/dashboard" element={<Home />} />
              : <Route path="/" element={<Login />} />
          }
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing
