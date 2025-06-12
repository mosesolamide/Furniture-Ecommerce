import React from 'react'
import sofa from '../assets/sofa.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return(
        <footer className='p-10 mt-40 '>
            <div className='relative'>
                <div className='flex gap-2 items-center mb-2'>
                    <i className="bi bi-envelope"></i>
                    <span className='text-md font-bold text-[#3B5D50]'>Subscribe to Newsletter</span>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 place-items-center md:w-2xl'>
                    <input 
                        type="text" 
                        className='border border-gray-400 rounded-md text-sm w-full indent-3 py-3 outline-none focus:border-green-700' 
                        placeholder='Enter your name' 
                    />
                    <input 
                        type="text" 
                        className='border border-gray-400 rounded-md text-sm w-full indent-3 py-3 outline-none focus:border-green-700' 
                        placeholder='Enter your email'
                    />
                    <button 
                        className='w-full bg-green-900 hover:bg-green-950 cursor-pointer 
                        transition-colors duration-400 text-white rounded-md py-2.5'
                    >
                            <i className="bi bi-send"></i>
                    </button>
                </div>
                <div className=''>
                    <img 
                        src={sofa} 
                        alt="image of couch" 
                        className='w-23 sm:w-30 lg:w-50 absolute left-[70%] sm:left-[77%] md:left-[82%] lg:left-[79%]
                        bottom-40 sm:bottom-16 md:bottom-15 lg:bottom-0'
                    />
                </div>
            </div>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-3 items-center gap-20'>
                <div>
                    <div className="flex items-baseline gap-0.5 ">
                        <h1 className="text-3xl font-medium text-[#3B5D50]">Furni</h1>
                        <span className="bg-[#77968a] w-1.5 h-1.5 rounded-full"></span>
                    </div>
                    <p className='text-gray-600 text-sm my-4'>
                        Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. 
                        Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque 
                        habitant
                    </p>
                    <div className='my-3 flex gap-4'>
                        <a 
                            href='#' 
                            className='text-green-800 hover:text-white bg-green-100 hover:bg-green-800
                             transition-colors duration-500 w-8 h-8 p-5 flex justify-center items-center rounded-full'
                        >
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a 
                            href='#' 
                            className='text-green-800 hover:text-white bg-green-100 hover:bg-green-800
                             transition-colors duration-500 w-8 h-8 p-5 flex justify-center items-center rounded-full'
                        >
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a 
                            href='#' 
                            className='text-green-800 hover:text-white bg-green-100 hover:bg-green-800
                             transition-colors duration-500 w-8 h-8 p-5 flex justify-center items-center rounded-full'
                        >
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a 
                            href='#' 
                            className='text-green-800 hover:text-white bg-green-100 hover:bg-green-800
                             transition-colors duration-500 w-8 h-8 p-5 flex justify-center items-center rounded-full'
                        >
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className='text-xs md:text-sm font-medium grid grid-cols-2 md:grid-cols-4 gap-4 lg:col-span-2'>
                    <ul className='grid gap-1'>
                        <li className='hover:text-gray-500'><Link to="about">About Us</Link></li>
                        <li className='hover:text-gray-500'><Link to="services">Services</Link></li>
                        <li className='hover:text-gray-500'><Link to="blog">Blog</Link></li>
                        <li className='hover:text-gray-500'><Link to="contactus">Contact Us</Link></li>
                    </ul>

                    <ul className='grid gap-1'>
                        <li className='hover:text-gray-500'><Link>Support</Link></li>
                        <li className='hover:text-gray-500'><Link>Knowledge</Link></li>
                        <li className='hover:text-gray-500'><Link>Live Chat</Link></li>
                    </ul>

                    <ul className='grid gap-1'>
                        <li className='hover:text-gray-500'><Link>Jobs</Link></li>
                        <li className='hover:text-gray-500'><Link>Leadership</Link></li>
                        <li className='hover:text-gray-500'><Link>Our team</Link></li>
                        <li className='hover:text-gray-500'><Link>Privacy Policy</Link></li>
                    </ul>

                   <ul className='grid gap-1'>
                        <li className='hover:text-gray-500'><Link>Nordic Chair</Link></li>
                        <li className='hover:text-gray-500'><Link>kruzo Aero</Link></li>
                        <li className='hover:text-gray-500'><Link>Ergonomic Chair</Link></li>
                    </ul>
                </div>
            </div>
            <hr className='my-4 text-gray-400'/>
            <div className='text-xs font-medium flex flex-col md:flex-row items-center md:justify-between text-center'>
                <p className='text-gray-500'>Copyright ©2025. All Rights Reserved. — Designed with love by Untree.co</p>
                <ul className='flex gap-6'>
                    <li className='hover:text-gray-500'><Link>Term & Conditions</Link></li>
                    <li className='hover:text-gray-500'><Link>Privacy Policy</Link></li>
                </ul>
            </div>
        </footer>
    )
}