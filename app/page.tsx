import HeroSection from './components/heroSection'
import FeatureSection from './components/FeatureSection'
import PartnerSection from './components/PartnerSection'
import FurnitureRecomendation from './components/FurnitureRecommendation'
import BestSeller from './components/BestSeller'
import Become from './components/Become'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <PartnerSection/>
      <FurnitureRecomendation/>
      <BestSeller/>
      <Become/>
      <Footer/>
    </main>
  )
}
