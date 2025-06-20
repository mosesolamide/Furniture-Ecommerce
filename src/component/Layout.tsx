import type {JSX} from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout():JSX.Element{
    return(
        <>
          <Header /> 
          <main className='px-10 md:px-15 lg:px-20'>
                <Outlet />
          </main>
          <Footer />
        </>
    )
}