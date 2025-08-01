import type {JSX} from 'react'
import Features from '../component/Features'
import Crafted from '../component/Crafted'
import SlideShow from '../component/SlideShow'

export default function Services():JSX.Element {
    return(
        <>
            <div className='flex flex-col md:flex-row mt-22 gap-5 px-4'>
                <Features />
                <Features />
            </div>
            <div className='my-40'>
                <Crafted />
            </div>
            <div>
                <SlideShow />
            </div>
        </>
    )
}