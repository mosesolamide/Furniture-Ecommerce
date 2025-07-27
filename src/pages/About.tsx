import type {JSX} from 'react'
import { Link } from 'react-router-dom'
import WhyChooseUs from '../component/Features'
import SlideShow from '../component/SlideShow'
import Person1 from '../assets/person_1.jpg'
import Person2 from '../assets/person_2.jpg'
import Person3 from '../assets/person_3.jpg'
import Person4 from '../assets/person_4.jpg'

export default function About():JSX.Element {

    type Members = {
        img: string
        name: string
        post: string
        note: string
    }

    const teamMembers: Members[] = [
        {
            img: Person1,
            name: 'Lawson Arnold',
            post: 'CEO, Founder, Atty.',
            note: `Separated they live in. Separated they live
             in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`
        },
        {
            img: Person2,
            name: 'Jeremy Walker',
            post: 'CEO, Founder, Atty.',
            note: `Separated they live in. Separated they live
             in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`
        },
        {
            img: Person3,
            name: 'Patrick White',
            post: 'CEO, Founder, Atty.',
            note: `Separated they live in. Separated they live
             in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`
        },
        {
            img: Person4,
            name: 'Kathryn Ryan',
            post: 'CEO, Founder, Atty.',
            note: `Separated they live in. Separated they live
             in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`
        }
    ]
    return(
        <>
           <div className='mt-20'>
                <WhyChooseUs />
           </div>
                <div className='flex flex-col justify-center items-center mt-20 mb-48'>
                    <h1 className='text-3xl text-gray-900 font-medium '>Our team</h1>
                    <section>
                        <ul className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
                            {
                                teamMembers.map( ({ name, img, note, post },index) => (
                                    <li key={index}>
                                        <article>
                                            <img 
                                                src={img} 
                                                alt="image of team members" 
                                                className='mb-8 max-w-[300px] md:max-w-[200px] lg:max-w-[250px]' 
                                            />
                                            <h2 className='text-2xl underline text-gray-900'>{name}</h2>
                                            <span className='inline-block mt-4 mb-6 text-gray-500 text-sm'>{post}</span>
                                            <p className='text-gray-500 text-sm leading-6 mb-4'>{note}</p>
                                            <Link 
                                                to="//"
                                                className='underline text-gray-900 hover:cursor-pointer'
                                            >
                                                Learn more
                                            </Link>
                                        </article>
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                </div>
            <SlideShow />
        </>
    )
}