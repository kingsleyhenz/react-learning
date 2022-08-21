import "./stylesheets/style.css"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Footer from "./components/Footer"
import Features from "./components/Feature"
function App(){
  return(
    <>
    <Navbar />
    <HeroSection />
    <Features />
    <Footer />
    </>
  )
}

export default App