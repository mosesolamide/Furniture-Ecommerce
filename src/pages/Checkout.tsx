import type {JSX} from 'react'
import { useLocation, Link } from 'react-router-dom'
import type { FurnitureType } from '../firebase/firebase' 

export default function Checkout():JSX.Element{
    const location = useLocation()
    const stateProps = location.state
    const orderInCart:Array<FurnitureType & {quantity: number}> = stateProps.newCart

    return(
        <>
         <Link to='/cart' className='mt-20 inline-block underline'>Back to cart</Link>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
                <h1 className='font-medium text-xl md:text-2xl mb-4'>Billing Details</h1>
                <form action="" className='bg-white p-6 lg:p-8 border-1 border-gray-300 rounded-xl'>
                    <label htmlFor="country">Country</label>
                    <select className='border-1 border-gray-400 py-2 rounded-lg w-full'>
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="GB">United Kingdom</option>
                        <option value="IN">India</option>
                        <option value="AU">Australia</option>
                    </select>
                    <div className='flex flex-col md:flex-row gap-4 my-4'>
                       <div>
                         <label htmlFor="">First Name</label>
                         <input type="text" className='border-1 border-gray-400 py-2 rounded-lg w-full indent-4' />
                       </div>
                        <div>
                            <label htmlFor="">Last Name</label>
                            <input type="text" className='border-1 border-gray-400 py-2 rounded-lg w-full indent-4' />
                        </div>
                    </div>
                    <label htmlFor="">Address</label>
                    <input 
                        type="text" 
                        className='border-1 border-gray-400 py-2 rounded-lg w-full indent-4' 
                        placeholder='Street address' 
                    />
                    <input 
                        type="text" 
                        className='border-1 border-gray-400 py-2 rounded-lg w-full indent-4 my-4' 
                        placeholder='Apartment, suite, unit etc. (optional)' 
                    />
                    <div className='flex flex-col md:flex-row gap-4 mb-4'>
                        <div>
                            <label htmlFor="">State / Country</label>
                            <input 
                                type="text" 
                                className='border-1 border-gray-400 py-2 rounded-lg w-full indent-4'
                             />
                        </div>
                        <div>
                            <label htmlFor="">Postal / Zip</label>
                            <input 
                                type="text" 
                                className='border-1 border-gray-400 py-2 rounded-lg w-full indent-4'
                             />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 mb-4'>
                        <div>
                            <label htmlFor="">Email Address</label>
                            <input 
                                type="text" 
                                className='border-1 border-gray-400 py-2 rounded-lg w-full indent-4'
                                placeholder='joe@gmail.com'
                             />
                        </div>
                        <div>
                            <label htmlFor="">Phone Number</label>
                            <input 
                                type="text" 
                                className='border-1 border-gray-400 py-2 rounded-lg w-full indent-4'
                                placeholder='Phone Number'
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Order Notes</label>
                        <textarea 
                            name="" 
                            id="" 
                            placeholder='Write your notes here...' 
                            className='w-full border-1 border-gray-400 rounded-lg
                             max-h-[200px] resize-none indent-4 py-2'></textarea>
                    </div>
                </form>
            </div>
            <div>
                <h1 className='font-medium text-xl md:text-2xl mb-4'>Your Order</h1>
                <div className='p-4 md:p-6 bg-white border-1 border-gray-300 rounded-xl'>
                    <table className='w-full'>
                        <thead className='border-b-2 font-bold text-center'>
                            <tr>
                                <th>Product</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {orderInCart.map( ({ name,price,quantity },index) => (
                                <tr className='border-b-1 border-gray-200' key={index}>
                                    <td className='py-1 md:py-2 lg:py-4'>{name} x {quantity}</td>
                                    <td className='py-1 md:py-2 lg:py-4'>${price}</td>
                                </tr>
                            ))}
                            <tr className='border-b-1 border-gray-200'>
                                <td className='py-1 md:py-2 lg:py-4 font-bold'>Cart Subtotal</td>
                                <td className='py-1 md:py-2 lg:py-4 font-bold'>${stateProps.subtotal.toFixed(2)}</td>
                            </tr>
                            <tr className='border-b-1 border-gray-200'>
                                <td className='py-1 md:py-2 lg:py-4 font-bold'>Order Total</td>
                                <td className='py-1 md:py-2 lg:py-4 font-bold'>${stateProps.total.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>  
                    <div className='mt-6'>
                        <h3 className='font-medium text-lg mb-3'>Payment Method</h3>
                        <div className='space-y-3'>
                            <div className='flex items-center'>
                                <input 
                                    type="radio" 
                                    id="credit-card" 
                                    name="payment" 
                                    value="credit-card" 
                                    className='mr-2 h-4 w-4'
                                    defaultChecked
                                />
                                <label htmlFor="credit-card" className='flex-1'>Credit/Debit Card</label>
                            </div>
                            <div className='flex items-center'>
                                <input 
                                    type="radio" 
                                    id="cash" 
                                    name="payment" 
                                    value="cash" 
                                    className='mr-2 h-4 w-4'
                                />
                                <label htmlFor="cash" className='flex-1'>Cash on Delivery</label>
                            </div>
                        </div>
                        
                        {/* Credit Card Form (shown when credit card is selected) */}
                        <div className='mt-4 space-y-3'>
                            <div>
                                <label htmlFor="card-number">Card Number</label>
                                <input 
                                    type="text" 
                                    id="card-number" 
                                    className='border-1 border-gray-400 py-2 rounded-lg w-full indent-4'
                                    placeholder='1234 5678 9012 3456'
                                />
                            </div>
                            <div>
                                <label htmlFor="card-name">Name on Card</label>
                                <input 
                                    type="text" 
                                    id="card-name" 
                                    className='border-1 border-gray-400 py-2 rounded-lg w-full indent-4'
                                    placeholder='John Doe'
                                />
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex-1'>
                                    <label htmlFor="expiry">Expiry Date</label>
                                    <input 
                                        type="text" 
                                        id="expiry" 
                                        className='border-1 border-gray-400 py-2 rounded-lg w-full indent-4'
                                        placeholder='MM/YY'
                                    />
                                </div>
                                <div className='flex-1'>
                                    <label htmlFor="cvv">CVV</label>
                                    <input 
                                        type="text" 
                                        id="cvv" 
                                        className='border-1 border-gray-400 py-2 rounded-lg w-full indent-4'
                                        placeholder='123'
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <button 
                            className='bg-[#2f2f2f] text-white py-2 md:py-4
                             px-4 md:px-6 rounded-3xl mt-6 w-full cursor-pointer'
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}