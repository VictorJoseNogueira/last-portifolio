import HeaderComponent from "../components/layout/headerComponent"
import FooterComponent from "../components/layout/footerComponent"
import InitialSection from "../components/layout/initialSection"
import AboutSection from "../components/layout/aboutSection"
import ContactSection from "../components/layout/contactSection"
import TecnologiesSection from "../components/layout/tecnologiesSection"
import ProjectsSection from "../components/layout/projectsSection"



function HomePage() {


  return (
    <>
    <header>
      <HeaderComponent/>
    </header>
    <main>
        <InitialSection />
        <AboutSection />

        <TecnologiesSection />
        <ProjectsSection />
        <ContactSection />
    </main>
    <footer>
      <FooterComponent/>
    </footer>
    </>
  )
}

export default HomePage
