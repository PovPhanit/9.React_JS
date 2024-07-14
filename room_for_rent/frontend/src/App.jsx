import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from './routes/Homepage';
import Card from './routes/Card';
import Order from './routes/Order';
import Member from './routes/Member';
import Profile from './routes/Profile'
import Login from './routes/Login';
import Register from './routes/Register'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Home" element={<Homepage />} />
          <Route path="/card" element={<Card />} />
          <Route path="/order" element={<Order />} />
          <Route path="/member" element={<Member />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}
