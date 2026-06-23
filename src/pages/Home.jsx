import { Routes, Route } from "react-router-dom";
import Hero from '../components/common/Hero'
import CTA from '../components/common/CTA'
import RewardSection from '../components/common/RewardSection'

const Home = () => {
  return (
    <>
      <Hero />
      <CTA />
      <section id="rewards">
        <RewardSection />
      </section>
    </>
  )
}

export default Home