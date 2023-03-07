import './services.css'
import { FaReact } from "react-icons/fa";
import { GrBladesVertical } from "react-icons/gr";
import { AiOutlineDesktop } from "react-icons/ai";
import { SiAdobeindesign } from "react-icons/si";

const Services = () => {
  return (
    <section id="services" >

      <div className="main__title">
        <h2>my services</h2>
        <p>I give you the best in all the services below</p>
      </div>


      <div className="main__services">

        
          <div className="services__item s1">
            <FaReact className='icon_f'/>
            <h4>React Development</h4>
           
            <p>Building user interfaces.React is used to build 
               single-page applications.eact allows us to create 
               Rreusable UI components
            </p>
 
            
          </div>
        


        
          <div className="services__item s2">
            <SiAdobeindesign className='icon_s'/>
            <h4>UI/UX</h4>
            <p>My designs are modren and intuitive. i use industry-
              standard rules to make sure your users have fun using
              your product
            </p>
          </div>
        

        
          <div className="services__item s3">
            <AiOutlineDesktop className='icon_a'/>
            <h4>Frontend Development</h4>
            <p>Your product will look good and will be accessible on all
              decices, includeing mobile phones, tablets, and Desktop
              gives better expericence
            </p>
          </div>
        

       
          <div className="services__item s4">
            <GrBladesVertical className='icon_g'/>
            <h4>Backend Development</h4>
            <p>The security of your business/product is taken seriously
              right from the start of the project. I  will make sure your
              website is secure from attacks
            </p>
          </div>
        
      </div>
    </section>
  )
}

export default Services
