import type { JSX } from 'react'
import { Link } from 'react-router-dom'
import Products from './Products'

export default function Crafted():JSX.Element{
    return(
        <section className='grid grid-cols-1 gap-20 md:gap-8 lg:grid-cols-3 place-items-center my-20'>
        
            <div>
            <h1 className='font-medium text-2xl lg:text-3xl text-gray-800'>Crafted with excellent with material</h1>
            <p className='mb-5 text-xs lg:text-sm text-gray-600'>
                Donec vitae odio quis nisl dapibus malesuada.
                Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <Link
                className='bg-gray-800 hover:bg-gray-950 transition-colors duration-500 text-white px-5 py-3 
                rounded-full'
                to='explore'
            >
                 Explore
            </Link>
            </div>
        
            {/* small list of the product */}
            <Products
                size={3}
            />
        
        </section>
    )
}