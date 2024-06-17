import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom'
import Navbar from "./Navbar";
export default function Applayout() {
  return (
    <>
      <div>Header Applayout</div>
      <Navbar />
      <Link to="app">App</Link>
      <Link to="test">Test</Link>
      <main>
        <Outlet />
      </main>
      <div>Footer Applayout</div>
    </>
  );
}
