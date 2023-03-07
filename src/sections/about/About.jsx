import './about.css'
import AboutImage from '../../assets/about.png'
import Resume from '../../assets/Resume.pdf'
import { GoArrowDown } from 'react-icons/go'
import Card from '../../components/card/Card'
import data from '../../components/card/data'

const About = () => {
  return (
    <section id="about" className='square'>
      <div className="container about__container" >
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>


              ))
            }
          </div>
          <div className='para'>
            <p>
              Bulding projects my clients love have always been my passion
              Being in the web development industry for over 1 year and serving
              more than 70 happy clients worldwide, I'm always motivated to
              more!
            </p>
            <p>
              Hi, my name is Rohit Singh from BIhar. Rohtas. Sasaram I'm full-stack web
              developer with a Bachelors degree in Computer Science Engineering.
              My top priority is to get your business online the right way, giving your
              industry-standard design and all the functionality you need to
              operate smoothly online. Get in touch today with details of your
              project let's get started! Check out resume below!
            </p>
          </div>

          <a href={Resume} download className='btn primary'>Resume<GoArrowDown /></a>

        </div>

      </div>
    </section>
  )
}

export default About
