import LandingLayout from "../../components/_shared/LandingLayout";
import Hero from "../../components/landingSections/Hero";
import MarqueeComponent from "../../components/landingSections/MarqueeComponent";
import WhatWeDo from "../../components/landingSections/WhatWeDo";

export default function Home() {
  return (
    <LandingLayout>
      <title> Home - Loadstone</title>
      <meta name="description" content="Welcome to Loadstone" />
      <Hero />
      <MarqueeComponent />
      <WhatWeDo />
    </LandingLayout>
  );
}
