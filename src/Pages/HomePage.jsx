import About from "../Components/About/About"
import AppBanner from "../Components/AppBanner/AppBanner"
import Contact from "../Components/Contact/Contact"
import Footer from "../Components/Footer/Footer"
import Hero from "../Components/Hero/Hero"
import { Marquee } from "../Components/Marquee"
import Pricing from "../Components/Pricing/Pricing"
import Testimonials from "../Components/Testimonials/Testimonials"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Marquee />
      <Pricing classname="w-full" />
      <Testimonials />
      <AppBanner />
      <Footer />
    </div>
  )
}

export default HomePage