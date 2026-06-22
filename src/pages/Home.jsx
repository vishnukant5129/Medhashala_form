import Hero from '../components/Hero'
import ProblemSection from '../components/ProblemSection'
import Features from '../components/Features'
import SurveyInsights from '../components/SurveyInsights'
import WhyMedhashala from '../components/WhyMedhashala'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <>
      <Hero />
      <ProblemSection />
      <Features />
      <SurveyInsights />
      <WhyMedhashala />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}

export default Home