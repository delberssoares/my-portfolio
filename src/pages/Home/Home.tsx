import NavBar from "../../components/NavBar/NavBar"
import AboutSection from "./sections/AboutSection/AboutSection"
import Hero from "./sections/Hero/Hero"
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection"
import SkillsSection from "./sections/SkillsSection/SkillsSection"
import FooterSection from "./sections/FooterSection/FooterSection"

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </>
  )
}

export default Home
