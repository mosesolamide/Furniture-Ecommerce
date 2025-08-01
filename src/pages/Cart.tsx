import type { JSX } from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import type { FurnitureType } from '../firebase/firebase'
import { AnimatePresence, motion } from 'framer-motion'
import Success from '../component/Succes'


export default function Cart(): JSX.Element {
    const navigate = useNavigate()
    const [newCart, setNewCart] = useState<Array<FurnitureType & { quantity: number }>>([])
    const [showDelete, setShowDelete] = useState<boolean>(false)
    const [deleteTimer,setDeleteTimer] = useState<NodeJS.Timeout | null>()

    useEffect(() => {
        const cartStorage = JSON.parse(localStorage.getItem("carts") || "[]")

        // Ensure each item has quantity and matches the expected type
        const initializedCart = cartStorage.map((item: any) => ({
            ...item,
            quantity: item.quantity || 1
        }))
        setNewCart(initializedCart)
    }, [])

    useEffect( () =>{
        if(deleteTimer) return () => clearTimeout(deleteTimer)
    },[deleteTimer])

    useEffect(() => {
        const timer = setTimeout(() => {
            localStorage.setItem("carts", JSON.stringify(newCart))
        }, 300)

        return () => clearTimeout(timer)
    }, [newCart])

    const updateQuantity = (targetIndex: number, newQuantity: number) => {
        if (newQuantity < 1) return
        setNewCart(prev =>
            prev.map((item, index) =>
                index === targetIndex ? { ...item, quantity: newQuantity } : item
            )
        )
    }

    const increase = (index: number) => {
        updateQuantity(index, newCart[index].quantity + 1)
    }

    const decrease = (index: number) => {
        if (newCart[index].quantity > 1) {
            updateQuantity(index, newCart[index].quantity - 1)
        }
    }

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10)
        updateQuantity(index, isNaN(value) ? 1 : value)
    }

    const removeItem = (id: string) => {
        setNewCart( prev => prev.filter( item => item.id !== id))
        setShowDelete(true)
        
        //remove alert message after 3seconds
        const timer = setTimeout( () => {
            setShowDelete(false)
        },2000)
        setDeleteTimer(timer)
    }

    // Calculate totals
    const subtotal = newCart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const total = subtotal

    return (
        <>
         <AnimatePresence>
            {showDelete && (
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
                    <Success actionMessage='Successfully removed from cart' />
                </motion.div>
            )}
         </AnimatePresence>

         <div className='flex flex-col items-center my-10'>
            <table className="w-full max-w-6xl">
                <thead className='border-b-2 border-black'>
                    <tr className='text-center text-xs sm:text-sm md:text-xl'>
                        <th className='p-1 sm:p-6 md:p-10 lg:p-14'>Image</th>
                        <th className='p-1 sm:p-6 md:p-10 lg:p-14'>Product</th>
                        <th className='p-1 sm:p-6 md:p-10 lg:p-14'>Price</th>
                        <th className='p-1 sm:p-6 md:p-10 lg:p-14'>Quantity</th>
                        <th className='p-1 sm:p-6 md:p-10 lg:p-14'>Total</th>
                        <th className='p-1 sm:p-6 md:p-10 lg:p-14'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {newCart.map(({ name, price, quantity, imageUrl, id }, index) => (
                        <tr key={index} className='text-center text-gray-700 border-b border-gray-400'>
                            <td className='p-1 sm:p-6 md:p-10 lg:p-14'>
                                <img 
                                    src={imageUrl} 
                                    alt={name} 
                                    className='w-[40px] sm:w-[50px] md:w-[60px] mx-auto'
                                />
                            </td>
                            <td className='p-1 sm:p-6 md:p-10 lg:p-14 text-xs sm:text-sm'>{name}</td>
                            <td className='p-1 sm:p-6 md:p-10 lg:p-14 text-xs sm:text-sm'>${price.toFixed(2)}</td>
                            <td className='p-1 sm:p-6 md:p-10 lg:p-14'>
                                <div className='flex justify-center items-center gap-2'>
                                    <button 
                                        onClick={() => decrease(index)} 
                                        className='text-2xl cursor-pointer hover:text-gray-500'
                                    >
                                        -
                                    </button>
                                    <input 
                                        type="text" 
                                        className='w-[30px] md:w-[50px] h-[30px] md:h-[50px] text-center 
                                        outline-none bg-white border border-gray-300'
                                        value={quantity}
                                        onChange={(e) => handleChange(index, e)}
                                    />
                                    <button 
                                        onClick={() => increase(index)} 
                                        className='text-2xl cursor-pointer hover:text-gray-500'
                                    >
                                        +
                                    </button>
                                </div>
                            </td>
                            <td className='p-1 sm:p-6 md:p-10 lg:p-14 text-xs sm:text-sm'>
                                ${(price * quantity).toFixed(2)}
                            </td>
                            <td className='p-1 sm:p-6 md:p-10 lg:p-14'>
                                <button 
                                    onClick={() => removeItem(id)}
                                    className='text-red-500 hover:text-red-700 hover:cursor-pointer'
                                >
                                    x
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {newCart.length === 0 && (
                <div className="my-20 text-center">
                    <p className="text-lg">Your cart is empty</p>
                    <Link to="/shop" className='underline'>Go Shopping</Link>
                </div>
            )}

            {newCart.length > 0 && (
             <div className="container mx-auto px-4 my-16 w-full max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className="md:w-2/3 space-y-6">
                        <div>
                            <button 
                                className="bg-[#2f2f2f] hover:bg-[#252525] text-white 
                                font-semibold py-2 px-6 rounded-full transition-colors cursor-pointer"
                                onClick={ () => navigate('/shop')}
                            >
                                Continue Shopping
                            </button>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-1">Coupon</h2>
                            <p className="text-sm text-gray-600 mb-4">
                                Enter your coupon code if you have one.
                            </p>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <input
                                    type="text"
                                    placeholder="Coupon Code"
                                    className="border rounded-lg px-4 py-3 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                />
                                <button 
                                    className="bg-[#2f2f2f] hover:bg-[#252525] 
                                    text-white font-semibold px-6 py-3 rounded-2xl transition-colors cursor-pointer"
                                >
                                    Apply Coupon
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/3 border-t md:border-t-0 md:border-l pt-6 md:pt-0 md:pl-6">
                        <h2 className="text-2xl font-medium mb-4">Cart Totals</h2>
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="font-semibold">${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-lg font-semibold">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <button 
                            className="mt-6 w-full bg-[#2f2f2f] hover:bg-[#252525]
                            text-white font-bold py-3 rounded-2xl transition-colors cursor-pointer"
                            onClick={ () => navigate('/checkout', { state: {newCart,total,subtotal} })}
                         >
                            Proceed To Checkout
                        </button>
                    </div>
                </div>
             </div>
            )}
         </div>
        </>
    )
}