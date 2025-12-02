import { Helmet } from "react-helmet-async";
import Hero from "../../components/landingSections/Hero";

export default function Home() {
  return (
    <div>
        <Helmet>    
            <title>Home - MyApp</title>
            <meta name="description" content="Welcome to the Home page of Load Stone." />
        </Helmet>
        <Hero />
    </div>
  )
}