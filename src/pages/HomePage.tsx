import type {JSX} from 'react'
import { lazy, Suspense } from 'react'
import { defer, Link  } from 'react-router-dom'
import { getFurniture } from '../firebase/firebase'
import imgOne from '../assets/img-grid-1.avif'
import imgTwo from '../assets/img-grid-2.avif'
import imgThree from '../assets/img-grid-3.avif'
import Crafted from '../component/Crafted'
import choose from  '../assets/choose.avif'
import Features from '../component/Features'

const SlideShow = lazy(() => import('../component/SlideShow'))
const BlogPosts = lazy(() => import('../component/BlogPosts'))

export async function loader() {
  return defer({ product: getFurniture() })
}

export default function HomePage():JSX.Element {
  return (
    <>
        {/* Crafted with excellent material. */}
        <Crafted />

        {/* why choose us */}
        <section className='mt-40 grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center'>
          <div className='h-[500px]'>
            <h1 className='font-medium md:font-bold text-2xl lg:text-3xl text-gray-800'>Why Choose Us</h1>
            <p className='text-xs sm:text-sm my-2 sm:my-4 text-gray-600 leading-6'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
              Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <Features />
            </div>
          <div className='max-w-[500px] h-[500px]'>
            <img src={choose} alt="why you choose us image" className='rounded-2xl w-full h-full object-cover' />
          </div>
        </section>

        <section>
          <div className='mt-10 md:mt-30 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20'>
              <div>
                <h1 
                  className='font-medium md:font-bold text-2xl lg:text-3xl text-gray-800'
                >
                  We Help You Make Modern Interior Design
                </h1>
                <p className='text-[13px]/7 md:text-[15px] font-medium text-gray-600 my-5'>
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.
                  Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                  Pellentesque habitant morbi tristique senectus et netus et malesuada
                </p>
                <ul className='list-disc grid grid-cols-2 gap-2 text-xs md:text-sm text-gray-600 mb-6'>
                  <li>Donec vitae odio quis nisl dapibus malesuada</li>
                  <li>Donec vitae odio quis nisl dapibus malesuada</li>
                  <li>Donec vitae odio quis nisl dapibus malesuada</li>
                  <li>Donec vitae odio quis nisl dapibus malesuada</li>
                </ul>
                <Link 
                  className='bg-gray-800 hover:bg-gray-900 transition-colors 
                  duration-300 text-white rounded-full px-5 md:px-6 py-2 md:py-3'
                  to="explore"
                >
                  Explore
                </Link>
              </div>

              <div className='grid grid-cols-3 grid-rows-2 gap-2 max-w-xl'>
                <img src={imgOne} alt="" className='rounded-2xl row-span-2 col-span-2' />
                <img src={imgTwo} alt="" className='rounded-2xl row-span-1 col-span-1' />
                <img src={imgThree} alt="" className='rounded-2xl row-span-1 col-span-1' />
              </div>
          </div>
          
          <div className='mt-20 md:my-36 flex flex-wrap gap-5 md:gap-10 justify-center items-center'>

            <div className='flex gap-3 items-center max-w-[300px]'>
              <div className='bg-[#bfdfdb] max-w-20 rounded-2xl'>
                <img src="product-1.png" alt="" className='w-full object-cover' />
              </div>
              <div className=' text-gray-600'>
                <span className='text-gray-800 text-sm font-bold'>Nordic Chair</span>
                <p className='my-1 text-xs md:text-sm font-medium'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                <a href="" className='text-gray-800 hover:text-gray-600'>Read More</a>
              </div>
            </div>
            
            <div className='flex gap-3 items-center max-w-[300px]'>
              <div className='bg-[#bfdfdb] max-w-20 rounded-2xl'>
                <img src="product-2.png" alt="" className='w-full object-cover' />
              </div>
              <div className=' text-gray-600'>
                <span className='text-gray-800 text-sm font-bold'>Kruzo Aero Chair</span>
                <p className='my-1 text-xs md:text-sm font-medium'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                <a href="" className='text-gray-800 hover:text-gray-600'>Read More</a>
              </div>
            </div>

            <div className='flex gap-3 items-center max-w-[300px]'>
              <div className='bg-[#bfdfdb] max-w-20 rounded-2xl'>
                <img src="product-3.png" alt="" className='w-full object-cover' />
              </div>
              <div className=' text-gray-600'>
                <span className='text-gray-800 text-sm font-bold'>Ergonomic Chair</span>
                <p className='my-1 text-xs md:text-sm font-medium'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                <a href="" className='text-gray-800 hover:text-gray-600'>Read More</a>
              </div>
            </div>

          </div>
        </section>

        {/* SLIDESHOW */}
        <Suspense fallback={<div>Loading slideshow...</div>}>
          <SlideShow />
        </Suspense>

        {/* Blog Post*/}
        <section className='mt-20'>

          <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center w-full text-gray-800'>
            <h1 className='text-2xl md:text-3xl font-medium'>Recent Blog</h1>
            <Link 
              to="/blog"
              className='underline text-sm md:text-lg font-medium'
            >
              View All Posts
            </Link>
          </div>
            <Suspense fallback={<div>Loading blog posts...</div>}>
              <BlogPosts />
            </Suspense>
        </section>
  
    </>
  )
}