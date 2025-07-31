import type {JSX} from 'react'
import { Route, 
        createBrowserRouter, 
        createRoutesFromElements, 
        RouterProvider 
} from 'react-router-dom'
import Layout from './component/Layout'
import Shop from './pages/Shop'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import NotFound from './component/NotFound'
import Cart from './pages/Cart'
import HomePage, { loader as homeLoader } from './pages/HomePage'
import Checkout from './pages/Checkout'

function App():JSX.Element {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route 
        index 
        element={<HomePage />} 
        loader={homeLoader}
        errorElement={<p>Something went wrong try again!!</p>}
      />
      <Route 
        path="/shop" 
        element={<Shop />} 
        loader={homeLoader}
        errorElement={<p>Something went wrong try again!!</p>}
      />
      <Route path="/about" element={<About />} />
      <Route 
        path="/services" 
        element={<Services />} 
        loader={homeLoader}
      />
      <Route path="/contactus" element={<Contact />} />
      <Route path='/blog' element={<Blog />} />
      <Route path="*" element={<NotFound />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
    </Route>
  ))
  return (
      <RouterProvider router={router} />
  )
}

export default App

