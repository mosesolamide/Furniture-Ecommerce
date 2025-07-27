import type {JSX} from 'react'
import { Suspense } from 'react'
import type { FurnitureType } from '../firebase/firebase'
import { Await, useLoaderData } from 'react-router-dom'
import Loading from './Loading'
import cross from '../assets/cross.svg'

export default function Products({size}:{size?:number}):JSX.Element{
    const { product } = useLoaderData() as { product: Promise<FurnitureType[]> }
    return(
        <div className='col-span-2 flex flex-col md:flex-row gap-20 md:mt-5 lg:mt-0'>
            <Suspense fallback={<Loading />}>
              <Await resolve={product}>
                {(furnitureList) => (
                  <ul className="flex flex-col md:flex-row flex-wrap gap-30 md:gap-12 w-full list-none p-0 m-0">
                    {furnitureList.slice(0,size).map((item:FurnitureType):JSX.Element => (
                      <li key={item.id} className="flex-1">
                        <article 
                          className='flex flex-col items-center justify-center relative group hover:cursor-pointer'
                          onTouchStart={ () => alert("Moved")}
                          onTouchEnd={ () => alert("Ok")}
                        >
                          <div className='w-50 h-50'>
                            <img 
                              src={item.imageUrl} 
                              alt={item.name} 
                              className='w-full h-full object-contain transition-all
                               duration-300 ease-in-out transform translate-y-0 group-hover:translate-y-[-19%]' 
                            />
                          </div>
                          <div className='flex flex-col items-center py-0.5'>
                            <span className='text-gray-900 text-xs lg:text-sm font-medium'>{item.name}</span>
                            <strong className='text-gray-900 text-xs lg:text-sm font-bold'>${item.price}.00</strong>
                          </div>
                          <div 
                            className='transition-all duration-300 ease-in-out transform h-55 md:h-40 lg:h-50
                            opacity-0 scale-y-0 origin-bottom group-hover:scale-y-100 group-hover:opacity-100
                            bg-gray-300 absolute w-full z-[-10] rounded-xl top-[30%] sm:top-[34%] md:top-20 flex
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
    )
}