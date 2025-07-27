import type {JSX} from 'react'
import BlogPosts from '../component/BlogPosts'
import SlideShow from '../component/SlideShow'

export default function Blog():JSX.Element {
    return(
        <>
            <BlogPosts />
            <BlogPosts />
            <BlogPosts />
            <div className='my-20'>
                <SlideShow />
            </div>
        </>
    )
}