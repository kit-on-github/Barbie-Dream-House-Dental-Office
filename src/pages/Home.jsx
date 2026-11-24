import './Home.css'
import HeroSection from '../components/HeroSection.jsx'
import ServicesSection from '../components/ServicesSection.jsx'

import PracticeIntro from '../components/PracticeIntro.jsx'

import ContactSection from '../components/ContactSection.jsx'

function Home() {
  return (
    <main className="home-page">
      <HeroSection />
      <ServicesSection />
      <PracticeIntro />
      <ContactSection />
    </main>
  )
}

export default Home