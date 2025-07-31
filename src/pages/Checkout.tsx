import type {JSX} from 'react'

export default function Checkout():JSX.Element{
    return(
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-20'>
            <div>
                <h1 className='font-medium text-xl md:text-2xl'>Billing Details</h1>
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
                <h1 className='font-medium text-xl md:text-2xl'>Your Order</h1>
                <div className='p-4 md:p-6 bg-white border-1 border-gray-300 rounded-xl'>
                    <table className='w-full'>
                        <thead className='border-b-2 font-bold text-center'>
                            <tr>
                                <th>Product</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr className='border-b-1 border-gray-200'>
                                <td className='py-1'>Product 1 x 1</td>
                                <td className='py-1'>$250</td>
                            </tr>
                            <tr className='border-b-1 border-gray-200'>
                                <td className='py-1 font-bold'>Cart Subtotal</td>
                                <td className='py-1 font-bold'>$250</td>
                            </tr>
                            <tr className='border-b-1 border-gray-200'>
                                <td className='py-1 font-bold'>Order Total</td>
                                <td className='py-1 font-bold'>$250</td>
                            </tr>
                        </tbody>
                    </table>  
                    <div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}