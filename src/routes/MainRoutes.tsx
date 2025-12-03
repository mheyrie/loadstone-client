import { Route, Routes } from "react-router-dom";
import Home from "../pages/landing/Home";
import AboutUs from "../pages/landing/AboutUs";
import Business from "../pages/landing/Business";
import Support from "../pages/landing/Support";
import Products from "../pages/landing/Products";

export default function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/business" element={<Business/>} />
        <Route path="/support" element={<Support/>} />
    </Routes>
  )
}