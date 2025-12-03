import Footer from "../../components/_shared/Footer";
import Navbar from "../../components/_shared/Navbar";
import Hero from "../../components/landingSections/Hero";

export default function Home() {
  return (
    <>
      <title> Home - Loadstone</title>
      <meta name="description" content="Welcome to Loadstone" />
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
