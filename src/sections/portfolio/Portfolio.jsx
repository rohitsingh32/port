import './portfolio.css'
import Port10 from '../../assets/port10.png'
import Port11 from '../../assets/port11.png'
import Port5 from '../../assets/port5.png'
import Port6 from '../../assets/port6.png'
import Port7 from '../../assets/port7.png'
import Port8 from '../../assets/port8.png'
import Port3 from '../../assets/port3.png'
import Port2 from '../../assets/port2.png'
import Port1 from '../../assets/port1.png'


const Portfolio = () => {
  return (
    <section id="portfolio" className='square'>
      
      <h2>portfolio</h2>
      <h5>My Recent Work</h5>
      <div className="container portfolio__container">

        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
          <img src={Port10} alt=""/>
           </div>
          <h3>This is a  myntra web clone ("Click on Demo Button and watch Video")</h3>
          <div className="portfolio__item-cta">
           <a href='https://github.com/rohitsingh32/Myntra.git' className='btn primary'>Github</a>
           <a href='https://www.linkedin.com/posts/rohit-kumar-068514252_myntra-web-clone-activity-7038046706793410560-a7Eh?utm_source=share&utm_medium=member_desktop' className='btn light'> Demo</a>
           </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
          <img src={Port11} alt=""/>
           </div>
          <h3>This is a  portfolio item title  ("Click on Demo Button and watch Video")</h3>
          <div className="portfolio__item-cta">
           <a href='https://github.com/rohitsingh32/Myntra.git' className='btn primary'>Github</a>
           <a href='https://www.linkedin.com/posts/rohit-kumar-068514252_myntra-web-clone-activity-7038046706793410560-a7Eh?utm_source=share&utm_medium=member_desktop' className='btn light' >Demo</a>
           </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
          <img src={Port5} alt=""/>
           </div>
          <h3>together forever website with responsive  ("Click on Demo Button and watch Video")</h3>
          <div className="portfolio__item-cta">
           <a href='https://github.com/rohitsingh32/Together.Forever.git' className='btn primary' >Github</a>
           <a href='https://www.linkedin.com/posts/rohit-kumar-068514252_together-forever-ecommerce-website-with-responsive-activity-7038045048780840960-_N60?utm_source=share&utm_medium=member_desktop' className='btn light' >Demo</a>
           </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
          <img src={Port6} alt=""/>
           </div>
          <h3>Ecommerce website top and bottom pocher  ("Click on Demo Button and watch Video")</h3>
          <div className="portfolio__item-cta">
           <a href='https://github.com/rohitsingh32/Together.Forever/blob/c891c438cf6cdd66c98689682df500867fc914cd/index.html' className='btn  primary' >Github</a>
           <a href='https://www.linkedin.com/posts/rohit-kumar-068514252_together-forever-ecommerce-website-with-responsive-activity-7038045048780840960-_N60?utm_source=share&utm_medium=member_desktop' className='btn light' >Demo</a>
           </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
          <img src={Port7} alt=""/>
           </div>
          <h3>This is a  together forever product  ("Click on Demo Button and watch Video")</h3>
          <div className="portfolio__item-cta">
           <a href='https://github.com/rohitsingh32/Together.Forever/blob/c891c438cf6cdd66c98689682df500867fc914cd/index.html' className='btn  primary' >Github</a>
           <a href='https://www.linkedin.com/posts/rohit-kumar-068514252_together-forever-ecommerce-website-with-responsive-activity-7038045048780840960-_N60?utm_source=share&utm_medium=member_desktop' className='btn light' >Demo</a>
           </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
          <img src={Port8} alt=""/>
           </div>
          <h3>This is a   together forever shop section  ("Click on Demo Button and watch Video")</h3>
          <div className="portfolio__item-cta">
           <a href='https://github.com/rohitsingh32/Together.Forever/blob/c891c438cf6cdd66c98689682df500867fc914cd/shope.html' className='btn primary' >Github</a>
           <a href='https://www.linkedin.com/posts/rohit-kumar-068514252_together-forever-ecommerce-website-with-responsive-activity-7038045048780840960-_N60?utm_source=share&utm_medium=member_desktop' className='btn light' >Demo</a>
           </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
          <img src={Port3} alt=""/>
           </div>
          <h3>This is a  google drive clone  ("Click on Demo Button and watch Video")</h3>
          <div className="portfolio__item-cta">
           <a href='https://github.com/rohitsingh32/Google.Drive.git' className='btn primary' >Github</a>
           <a href='https://www.linkedin.com/posts/rohit-kumar-068514252_google-drive-clone-activity-6988794325132353536-I3le?utm_source=share&utm_medium=member_desktop' className='btn light' >Demo</a>
           </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
          <img src={Port2} alt=""/>
           </div>
          <h3>flipkart clone with responsive  ("Click on Demo Button and watch Video")</h3>
          <div className="portfolio__item-cta">
           <a href='https://github.com/rohitsingh32/Flipkart.git' className='btn primary' >Github</a>
           <a href='https://www.linkedin.com/posts/rohit-kumar-068514252_flipkart-web-clone-activity-7038047077012017153-sS5q?utm_source=share&utm_medium=member_desktop' className='btn light' >Demo</a>
           
           </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image"> 
          <img src={Port1} alt=""/>
           </div>
          <h3>Digital watch with high level css animation  ("Click on Demo Button and watch Video")</h3>
          <div className="portfolio__item-cta">
           <a href='https://github.com/rohitsingh32/Digital.Watch.git' className='btn primary' >Github</a>
           <a href='https://www.linkedin.com/posts/rohit-kumar-068514252_digital-watch-with-advance-level-css-activity-7038041040506810368-qmvr?utm_source=share&utm_medium=member_desktop' className='btn light' >Demo</a>
           </div>
        </article>

        


      </div>
    </section>
  )
}

export default Portfolio
