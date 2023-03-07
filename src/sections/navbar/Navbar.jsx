import './navbar.css'
import Logo from '../../assets/logo.png'
import data from './data'
import { IoIosColorPalette } from 'react-icons/io'

const Navbar = () => {

 

  return (
    <nav id="navbar" >
      <div className="container nav__container">
        <a href='index.html' className='nav__logo'>
          <img src={Logo} alr="logo" />
        </a>
        <div className="port">
          <h2>Portfolio</h2>
        </div>
        <ul className='nav__menu' id='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        {/*============= npm install react-icons --save ================*/}
        {/* <button  id="theme__icon"><IoIosColorPalette /> </button> */}
      </div>
  </nav>
      


   
  )
}

export default Navbar
