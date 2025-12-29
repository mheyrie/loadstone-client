import { Route, Routes } from "react-router-dom";
import Home from "../pages/landing/Home";
import AboutUs from "../pages/landing/AboutUs";
import Business from "../pages/landing/Business";
import Support from "../pages/landing/Support";
import Products from "../pages/landing/Products";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Finance from "../pages/landing/Finance";
import SavingsInvestment from "../pages/landing/SavingsInvestment";
import ContactUs from "../components/landingSections/ContactUs";
import Blog from "../pages/landing/Blog";
import FAQ from "../components/landingSections/FAQ";
import TermsandCondition from "../components/landingSections/TermsandCondition";
import BlogMain from "../pages/landing/BlogMain";
// import ScrollToHash from "./ScrollToHash";


export default function MainRoutes() {
  AOS.init();

  return (
    <>
      {/* <ScrollToHash /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/business" element={<Business />} />
        <Route path="/support" element={<Support />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/Saving-Investment" element={<SavingsInvestment />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
      
        <Route path="/faq" element={<FAQ />} />
        <Route path="/T&C" element={<TermsandCondition />} />
        <Route path="/news" element={<BlogMain />} />


        {/* TO BE PROTECTED  */}
        <Route path="dashboard" element={<Das/>}>
          <Route path="overview" element={<div>Dashboard Page - To be implemented</div>} />
        </Route>
      </Routes>
    </>
  );
}
