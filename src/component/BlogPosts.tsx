import type { JSX } from 'react'
import blogOne from '../assets/post-1.jpg'
import blogTwo from '../assets/post-2.jpg'
import blogThree from '../assets/post-3.jpg'

export default function BlogPosts():JSX.Element{
    return(
          <div className='flex flex-col md:flex-row gap-16 md:gap-5 justify-center items-center mt-10'>
            <div className="max-w-85">
              <div className=' group hover:cursor-pointer'>
                  <img 
                    src={blogOne} 
                    alt="images of our blogs" 
                    className='w-full h-full rounded-2xl group-hover:opacity-55 transition-opacity duration-400' 
                  />
              </div>
              <h2 className='mt-4 text-xs lg:text-[13px] text-gray-700 font-bold'>First Time Home Owner Ideas</h2>
              <p className='text-gray-500 text-xs mt-3'>
                by 
                <b className='text-gray-800'> Kristin Watson </b> 
                on <b className='text-gray-800'>Dec 19, 2021</b>
              </p>
            </div>
            <div className="max-w-85">
              <div className=' group hover:cursor-pointer'>
                  <img 
                    src={blogTwo} 
                    alt="images of our blogs" 
                    className='w-full h-full rounded-2xl group-hover:opacity-55 transition-opacity duration-400' 
                  />
              </div>
              <h2 className='mt-4 text-xs lg:text-[13px] text-gray-700 font-bold'>How To Keep Your Furniture Clean</h2>
              <p className='text-gray-500 text-xs mt-3'>
                by
                <b className='text-gray-800'> Robert Fox </b> 
                on <b className='text-gray-800'>Dec 15, 2021</b>
              </p>
            </div>
            <div className="max-w-85">
              <div className=' group hover:cursor-pointer'>
                  <img 
                    src={blogThree} 
                    alt="images of our blogs" 
                    className='w-full h-full rounded-2xl group-hover:opacity-55 transition-opacity duration-400' 
                  />
              </div>
              <h2 className='mt-3 text-xs lg:text-[13px] text-gray-700 font-bold'>Small Space Furniture Apartment Ideas</h2>
              <p className='text-gray-500 text-xs mt-3'>
                by <b className='text-gray-800'> Kristin Watson </b> 
                on <b className='text-gray-800'>Dec 19, 2021</b>
              </p>
            </div>
          </div>
    )
}