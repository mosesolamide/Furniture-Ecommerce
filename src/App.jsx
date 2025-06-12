import React from 'react'
import { Route, 
        createBrowserRouter, 
        createRoutesFromElements, 
        RouterProvider 
} from 'react-router-dom'
import Layout from './layout/Layout'
import Shop from './pages/Shop'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import HomePage, { loader as homeLoader } from './pages/HomePage'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route 
        index 
        element={<HomePage />} 
        loader={homeLoader}
        errorElement={<p>Something went wrong try again!!</p>}
      />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path='/blog' element={<Blog />} />
    </Route>
  ))
  return (
      <RouterProvider router={router} />
  )
}

export default App

