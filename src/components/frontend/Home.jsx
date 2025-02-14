import React from 'react'

import AboutImg from '../../assets/Images/about-us.jpeg';
import Header from '../common/Header';
import Footer from '../common/Footer';
import GantiBanImg from '../../assets/Images/gantiban.jpeg';
import ServiceImg from '../../assets/images/construction1.jpg';
import ServiceImg2 from '../../assets/images/gantioli.jpg';
import ConstructionImg from '../../assets/images/construction2.jpg';
import BlogImg from '../../assets/images/construction3.jpg';
import ProjectImg from '../../assets/images/aerox.jpeg';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import AvatarImg from '../../assets/images/author-2.jpg';
import { Pagination} from 'swiper/modules';
import About from '../common/About';



const Home = () => {
  return (
  <>
    <Header/>
    <main>
        {/* Landing Page Section */}
        <section className='section-1'>
            <div className='hero d-flex align-items-center'>
                <div className='container-fluid'>
                    <div className='text-center'>
                        <span>Selamat Datang di 7Rd Motors</span>
                            <h1>Rawat Motormu <br/>dengan Kami</h1>
                            <p>Memberikan pelayanan terbaik untuk kenyamanan dan keamanan Anda</p>
                            <div className='mt-4'>
                            <a className='btn btn-primary large'>Contact Now</a>
                            <a href='#' className='btn btn-secondary ms-2 large'>View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* About Us Section */}
        <About/>

        {/*Our Services*/}
        <section className='section-3 bg-light py-5'>
        <div className='container-fluid py-5'>
            <div className='section-header text-center'>
                <span>Our Services</span>
                <h2>Our Motorcycle Services </h2>
                <p>we provide the best motorcycle services for you</p>
            </div>
            <div className='row pt-4'>
                <div className='col-md-3 col-lg-3'>
                    <div className='item'>
                        <div className='service-image'>
                            <img src={ServiceImg2} className='w-100'/>
                            </div>
                             <div className='service-body'>
                             <div className='service-title'>
                                <h3>
                                    Ganti Oli
                                </h3>
                            </div><div className='service-content'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates eius nihil tenetur atque nam nisi dolorem, odit quis omnis quia tempore natus adipisci impedit itaque iure id, architecto enim at.</p> 
                            </div>
                                <a href='#' className='btn btn-primary small'>Read More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3'>
                    <div className='item'>
                        <div className='service-image'>
                            <img src={GantiBanImg} className='w-100'/>
                            </div>
                             <div className='service-body'>
                             <div className='service-title'>
                                <h3>
                                    Special ized Service
                                </h3>
                            </div><div className='service-content'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates eius nihil tenetur atque nam nisi dolorem, odit quis omnis quia tempore natus adipisci impedit itaque iure id, architecto enim at.</p> 
                            </div>
                                <a href='#' className='btn btn-primary small'>Read More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3'>
                    <div className='item'>
                        <div className='service-image'>
                            <img src={ServiceImg2} className='w-100'/>
                            </div>
                             <div className='service-body'>
                             <div className='service-title'>
                                <h3>
                                    Special ized Service
                                </h3>
                            </div><div className='service-content'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates eius nihil tenetur atque nam nisi dolorem, odit quis omnis quia tempore natus adipisci impedit itaque iure id, architecto enim at.</p> 
                            </div>
                                <a href='#' className='btn btn-primary small'>Read More</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-lg-3'>
                    <div className='item'>
                        <div className='service-image'>
                            <img src={GantiBanImg} className='w-100'/>
                            </div>
                             <div className='service-body'>
                             <div className='service-title'>
                                <h3>
                                    Special ized Service
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

        {/*Why Choose Us*/}
        <section className='section-4 py-5'>
            <div className='container py-5'>
                <span>Kenapa Pilih Kami?</span>
                <h2>Karena Kami Menawarkan</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia hic distinctio corrupti vitae accusantium ducimus enim error ex corporis provident quasi fuga maiores
                 laudantium a eaque ullam, <br/>
                 fugiat blanditiis veniam!</p>
            </div>
            <div className='row pt-4'>
                <div className='col-md-4'>
                    <div className='card shadow border-0 p-4'>
                        <div className='card-icon'>
                            <img src={Icon1} alt='' />
                        </div>
                        <div className='card-title mt-3'>
                            <h3>Pengalaman</h3>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est obcaecati id possimus! Magnam expedita, quisquam sint excepturi magni sed perferendis dolorem suscipit dolores itaque in possimus doloribus consectetur animi.
                            </p>
                            
                        </div>
                    </div>
                    </div>

                    <div className='col-md-4'>
                    <div className='card shadow border-0 p-4'>
                        <div className='card-icon'>
                            <img src={Icon2} alt='' />
                        </div>
                        <div className='card-title mt-3'>
                            <h3>skill</h3>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est obcaecati id possimus! Magnam expedita, quisquam sint excepturi magni sed perferendis dolorem suscipit dolores itaque in possimus doloribus consectetur animi.
                            </p>
                            
                        </div>
                    </div>
                </div>
                    <div className='col-md-4'>
                    <div className='card shadow border-0 p-4'>
                        <div className='card-icon'>
                            <img src={Icon3} alt='' />
                        </div>
                        <div className='card-title mt-3'>
                            <h3>Cepat</h3>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est obcaecati id possimus! Magnam expedita, quisquam sint excepturi magni sed perferendis dolorem suscipit dolores itaque in possimus doloribus consectetur animi.
                            </p>
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/*Our Project*/}
        <section className='section-3 bg-light py-5'>
        <div className='container-fluid py-5'>
            <div className='section-header text-center'>
                <span>Our Project</span>
                <h2>Our Motorcycle Project </h2>
                <p>Project Project Yang Sudah Kita Buat</p>
            </div>
            <div className='row pt-4'>
                <div className='col-md-3 col-lg-3'>
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
                <div className='col-md-3 col-lg-3'>
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
                <div className='col-md-3 col-lg-3'>
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
                <div className='col-md-3 col-lg-3'>
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

        {/*review*/}
        <section className='section-5 py-5'>
            <div className='container'>
                <div className='section-header text-center'>
                    <span>Testimonial</span>
                    <h2>What People Saying About Us</h2>
                    <p>Review</p>
                </div>
                <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
    >
        <SwiperSlide>
      <div className='card shadow border-0'>
        <div className='card-body p-5'>
            <div className='rating'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            </div>
            <div className='content pt-4 pb-2'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad unde exercitationem placeat nisi! Alias laborum ullam excepturi magnam porro, repellat libero totam deleniti facilis quia minima dignissimos. Quam, possimus voluptatibus!</p> 
            </div>
            <hr />
            <div className='d-flex meta'>
                <div>
                    <img src={AvatarImg} alt='' width={50} />
                </div>
                <div className='ps-3'>
                    <div className='name'>John Doe</div>
                    <div>CEO</div>
                </div>
            </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='card shadow border-0'>
        <div className='card-body p-5'>
            <div className='rating'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            </div>
            <div className='content pt-4 pb-2'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad unde exercitationem placeat nisi! Alias laborum ullam excepturi magnam porro, repellat libero totam deleniti facilis quia minima dignissimos. Quam, possimus voluptatibus!</p> 
            </div>
            <hr />
            <div className='d-flex meta'>
                <div>
                    <img src={AvatarImg} alt='' width={50} />
                </div>
                <div className='ps-3'>
                    <div className='name'>John Doe</div>
                    <div>CEO</div>
                </div>
            </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='card shadow border-0'>
        <div className='card-body p-5'>
            <div className='rating'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            </div>
            <div className='content pt-4 pb-2'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad unde exercitationem placeat nisi! Alias laborum ullam excepturi magnam porro, repellat libero totam deleniti facilis quia minima dignissimos. Quam, possimus voluptatibus!</p> 
            </div>
            <hr />
            <div className='d-flex meta'>
                <div>
                    <img src={AvatarImg} alt='' width={50} />
                </div>
                <div className='ps-3'>
                    <div className='name'>John Doe</div>
                    <div>CEO</div>
                </div>
            </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='card shadow border-0'>
        <div className='card-body p-5'>
            <div className='rating'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 20 20">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
            </div>
            <div className='content pt-4 pb-2'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad unde exercitationem placeat nisi! Alias laborum ullam excepturi magnam porro, repellat libero totam deleniti facilis quia minima dignissimos. Quam, possimus voluptatibus!</p> 
            </div>
            <hr />
            <div className='d-flex meta'>
                <div>
                    <img src={AvatarImg} alt='' width={50} />
                </div>
                <div className='ps-3'>
                    <div className='name'>John Doe</div>
                    <div>CEO</div>
                </div>
            </div>
        </div>
      </div>
      </SwiperSlide>
      ...
    </Swiper>
            </div>
        </section>


    </main>
    <Footer/>
    </>
  )
}

export default Home
