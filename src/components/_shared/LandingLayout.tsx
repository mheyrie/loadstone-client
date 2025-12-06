
import Navbar from "./Navbar";
import Footer from "./Footer";
import type { ReactNode } from "react";

interface LandingLayoutProps {
  children: ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="bg-[#F5EFF7] ">{children}</main>
      <Footer />
    </>
  );
}
