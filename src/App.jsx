import './app.css'
import Navbar from './sections/navbar/Navbar'
import Header from './sections/header/Header'
import About from './sections/about/About'
import Services from './sections/services/Services'
import Portfolio from './sections/portfolio/Portfolio'
import Testimonials from './sections/testimonials/Testimonials'
import FAQs from './sections/faqs/FAQs'
import Contact from './sections/contact/Contact'
import Footer from "./sections/footer/Footer"

import { BsSun } from "react-icons/bs";
//import Nav_s from './sections/nav_s/Nav_s'

import useLocalStorage from 'use-local-storage'
const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (

    <div className="App" data-theme={theme}>
      <Navbar />
      <Header />
      <About />
     <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <button className='themebutton' onClick={switchTheme}>
        {theme === 'light' ? 'Dark' : 'Light'} <BsSun className='BsSun'/>
      </button>
      
     
    </div>
  )
}

export default App
