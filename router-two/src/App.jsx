import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Price from "./Price";
import Login from "./Login";
import Error from "./Error";
import Applayout from "./Applayout";
import Application from "./Application";
import Test from "./Test";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="price" element={<Price />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<Applayout />}>
            <Route index element={<Navigate replace to="test" />} />
            <Route path="app" element={<Application />} />
            <Route path="test" element={<Test />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
