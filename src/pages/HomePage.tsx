import type {JSX} from 'react'
import SlideShow from '../component/SlideShow'
import { defer, Link  } from 'react-router-dom'
import { getFurniture } from '../firebase/firebase'
import choose from  '../assets/choose.jpg'
import support from '../assets/support.svg'
import truck from '../assets/truck.svg'
import roll from '../assets/roll.svg'
import bag from '../assets/bag.svg'
import imgOne from '../assets/img-grid-1.jpg'
import imgTwo from '../assets/img-grid-2.jpg'
import imgThree from '../assets/img-grid-3.jpg'
import Products from '../component/Products'

export async function loader() {
  return defer({ product: getFurniture() })
}

export default function HomePage():JSX.Element {
  return (
    <>
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

        <section className='mt-40 grid grid-cols-1 lg:grid-cols-2 gap-5 place-items-center'>
          <div className='h-[500px]'>
            <h1 className='font-medium md:font-bold text-2xl lg:text-3xl text-gray-800'>Why Choose Us</h1>
            <p className='text-xs my-2 text-gray-600'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
              Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <div className='grid grid-cols-2 gap-5'>
              <div>
                  <img src={truck} alt="image of truck" />
                  <div>
                      <span className='font-medium text-gray-800 text-sm'>Fast & Free Shipping</span>
                      <p className='font-medium text-xs text-gray-600'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
              </div>
              <div>
                  <img src={bag} alt="image of bag" />
                  <div>
                      <span className='font-medium text-gray-800 text-sm'>Easy to Shop</span>
                      <p className='font-medium text-xs text-gray-600'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
              </div>
              <div>
                  <img src={support} alt="image of support" />
                  <div>
                      <span className='font-medium text-gray-800 text-sm'>24/7 Support</span>
                      <p className='font-medium text-xs text-gray-600'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
              </div>
              <div>
                  <img src={roll} alt="image of roll" />
                  <div>
                      <span className='font-medium text-gray-800 text-sm'>24/7 Support</span>
                      <p className='font-medium text-xs text-gray-600'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
              </div>
            </div>
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
          
          <div className='mt-10 md:mt-15 flex flex-wrap gap-5 md:gap-10 justify-center items-center'>

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
        <SlideShow />

      {/* recent blog */}
        <section>
          <div>
            
          </div>
        </section>
    </>
  )
}