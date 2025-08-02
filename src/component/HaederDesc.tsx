import type {JSX} from 'react'
import { Link } from "react-router-dom"
import couch from '../assets/couch.avif'

export default function HeaderContent({ headingText }:{ headingText:string }): JSX.Element{
    return(
        <>
            <div>
                <h1 className='text-white text-2xl md:text-4xl font-bold'>{headingText}</h1>
                <p className='text-xs md:text-sm my-4 font-medium text-white'>
                    Donec vitae odio quis nisl dapibus malesuada.
                    Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                </p>
                <div className='flex items-center gap-3'>
                    <Link 
                        className='bg-yellow-400 hover:bg-yellow-500 transition-colors duration-400
                         text-[#2d4e43] font-bold text-1xl px-3 md:px-4 py-2 md:py-3 rounded-full'
                        to=""
                    >
                        Shop Now
                    </Link>

                    <Link
                        className='text-white border-2 border-[#96b6aa] hover:border-white
                         transition-border duration-400 px-3 md:px-4 py-2 md:py-3 rounded-full'
                        to="."
                    >
                        Explore
                    </Link>
                </div>
            </div>
            <div>
               <img 
                src={couch} 
                alt="image of couch" 
                fetchPriority="high" 
                className="w-full max-w-[600px] h-auto"
            />
            </div>
        </>
    )
}