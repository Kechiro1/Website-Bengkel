import React from 'react'
import Header from '../common/Header'  
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import ProjectImg from '../../assets/images/aerox.jpeg';

const Projects = () => {
  return (
    <>
        <Header/>
            <main>
                <Hero preHeading='Quality. Integrity. Value.' 
                      heading='Our Projects' 
                      text='Memberikan pelayanan terbaik untuk kenyamanan dan keamanan Anda <br/>Agar Motormu Nyaman Di Perjalanan'
              />
            </main>
            <section className='section-3 bg-light py-5'>
        <div className='container py-5'>
            <div className='section-header text-center'>
                <span>Our Project</span>
                <h2>Our Motorcycle Project </h2>
                <p>Project Project Yang Sudah Kita Buat</p>
            </div>
            <div className='row pt-4'>
                <div className='col-md-4 col-lg-4'>
                    <div className='item'>
                        <div className='service-image'>
                            <img src={ProjectImg} className='w-100'/>
                            </div>
                             <div className='service-body'>
                                <div className='service-title'>
                                <h3>
                                    Project Aerox
                                </h3>
                            </div><div className='service-content'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates eius nihil tenetur atque nam nisi dolorem, odit quis omnis quia tempore natus adipisci impedit itaque iure id, architecto enim at.</p> 
                            </div>
                                <a href='#' className='btn btn-primary small'>Read More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-lg-4'>
                    <div className='item'>
                        <div className='service-image'>
                            <img src={ProjectImg} className='w-100'/>
                            </div>
                             <div className='service-body'>
                             <div className='service-title'>
                                <h3>
                                    Project Aerox
                                </h3>
                            </div><div className='service-content'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates eius nihil tenetur atque nam nisi dolorem, odit quis omnis quia tempore natus adipisci impedit itaque iure id, architecto enim at.</p> 
                            </div>
                                <a href='#' className='btn btn-primary small'>Read More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-lg-4'>
                    <div className='item'>
                        <div className='service-image'>
                            <img src={ProjectImg} className='w-100'/>
                            </div>
                             <div className='service-body'>
                             <div className='service-title'>
                                <h3>
                                    Project Aerox
                                </h3>
                            </div><div className='service-content'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates eius nihil tenetur atque nam nisi dolorem, odit quis omnis quia tempore natus adipisci impedit itaque iure id, architecto enim at.</p> 
                            </div>
                                <a href='#' className='btn btn-primary small'>Read More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-lg-4'>
                    <div className='item'>
                        <div className='service-image'>
                            <img src={ProjectImg} className='w-100'/>
                            </div>
                             <div className='service-body'>
                             <div className='service-title'>
                                <h3>
                                    Project Aerox
                                </h3>
                            </div><div className='service-content'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates eius nihil tenetur atque nam nisi dolorem, odit quis omnis quia tempore natus adipisci impedit itaque iure id, architecto enim at.</p> 
                            </div>
                                <a href='#' className='btn btn-primary small'>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <Footer/>
    </>
  )
}

export default Projects
