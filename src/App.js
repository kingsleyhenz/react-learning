import "./stylesheets/style.css"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Footer from "./components/Footer"
import Features from "./components/Feature"
function App(){
  const logo = "new World"
  const featureCardDetails = {
      color:"crimson",
      title:"Faithful",
      subTitle:"The girl wears glasses",
      icon: "person_search"
  }

  const data =[
    {
      color:"crimson",
      title:"Faithful",
      subTitle:"The girl wears glasses",
      icon: "person_search"
  },
  {
    color:"slateblue",
    title:"Kingsley",
    subTitle:"He is a Chelsea fan",
    icon: "liquor"
}, {
  color:"slategray",
  title:"Noble",
  subTitle:"This guy is dangerous",
  icon: "house"
},{
  color:"orange",
  title:"Daniel",
  subTitle:"Lover of  BU...",
  icon: "woman"
}
  ]
  return(
    <>
    <Navbar obinna={logo} />
    <HeroSection />
    <Features data={data} featureCardDetails={featureCardDetails} />
    <Footer />
    </>
  )
}

export default App