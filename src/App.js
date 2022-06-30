import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Experiences from './components/Experiences/Experiences'
import Projects from './components/Projects/Projects'
import Educations from './components/Educations/Educations'
import Skills from './components/Skills/Skills'
import Certificates from './components/Certificates/Certificates'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Experiences />
        <Projects />
        <Educations />
        <Skills />
        <Certificates />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
