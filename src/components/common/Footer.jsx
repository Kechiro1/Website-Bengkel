import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='container py-5'>
            <div className='row'>
                <div className='col-md-3'>
                    <h3 className='mb-3'>7Rd Motors</h3>
                    <div className='pe-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maiores quasi cupiditate placeat non, reiciendis magnam aspernatur esse corrupti, atque delectus, deleniti expedita amet quis exercitationem quam laborum vel illo?
                    </p>
                    </div>
                </div>

                <div className='col-md-3'>
                    <h3 className='mb-3'>Our Services</h3>
                   <ul>
                    <li>
                    <a href=''>special</a>
                    </li>
                    <li>
                    <a href=''>special</a>
                    </li>
                    <li>
                    <a href=''>special</a>
                    </li>
                     
                   </ul>
                </div>

                <div className='col-md-3'>
                    <h3 className='mb-3'>Quick Links</h3>
                   <ul>
                    <li>
                    <a href=''>About Us</a>
                    </li>
                    <li>
                    <a href=''>Services</a>
                    </li>
                    <li>
                    <a href=''>Project</a>
                    </li>
                    <li>
                        <a href=''>Contact Us</a>
                    </li>
                     
                   </ul>
                </div>

                <div className='col-md-3'>
                    <h3 className='mb-3'>Contact Us</h3>
                   <ul>
                    <li>
                    <a href=''>(888-8888-8888)</a>
                    </li>
                    <li>
                    <a href=''>7rdinfo@gmail,com</a>
                    </li>
                    <p>
                    Jl. Villa Ciomas No.12 BLOK N7, Ciomas Rahayu, Kec. Ciomas, Kabupaten Bogor, Jawa Barat 16610
                    </p>
                   </ul>
                </div>
                   <hr />
                   <div className= 'text-center pt-4'>Copyright 2020. All rights reserved. </div>
                </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
