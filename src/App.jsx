import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import FeaturesSection from "./components/FeaturesSection";
import LoadingScreen from "./components/LoadingScreen";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="bg-[#F8FAFC] dark:bg-slate-950 transition-all duration-300 min-h-screen">

      <Navbar />

      <main>
        <Hero />

        <ProblemSection />

        <FeaturesSection />
      </main>

      <Footer />

    </div>
  );
}

export default App;