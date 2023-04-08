import './header.css'
import HeaderImage from '../../assets/header.png'
import data from './data'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { FaArrowUp } from 'react-icons/fa'

const Header = () => {
  // create Ref Element for typed
  const e1 = useRef(null);

  useEffect(() => {
    const typed = new Typed(e1.current, {
      strings: ["web designer", "Full stack web developer", "graphic designer", "Freelancer"],
      startDelay: 400,
      typeSpeed: 100,
      backSpeed: 60,
      smartBackspace: true,
      loop: true,

    })
  },[]);


  return (

  <header id="header" className='square'>
    <div  className="container header__container square">
      <div className="header__profile">
        <img src={HeaderImage} alt="Header Portait" />
      </div>
      <h3>Rohit Singh</h3>
      <p>
        You are a click away from bulding your dream website or web app. send me
        the details of your project for a modern mobile reponsive, highly
        performant website today!
      </p>
      {/*========== npm install typed.js============= */}
      <h2>I'm a <span ref={e1}></span></h2>
      <div className="header__cta">
        <a href="#contact" className='btn primary'>Let's Talk</a>
        <a href="#portfolio" className='btn light'>My Work</a>
      </div>

      <div className="header__socials">
        {
          data.map(item => <a key={item.id} href={item.link} target="_blank"
            rel="noopener noreferrer">{item.icon}</a>)

        }
      </div>

      <a href="#"><FaArrowUp className='arrowup' /></a>
    </div>

   </header>



  )
}

export default Header
