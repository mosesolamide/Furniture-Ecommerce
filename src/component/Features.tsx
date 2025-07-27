import type {JSX} from "react"
import support from '../assets/support.svg'
import truck from '../assets/truck.svg'
import roll from '../assets/roll.svg'
import bag from '../assets/bag.svg'

export default function Features():JSX.Element{
    return(
            <div className='grid grid-cols-2 gap-5'>
              <div>
                  <img src={truck} alt="image of truck" />
                  <div>
                      <span className='font-medium text-gray-800 text-sm'>Fast & Free Shipping</span>
                      <p className='font-medium text-xs text-gray-600'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
              </div>
              <div>
                  <img src={bag} alt="image of bag" />
                  <div>
                      <span className='font-medium text-gray-800 text-sm'>Easy to Shop</span>
                      <p className='font-medium text-xs text-gray-600'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
              </div>
              <div>
                  <img src={support} alt="image of support" />
                  <div>
                      <span className='font-medium text-gray-800 text-sm'>24/7 Support</span>
                      <p className='font-medium text-xs text-gray-600'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
              </div>
              <div>
                  <img src={roll} alt="image of roll" />
                  <div>
                      <span className='font-medium text-gray-800 text-sm'>24/7 Support</span>
                      <p className='font-medium text-xs text-gray-600'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
              </div>
            </div>
    )
}