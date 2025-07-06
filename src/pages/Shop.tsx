import type {JSX} from 'react'
import Products from '../component/Products'

export default function Shop():JSX.Element {
    return(
        <div className='py-12'>
            <Products />
        </div>
    )
}