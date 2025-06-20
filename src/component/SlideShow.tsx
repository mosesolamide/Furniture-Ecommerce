import { useState } from 'react'
import type {JSX} from 'react'
import { GrNext, GrPrevious } from "react-icons/gr"
import './slide.css'

export default function SlideShow():JSX.Element {
  type Person = {
    img: string
    about:string
    name:string
    position: string
  }
  const person:Person[] = [
    {
      img: 'person-1.png',
      about: `Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. 
      Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque 
      habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer 
      convallis volutpat dui quis scelerisque.`,
      name: 'Maria Jones',
      position: 'CEO, Co-Founder, XYZ Inc.'
    },
    {
      img: 'person-1.png',
      about: `Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. 
      Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque 
      habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer 
      convallis volutpat dui quis scelerisque.`,
      name: 'Maria Joes',
      position: 'CEO, Co-Founder, XYZ Inc.'
    },
    {
      img: 'person-1.png',
      about: `Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. 
      Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque 
      habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer 
      convallis volutpat dui quis scelerisque.`,
      name: 'Maria Jone',
      position: 'CEO, Co-Founder, XYZ Inc.'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [direction, setDirection] = useState<string>('')

  const goToNext = (): void => {
    setDirection('right')
    setCurrentIndex((prevIndex) =>
      prevIndex === person.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToPrevious = (): void => {
    setDirection('left')
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? person.length - 1 : prevIndex - 1
    )
  }

  const getAnimationClass = (): string => {
    if (direction === 'right') return 'slide-right'
    if (direction === 'left') return 'slide-left'
    return ''
  }

  setInterval( () => {
    goToNext()
  },5000)

  

  return (
    <section className='flex flex-col items-center justify-center mt-10 md:mt-15'>
      <h1 className='text-xl md:text-3xl font-medium'>Testimonials</h1>

      <div
        key={`${currentIndex}-${direction}`}
      >
        <p className={`text-center text-sm md:text-xl leading-6 md:leading-8 text-gray-600 my-4 ${getAnimationClass()} transition-transform duration-500 ease-in-out`}>
          {person[currentIndex].about}
        </p>
        <div className='flex justify-between items-center w-full my-5'>
          <div
            className='hidden w-15 h-15 sm:flex justify-center items-center rounded-full bg-gray-300 group hover:bg-[#3B5D50] hover:cursor-pointer transition-all duration-300'
            onClick={goToPrevious}
          >
            <GrPrevious className='text-[#3B5D50] group-hover:text-white' />
          </div>
          <div className={`flex flex-col justify-center items-center ${getAnimationClass()} transition-transform duration-500 ease-in-out`}>
            <img src={person[currentIndex].img} alt="" className='w-15 h-15 rounded-full' />
            <h2 className='mt-2 text-sm font-bold text-gray-800'>{person[currentIndex].name}</h2>
            <span className='text-xs text-gray-600'>{person[currentIndex].position}</span>
          </div>
          <div
            className='hidden w-15 h-15 sm:flex justify-center items-center rounded-full bg-gray-300 group hover:bg-[#3B5D50] hover:cursor-pointer transition-all duration-300'
            onClick={goToNext}
          >
            <GrNext className='text-[#3B5D50] group-hover:text-white' />
          </div>
        </div>
        <div className='flex justify-center gap-2 mt-10'>
          <span className='w-3 h-3 bg-white rounded-full cursor-pointer'></span>
          <span className='w-3 h-3 bg-white rounded-full cursor-pointer'></span>
          <span className='w-3 h-3 bg-white rounded-full cursor-pointer'></span>
        </div>
      </div>
    </section>
  )
}
