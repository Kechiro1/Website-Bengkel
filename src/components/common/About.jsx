import React from 'react'
import AboutImg from '../../assets/Images/about-us.jpeg';


const About = () => {
  return (
    <section className='section-2 py-5'>
        <div className='container py-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={AboutImg} className='w-100'/>
                    </div>

                    <div className='col-md-6'>
                        <span>About Us</span>
                        <h2>Motor</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tempore illum nam amet magnam vel quaerat ratione esse doloremque fugiat impedit voluptas deleniti harum aspernatur blanditiis. Deleniti tempora quasi ullam?</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
