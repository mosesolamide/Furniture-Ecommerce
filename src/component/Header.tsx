import type { JSX } from 'react'
import NavBar from './NavBar'
import HeaderContent from './HaederDesc'
import { useLocation } from 'react-router-dom'

export default function Header(): JSX.Element{
    const location = useLocation()
    const pathName = location.pathname // pathName

        return(
            <header className='bg-[#3B5D50] px-8 md:px-20 py-4'>
                <NavBar/>

                {/* check the patheName we are */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-10 md:mt-6'>
                    {pathName === '/' && (
                        <HeaderContent
                            headingText = "Modern Interior Design Studio"
                        />
                    )}

                    {pathName === '/shop' && (
                        <h1 className='text-white text-2xl md:text-4xl font-bold my-36'>Shop</h1>
                    )}

                    {pathName === '/about' && (
                        <HeaderContent 
                            headingText= 'About Us'
                        />
                    )}

                    {pathName === '/services' && (
                        <HeaderContent 
                            headingText= 'Service'
                        />
                    )}

                    {pathName === '/blog' && (
                        <HeaderContent 
                            headingText= 'Blog'
                        />
                    )}

                    {pathName === '/contactus' && (
                        <HeaderContent 
                            headingText= 'Contact Us'
                        />
                    )}

                    {pathName === '/checkout' && (
                        <HeaderContent 
                            headingText= 'Checkout'
                        />
                    )}

                    {pathName === '/cart' && (
                        <h1 className='text-white text-2xl md:text-4xl font-bold my-30'>Cart</h1>
                    )}
                </div>
            </header>
        )
}
