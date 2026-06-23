import Hero from '../components/common/Hero'
import CTA from '../components/common/CTA'
import RewardSection from '../components/common/RewardSection'

const Home = () => {
  return (
    <>
      <Hero />
      <CTA />
      <RewardSection
        referrals={1}
        referralCode="MS124"
        status="Locked"
      />
    </>
  )
}

export default Home