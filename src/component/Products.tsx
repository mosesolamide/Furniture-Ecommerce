import type { JSX } from 'react'
import { Suspense, useState, useEffect } from 'react'
import type { FurnitureType } from '../firebase/firebase'
import { Await, useLoaderData } from 'react-router-dom'
import Loading from './Loading'
import cross from '../assets/cross.svg'
import Success from './Succes'
import { AnimatePresence, motion } from "framer-motion"

export default function Products({ size }: { size?: number }): JSX.Element {
    const { product } = useLoaderData() as { product: Promise<FurnitureType[]> }
    const [touchedId, setTouchedId] = useState<string | null>(null)
    const [touchTimeout, setTouchTimeout] = useState<NodeJS.Timeout | null>(null)
    const [showSuccess, setShowSuccess] = useState<boolean>(false)
    const [successTimeout, setSuccessTimeout] = useState<NodeJS.Timeout | null>(null)

    useEffect(() => {
        return () => {
            if (touchTimeout) clearTimeout(touchTimeout)
            if (successTimeout) clearTimeout(successTimeout)
        }
    }, [touchTimeout])

    const handleTouchStart = (id: string) => {
        setTouchedId(id)
        if (touchTimeout) clearTimeout(touchTimeout)
    }

    const handleTouchEnd = () => {
        const timeout = setTimeout(() => {
            setTouchedId(null)
        }, 10000) 
        setTouchTimeout(timeout)
    }

    const handleAddToCart = (itemPicked: FurnitureType) => {
        try {
            // 1. Get existing cart or initialize empty array
            const existingCart: Array<FurnitureType & { quantity: number }> = 
                JSON.parse(localStorage.getItem("carts") || '[]')

            // 2. Check if item already exists in cart
            const existingItemIndex = existingCart.findIndex(item => item.id === itemPicked.id)

            if (existingItemIndex >= 0) {
                // 3a. If exists, increment quantity
                existingCart[existingItemIndex].quantity += 1
            } else {
                // 3b. If new, add with quantity = 1
                existingCart.push({
                    ...itemPicked, // Spread all original properties
                    quantity: 1    // Add quantity property
                })
            }
            // 4. Save updated cart
            localStorage.setItem("carts", JSON.stringify(existingCart))
            setShowSuccess(true)

            const timer = setTimeout( () => {
                setShowSuccess(false)
            },2000)
            setSuccessTimeout(timer)

        } catch (err) {
            console.error("Cart update failed:", err)
        }
    }

    return (
       <>
         <AnimatePresence>
            {showSuccess && (
                <motion.div 
                    className='fixed inset-0 flex justify-center z-50 mt-6'
                    initial={{ y: -100, opacity: 0}}
                    animate={{ y: 0, opacity: 100}}
                    transition={{
                        type:"tween",
                        duration: 0.5,
                        ease: "easeOut"
                    }}
                    exit={{ y: "-100%", opacity: 0 }}
                >
                    <Success actionMessage='Successfully Added to Cart'/>
                </motion.div>
            )}
         </AnimatePresence>
        <div className='col-span-2 flex flex-col md:flex-row gap-20 md:mt-5 lg:mt-0'>
            <Suspense fallback={<Loading />}>
                <Await resolve={product}>
                    {(furnitureList) => (
                        <ul className="flex flex-col md:flex-row flex-wrap gap-20 md:gap-12 w-full list-none p-0 m-0">
                            {furnitureList.slice(0, size).map((item: FurnitureType): JSX.Element => (
                                <li key={item.id} className="flex-1">
                                    <article
                                        className='flex flex-col items-center justify-center relative
                                         group hover:cursor-pointer h-[330px] sm:h-[340px] md:h-[310px] '
                                        onTouchStart={() => handleTouchStart(item.id)}
                                        onTouchEnd={handleTouchEnd}
                                        onMouseEnter={() => setTouchedId(item.id)}
                                        onMouseLeave={() => setTouchedId(null)}
                                    >
                                        <div className='w-50 h-50 z-[10]'>
                                            <img
                                                src={item.imageUrl}
                                                alt={item.name}
                                                className={`w-full h-full object-contain transition-all 
                                                duration-300 ease-in-out transform ${touchedId === item.id ? 'translate-y-[-19%]' : 'translate-y-0'}`}
                                            />
                                        </div>
                                        <div className='flex flex-col items-center py-0.5 z-[10]'>
                                            <span className='text-gray-900 text-xs lg:text-sm font-medium'>{item.name}</span>
                                            <strong className='text-gray-900 text-xs lg:text-sm font-bold'>${item.price}.00</strong>
                                        </div>
                                        <div
                                            className={`transition-all duration-300 ease-in-out transform h-55 md:h-40 lg:h-50
                                            ${touchedId === item.id ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} origin-bottom
                                            bg-gray-300 absolute w-full  rounded-xl top-[30%] sm:top-[34%] md:top-30 flex
                                            justify-center items-center`}
                                        >
                                            <img
                                                src={cross}
                                                onClick={ () => handleAddToCart(item)}
                                                alt="Add to cart"
                                                className={`bg-gray-900 p-2 rounded-full transition-all ease-in-out duration-300 
                                                ${touchedId === item.id ? 'opacity-100 translate-y-30 md:translate-y-23' :
                                                'opacity-0 translate-y-0'}`}
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
       </> 
    )
}