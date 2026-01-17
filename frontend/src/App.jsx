import React from "react"
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Dashboard from "./Pages/Dashboard";
import {Toaster} from 'react-hot-toast';

function App() {
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  )
}

export default App
