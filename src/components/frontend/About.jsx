import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import {default as AboutNew} from '../common/About'
import MemberImg from '../../assets/Images/team1.jpg'
import Hero from '../common/Hero'

const About = () => {
  return (
    <>
    <Header/>
    <main>
        <Hero preHeading='Quality. Integrity. Value.' 
              heading='About Us' 
              text='Memberikan pelayanan terbaik untuk kenyamanan dan keamanan Anda <br/>Agar Motormu Nyaman Di Perjalanan'
              />
        <AboutNew/>

        {/* Our Team*/}

    <section className='section-8 bg-light py-5'>
        <div className='container'>
            <div className='section-header text-center'>
                <span>Our Team</span>
                <h2>Our Motorcycle Services Team </h2>
                <p>we provide the best motorcycle services for you</p>
            </div>
            <div className='row pt-3'>
                    <div className='col-md-6 col-lg-3 mb-3'>
                        <div className='card shadow border-0'>
                            <div className='card-img-top'>
                                <img src={MemberImg} alt='' className='w-100' />
                            </div>
                            <div className='card-body p-4'>
                                <div className='card-title pb-0 mb-0'>
                                    Christian Tedric
                                </div>
                                <div className='card-sub-title mb-2'>
                                    Mechanic
                                </div>

                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className='bi bi-tools' viewBox="0 0 16 16">
  <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
</svg> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 mb-3'>
                        <div className='card shadow border-0'>
                            <div className='card-img-top'>
                                <img src={MemberImg} alt='' className='w-100'/>
                            </div>
                            <div className='card-body p-4'>
                                <div className='card-title pb-0 mb-0'>
                                    Indra Gunawan
                                </div>
                                <div className='card-sub-title mb-2'>
                                    Mechanic
                                </div>

                                <a href='#'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className='bi bi-tools' viewBox="0 0 16 16">
  <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
</svg> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>





    </main>
    <Footer/>
    </>
  )
}

export default About
