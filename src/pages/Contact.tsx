import type {JSX} from 'react'
import { MdLocationOn, MdForwardToInbox } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"

export default function Contact():JSX.Element {
    return(
        <div className='py-10'>
            <div className='flex flex-col gap-4 items-start lg:flex-row lg:items-center lg:justify-center min-w-[300px]'>

                <div className='flex items-center justify-center gap-4'>
                    <div className='bg-[#3B5D50] p-4 flex justify-center items-center rounded-lg'>
                        <MdLocationOn size={20} className='text-white'/>
                    </div>
                    <p className='text-sm font-medium text-gray-600'>43 Raymouth Rd. Baltemoer, London 3910</p>
                </div>

                <div className='flex items-center justify-center gap-4'>
                    <div className='bg-[#3B5D50] p-4 flex justify-center items-center rounded-lg'>
                        <MdForwardToInbox size={20} className='text-white'/>
                    </div>
                    <p className='text-sm font-medium text-gray-600'>info@yourdomain.com</p>
                </div>

                <div className='flex items-center justify-center gap-4'>
                    <div className='bg-[#3B5D50] p-4 flex justify-center items-center rounded-lg'>
                        <FaPhoneAlt size={20} className='text-white'/>
                    </div>
                    <p className='text-sm font-medium text-gray-600'>+1 294 3925 3939</p>
                </div>

            </div>

            {/* form */}
            <form className='flex flex-col'>
                <div className='grid grid-cols-2 gap-4 mt-20 min-w-[300px] mx-auto'>
                    <div className='col-span-1'>
                        <label className='text-xs font-medium'>First name</label>
                        <input 
                            type="text" 
                            className='w-full h-10 border
                         border-gray-500 bg-gray-100 rounded-[10px] outline-[#1e3029]' />
                    </div>
                    <div className='col-span-1'>
                        <label className='text-xs font-medium'>Last name</label>
                        <input 
                            type="text" 
                            className='w-full h-10 border
                         border-gray-500 bg-gray-100 rounded-[10px] outline-[#1e3029]' />
                    </div>
                    <div className='col-span-2'>
                        <label className='text-xs font-medium'>Email address</label>
                        <input
                            type="email" 
                            className='w-full h-10 border
                         border-gray-500 bg-gray-100 rounded-[10px] outline-[#1e3029]' />
                    </div>
                    <div className='col-span-2'>
                        <label className='text-xs font-medium'>Message</label>
                        <textarea className='border w-full h-[100px] resize-none
                         border-gray-500 bg-gray-100 rounded-[10px] outline-[#1e3029]'></textarea>
                    </div>
                    <button 
                        className='col-span-2 mt-4 bg-[#1e3029] text-white py-2
                         rounded-[10px] hover:bg-opacity-90 transition cursor-pointer'
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}