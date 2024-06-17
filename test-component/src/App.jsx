import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homepage from './Page/Homepage';
import Contact from './Page/Contact';
import Login from './Page/Login';
import AppLayOut from './Layout/AppLayOut';
import GlobalStyle from './Style/GlobalStyle';
export default function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayOut />}>
        <Route path="/" element={<Homepage />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
