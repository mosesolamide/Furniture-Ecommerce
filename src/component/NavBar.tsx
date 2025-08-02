import { useState } from "react"
import { NavLink } from 'react-router-dom'
import cart from '../assets/cart.svg'
import user from '../assets/user.svg'

export default function NavBar(){
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)
    return(
        <div className='grid grid-cols-2 md:flex w-full md:justify-between md:items-center'>
            <div className="flex items-baseline gap-0.5 ">
                <h1 className="text-3xl font-medium text-white">Furni</h1>
                <span className="bg-[#77968a] w-1.5 h-1.5 rounded-full"></span>
            </div>
            <i 
                className="bi bi-list text-3xl text-[#96b6aa] cursor-pointer md:hidden ml-auto md:ml-0"
                onClick={ () => setIsMenuOpen(prev => !prev)}
            ></i>
            <nav className="text-sm font-bold text-[hsl(157,13%,53%)]">
                <ul className={`${!isMenuOpen? "hidden" : ""} md:flex md:gap-6 lg:gap-10`}>
                    <li className="mt-4 mb-6 md:mb-0 md:mt-0">
                        <NavLink 
                            className={
                                 ({ isActive }) => isActive? 
                                 "relative text-white pb-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-amber-400 transition-all duration-500" : 
                                 "relative hover:text-white pb-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-amber-400 after:scale-x-0 after:origin-left after:transition-all duration-500 after:duration-600 md:hover:after:scale-x-100" 
                                }
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="mb-6 md:mb-0">
                        <NavLink 
                            className={
                                 ({ isActive }) => isActive? 
                                 "relative text-white pb-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-amber-400 transition-all duration-500" : 
                                 "relative hover:text-white pb-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-amber-400 after:scale-x-0 after:origin-left after:transition-all duration-500 after:duration-600 md:hover:after:scale-x-100" 
                                }
                            to="/shop"
                        >
                            Shop
                        </NavLink>
                    </li>
                    <li className="mb-6 md:mb-0">
                        <NavLink 
                            className={
                                 ({ isActive }) => isActive? 
                                 "relative text-white pb-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-amber-400 transition-all duration-500" : 
                                 "relative hover:text-white pb-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-amber-400 after:scale-x-0 after:origin-left after:transition-all duration-500 after:duration-600 md:hover:after:scale-x-100" 
                                }
                            to="/about"
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li className="mb-6 md:mb-0">
                        <NavLink 
                            className={
                                 ({ isActive }) => isActive? 
                                 "relative text-white pb-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-amber-400 transition-all duration-500" : 
                                 "relative hover:text-white pb-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-amber-400 after:scale-x-0 after:origin-left after:transition-all duration-500 after:duration-600 md:hover:after:scale-x-100" 
                                }
                            to="/services"
                        >
                            Services
                        </NavLink>
                    </li>
                    <li className="mb-6 md:mb-0">
                        <NavLink 
                            className={
                                 ({ isActive }) => isActive? 
                                 "relative text-white pb-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-amber-400 transition-all duration-500" : 
                                 "relative hover:text-white pb-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-amber-400 after:scale-x-0 after:origin-left after:transition-all duration-500 after:duration-600 md:hover:after:scale-x-100" 
                                }
                            to="/blog"
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li className="mb-6 md:mb-0">
                        <NavLink 
                            className={
                                 ({ isActive }) => isActive? 
                                 "relative text-white pb-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-amber-400 transition-all duration-500" : 
                                 "relative hover:text-white pb-1.5 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-amber-400 after:scale-x-0 after:origin-left after:transition-all duration-500 after:duration-600 md:hover:after:scale-x-100" 
                                }
                            to="/contactus"
                        >
                            Contact Us
                        </NavLink>
                    </li>
                    <li className="flex items-center gap-6 md:flex-row md:gap-8">
                        <NavLink 
                            to="/user"
                        >
                            <img src={user} alt="user account"/>
                        </NavLink>

                        <NavLink 
                            to="/cart"
                        >
                            <img src={cart} alt="cart"/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}