import './testimonials.css'
import Test1 from '../../assets/test1.png'
import Test2 from '../../assets/test2.png'
import Test3 from '../../assets/test3.png'
import Test4 from '../../assets/test4.png'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    test: Test1,
    name: 'Arman mohmad',
    review: 'You want your testimonials to tell a story about your product and business. You should consider what kind of feelings you want your potential customers to have about your product, what challenges your customers overcame and what value they found in using your services or products.'
  },
  {
    test: Test2,
    name: 'shatta wale',
    review: '"We were looking for an affordable marketing company and Silver Tongue Media more than delivered. They manage our blog and social media accounts and produce our brochures. We saw an immediate increase in our social media presence and our followers doubled in a month and our garage business has increased 50% in two months! '
  },
  {
    test: Test3,
    name: 'Arman mohmad',
    review: 'Personalizing the testimonial makes it easier for readers to be empathetic. Adding before and after images, a company logo, or other imagery that demonstrates the value of the service or product is another way to personalize the testimonial.'
  },
  {
    test: Test4,
    name: 'Arman mohmad',
    review: 'You want your testimonials to tell a story about your product and business. You should consider what kind of feelings you want your potential customers to have about your product, what challenges your customers overcame and what value they found in using your services or products.'
  },

]



const Testimonials = () => {
  return (
    <section id="testimonials" className='square'>
      <h2>Testimonials</h2>
      <h4>Review from clients</h4>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[ Pagination ]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        
      
      

        {
          data.map(({ test, name, review }, index) => {
            return (

              <SwiperSlide  key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={test}/>
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review"> {review} </small>
              </SwiperSlide>

               

             

            )
          })
        }

      </Swiper>

    </section>
  )
}

export default Testimonials
