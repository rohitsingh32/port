import './contact.css'
import { TfiEmail } from 'react-icons/tfi'
import { TbBrandMessenger } from 'react-icons/tb'
import { BsWhatsapp } from 'react-icons/bs'


const Contact = () => {
  return (
    <section id="contact" className='square'>


      {/* map */}
      <div className="map">
        <h2>See Our Current Location</h2>
        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.98872633887!2d77.56221281489272!3d23.134087334896783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c388256bd5713%3A0x6d0976d7f86010d1!2sRabindranath%20Tagore%20University!5e0!3m2!1sen!2sin!4v1675331393673!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <div className="contact__me">
        <h5 className='get'>Get In Touch</h5>
        <h2 className='contacth2'>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <TfiEmail className='contact__option-icon icon' />
              <h4>Email</h4>
              <h5>rohit482786@gmail.com</h5>
              <a href="mailto:rohit482786@gmail.com" >Send a message</a>
            </article>
            <article className="contact__option">
              <TbBrandMessenger className='contact__option-icon icon' />
              <h4>Messenger</h4>
              <h5>https://messanger.com</h5>
              <a href="https://m.me/profile.php?id=100011225676036" >Send a message</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon icon' />
              <h4>WhatsApp</h4>
              <h5>+123456789</h5>
              <a href="https://wa.me/+918521004602" >Send a message</a>
            </article>
          </div>

          {/* Contact Form */}
          <form action=''>
            <input type="text" className='name' name='name' placeholder='Your Full Name' required />
            <input type="text" className='email' name='email' placeholder='Your Email' required />
            <textarea name="message" row="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn primary'>Send Message</button>

          </form>
        </div>





      </div>

      
    </section>
  )
}

export default Contact
