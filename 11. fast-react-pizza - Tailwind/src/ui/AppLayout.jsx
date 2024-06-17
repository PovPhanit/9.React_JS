import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import Loader from "./Loader";
export default function AppLayout() {
  const navigate=useNavigation();
  console.log(navigate);
  const isLoading=navigate.state==="loading";
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-scroll">        
        <main className="mx-auto max-w-3xl ">
            <Outlet />
        </main>
      </div>
        <CartOverview />
    </div>
  );
}
