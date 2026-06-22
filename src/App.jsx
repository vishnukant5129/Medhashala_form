import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import FeaturesSection from "./components/FeaturesSection";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="bg-[#F8FAFC] dark:bg-slate-950 transition-all duration-300">

      <Navbar />

      <Hero />

      <ProblemSection />

      <FeaturesSection />

    </div>
  );
}

export default App;