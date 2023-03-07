import './faqs.css'
import React from 'react'


import { AiOutlineHome } from 'react-icons/ai'
import { FaUserGraduate } from 'react-icons/fa'
import { RiServiceLine } from 'react-icons/ri'
import { AiOutlineCustomerService } from 'react-icons/ai'
import { MdContactPhone } from 'react-icons/md'
import { useState } from 'react'

import { MdKeyboardArrowDown } from 'react-icons/md'
import { HiOutlineSwatch } from 'react-icons/hi2'
import { IoServerSharp } from 'react-icons/io5'
import { BiCodeCurly } from 'react-icons/bi'
//import { tab } from '@testing-library/user-event/dist/tab'

const FAQs = () => {
  const [activeNav, setActiveNav] = useState('#')



  return (
    <section id="faqs" className='square'>
      <div className="nav__small">
        <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FaUserGraduate /></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>< RiServiceLine /></a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineCustomerService /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactPhone /></a>
      </div>




      {/* =========== Skills Section ========= */}
      <div className="skills section" id="skills">
        <h2 data-heading="My Abilities" className="section__title">My Experience</h2>

        <div className=" container grid">
          <div className="skills__tabs">
            <div className="skills__header skills__active" data-target="#frontend">
              <i className="uil uil-brackets-curly skills__icon"><BiCodeCurly /></i>

              <div>
                <h1 className="skills__title">Frontend developer</h1>
                <span className="skills__subtitle">More than 2 years</span>


              </div>
              <i className="uil uil-angle-down skills__arrow"><MdKeyboardArrowDown /></i>
            </div>

          </div>

          <div className="skills__content">
            <div className="skills__group skills__active" data-content id="frontend">
              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills__number">95%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage" style={{ width: "95%" }}></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">CSS</h3>
                    <span className="skills__number">90%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage" style={{ width: "90%" }}></span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">JavaScript</h3>
                    <span className="skills__number">85%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage" style={{ width: "85%" }}></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">React</h3>
                    <span className="skills__number">90%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage" style={{ width: "90%" }}></span>
                  </div>
                </div>

              </div>
            </div>




            <div className="skills__header" data-target="#backend">
              <i className="uil uil-brackets-curly skills__icon"><IoServerSharp /></i>

              <div>
                <h1 className="skills__title">Backend developer</h1>
                <span className="skills__subtitle">More than 1 year</span>


              </div>
              <i className="uil uil-angle-down skills__arrow"><MdKeyboardArrowDown /></i>
            </div>
            <div className="skills__group" data-content id="backend">
              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Node.js</h3>
                    <span className="skills__number">90%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage" style={{ width: "90%" }}></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Express</h3>
                    <span className="skills__number">85%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage" style={{ width: "85%" }}></span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">MongoDB</h3>
                    <span className="skills__number">80%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage" style={{ width: "80%" }}></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">python</h3>
                    <span className="skills__number">85%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage" style={{ width: "85%" }}></span>
                  </div>
                </div>

              </div>
            </div>



            <div className="skills__header" data-target="#design">
              <i className="uil uil-brackets-curly skills__icon"><HiOutlineSwatch /></i>
              <div>
                <h1 className="skills__title">UI/UX design</h1>
                <span className="skills__subtitle">More than 1 year</span>
              </div>
              <i className="uil uil-angle-down skills__arrow"><MdKeyboardArrowDown /></i>
            </div>
            <div className="skills__group" data-content id="design">
              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">FigmaL</h3>
                    <span className="skills__number">90%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage" style={{ width: "90%" }}></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Sketch</h3>
                    <span className="skills__number">80%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage" style={{ width: "80%" }}></span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Photoshop</h3>
                    <span className="skills__number">85%</span>
                  </div>

                  <div className="skills__bar">
                    <span className="skills__percentage" style={{ width: "85%" }}></span>
                  </div>
                </div>



              </div>
            </div>









          </div>
        </div>
      </div>





    </section>
  )
}

export default FAQs
