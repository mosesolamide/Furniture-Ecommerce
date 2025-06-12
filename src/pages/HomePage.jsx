import React, { Suspense } from 'react'
import { getFurniture } from '../firebase/firebase'
import Loading from './Loading'
import { Await, useLoaderData, defer, Link } from 'react-router-dom'
import cross from '../assets/cross.svg'
import choose from  '../assets/choose.jpg'
import support from '../assets/support.svg'
import truck from '../assets/truck.svg'
import roll from '../assets/roll.svg'
import bag from '../assets/bag.svg'

export async function loader() {
  return defer({ product: getFurniture() })
}

export default function HomePage() {
  const { product } = useLoaderData()

  return (
    <>
        <section className='grid grid-cols-1 gap-20 md:gap-8 lg:grid-cols-3 my-20'>
          <div>
            <h1 className='font-medium text-2xl lg:text-3xl text-gray-800'>Crafted with excellent with material</h1>
            <p className='mb-5 text-xs lg:text-sm text-gray-600'>
              Donec vitae odio quis nisl dapibus malesuada.
              Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <Link
              className='bg-gray-800 hover:bg-gray-950 transition-colors duration-500 text-white px-5 py-3 
              rounded-full'
            >
              Explore
            </Link>
          </div>
          <div className='col-span-2 flex flex-col md:flex-row gap-20 md:mt-5 lg:mt-0'>
            <Suspense fallback={<Loading />}>
              <Await resolve={product}>
                {(furnitureList) => (
                  <ul className="flex flex-col md:flex-row gap-20 w-full list-none p-0 m-0">
                    {furnitureList.map((item) => (
                      <li key={item.id} className="flex-1">
                        <article 
                          className='flex flex-col items-center justify-center relative group hover:cursor-pointer'
                        >
                          <div className='w-50 h-50'>
                            <img 
                              src={item.imageUrl} 
                              alt={item.name} 
                              className='w-full h-full object-contain transition-all duration-300 ease-in-out transform translate-y-0 group-hover:translate-y-[-19%]' 
                            />
                          </div>
                          <div className='flex flex-col items-center py-0.5'>
                            <span className='text-gray-900 text-xs lg:text-sm font-medium'>{item.name}</span>
                            <strong className='text-gray-900 text-xs lg:text-sm font-bold'>${item.price}.00</strong>
                          </div>
                          <div 
                            className='transition-all duration-300 ease-in-out transform h-60 md:h-40 lg:h-50
                            opacity-0 scale-y-0 origin-bottom group-hover:scale-y-100 group-hover:opacity-100
                            bg-gray-200 absolute w-full z-[-10] rounded-xl top-[60%] sm:top-[65%] md:top-28 flex
                            justify-center items-center'
                          >
                            <img 
                              src={cross} 
                              alt="" 
                              className='bg-gray-900 p-2 rounded-full opacity-0 transition-all ease-in-out duration-300
                              transform translate-y-0 group-hover:opacity-100 group-hover:translate-y-30 
                              md:group-hover:translate-y-23' 
                            />
                          </div>
                        </article>
                      </li>
                    ))}
                  </ul>
                )}
              </Await>
            </Suspense>
          </div>
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
                <img src={choose} alt="why you choose us image" className='rounded-2xl w-full h-full' />
          </div>
        </section>
    </>
  )
}