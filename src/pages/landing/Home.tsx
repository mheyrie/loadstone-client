import LandingLayout from "../../components/_shared/LandingLayout";
import Hero from "../../components/landingSections/Hero";

export default function Home() {
  return (
    <LandingLayout>
      <title> Home - Loadstone</title>
      <meta name="description" content="Welcome to Loadstone" />
      <Hero />
    </LandingLayout>
  );
}
