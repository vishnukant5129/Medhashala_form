import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import FeaturesSection from "./components/FeaturesSection";
import LoadingScreen from "./components/LoadingScreen";
import Footer from "./components/Footer";

import SurveyForm from "./components/form/SurveyForm";

function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <FeaturesSection />
    </>
  );
}

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
    <div className="bg-[#F8FAFC] dark:bg-slate-950 min-h-screen">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<SurveyForm />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;