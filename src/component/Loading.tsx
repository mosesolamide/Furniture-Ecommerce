import type {JSX} from 'react'
import { ClipLoader } from 'react-spinners'

export default function Loading():JSX.Element{
    return(
        <div className='flex justify-center items-center w-full'>
            <ClipLoader color="#36d7b7" loading={true} size={50} />
        </div>
    )
}