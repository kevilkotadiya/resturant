import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../Context/ReactContext'

const Home = () => {

  const theme = useContext(Context)

  console.log("DARK",theme);


  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay={100}>
          <div className="row">
            <div className="col-lg-8">
              <h1>Welcome to <span>Restaurantly</span></h1>
              <h2>Delivering great food for more than 18 years!</h2>
              <div className="btns">
                <Link to='/menu' className="btn-menu animated fadeInUp scrollto">Our Menu</Link>
                <Link to='/book' className="btn-book animated fadeInUp scrollto">Book a Table</Link>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay={200}>
              <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" className="glightbox play-btn" />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
