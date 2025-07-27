import type { JSX } from 'react'
import { useState } from 'react'

export default function Cart():JSX.Element{
    const [quantity, setQuantity] = useState<number>(1)
    const increase = () => setQuantity( prev => prev + 1)
    const decrease = () => {
        if (quantity > 1) setQuantity( prev => prev - 1) 
    }

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)
    setQuantity(isNaN(value) ? 1 : value)
  }

    return(
        <div className='flex flex-col items-center'>
            <table>
                <thead className='border-b-2 border-black '>
                    <tr>
                        <th className='p-2 sm:p-6 md:p-10 lg:p-14'>Image</th>
                        <th className='p-2 sm:p-6 md:p-10 lg:p-14'>Product</th>
                        <th className='p-2 sm:p-6 md:p-10 lg:p-14'>Price</th>
                        <th className='p-2 sm:p-6 md:p-10 lg:p-14'>Quantity</th>
                        <th className='p-2 sm:p-6 md:p-10 lg:p-14'>Total</th>
                        <th className='p-2 sm:p-6 md:p-10 lg:p-14'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='text-center text-gray-700 border-b-1 border-gray-400'>
                        <td className='p-1 sm:p-6 md:p-10 lg:p-14'>
                            <img src="product-1.png" alt="image of product" className='w-[40px] sm:w-[50px] md:w-[60px]' />
                        </td>
                        <td className='p-1 sm:p-6 md:p-10 lg:p-14 text-xs'>Ergonomic Chair</td>
                        <td className='p-1 sm:p-6 md:p-10 lg:p-14 text-xs'>$49.00</td>
                        <td className='p-1 sm:p-6 md:p-10 lg:p-14'>
                            <div className='flex justify-center items-center gap-2'>
                                <button onClick={decrease} className='text-2xl cursor-pointer'>-</button>
                                <input 
                                    type="text" 
                                    className='w-[40px] md:w-[50px] h-[40px] md:h-[50px] text-center 
                                    outline-none bg-white border border-gray-300'
                                    value={quantity}
                                    onChange={handleChange}
                                />
                                <button onClick={increase} className='text-2xl cursor-pointer'>+</button>
                            </div>
                        </td>
                        <td className='p-1 sm:p-6 md:p-10 lg:p-14 text-xs'>$49.00</td>
                        <td className='p-1 sm:p-6 md:p-10 lg:p-14 '>x</td>
                    </tr>
                    <tr className='text-center text-gray-700 border-b-1 border-gray-400'>
                        <td className='p-1 sm:p-6 md:p-10 lg:p-14'>
                            <img src="product-1.png" alt="image of product" className='w-[40px] sm:w-[50px] md:w-[60px]' />
                        </td>
                        <td className='p-1 sm:p-6 md:p-10 lg:p-14 text-xs'>Ergonomic Chair</td>
                        <td className='p-1 sm:p-6 md:p-10 lg:p-14 text-xs'>$49.00</td>
                        <td className='p-1 sm:p-6 md:p-10 lg:p-14'>
                            <div className='flex justify-center items-center gap-2'>
                                <button onClick={decrease} className='text-2xl cursor-pointer'>-</button>
                                <input 
                                    type="text" 
                                    className='w-[40px] md:w-[50px] h-[40px] md:h-[50px] text-center 
                                    outline-none bg-white border border-gray-300'
                                    value={quantity}
                                    onChange={handleChange}
                                />
                                <button onClick={increase} className='text-2xl cursor-pointer'>+</button>
                            </div>
                        </td>
                        <td className='p-1 sm:p-6 md:p-10 lg:p-14 text-xs'>$49.00</td>
                        <td className='p-1 sm:p-6 md:p-10 lg:p-14 '>x</td>
                    </tr>
                </tbody>
            </table>
            <div className="container mx-auto px-4 my-16">
                <div className="flex flex-col md:flex-row justify-between gap-10">

                    {/* Left Side */}
                    <div className="md:w-2/3 space-y-6">
                        {/* Buttons */}
                        <div className="flex gap-4 flex-wrap">
                            <button className="bg-[#2f2f2f] hover:bg-[#252525] hover:cursor-pointer text-white font-semibold py-2 px-6 rounded-full">
                            Update Cart
                            </button>
                            <button className="bg-[#2f2f2f] hover:bg-[#252525] hover:cursor-pointer text-white font-semibold py-2 px-6 rounded-full">
                            Continue Shopping
                            </button>
                        </div>

                        {/* Coupon Section */}
                        <div>
                            <h2 className="text-xl font-semibold mb-1">Coupon</h2>
                            <p className="text-sm text-gray-600 mb-4">
                            Enter your coupon code if you have one.
                            </p>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <input
                                type="text"
                                placeholder="Coupon Code"
                                className="border rounded-lg px-4 py-3 w-full sm:w-80"
                            />
                            <button className="bg-[#2f2f2f] hover:bg-[#252525] hover:cursor-pointer text-white font-semibold px-6 py-3 rounded-2xl">
                                Apply Coupon
                            </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Cart Totals */}
                    <div className="md:w-1/3 border-t md:border-t-0 md:border-l pt-6 md:pt-0 md:pl-6">
                        <h2 className="text-2xl font-medium mb-4">Cart Totals</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="font-semibold text-sm">$230.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Total</span>
                                <span className="font-semibold text-sm">$230.00</span>
                            </div>
                        </div>
                        <button className="mt-6 w-full bg-[#2f2f2f] hover:bg-[#252525]  hover:cursor-pointer text-white font-bold py-3 rounded-2xl">
                            Proceed To Checkout
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}