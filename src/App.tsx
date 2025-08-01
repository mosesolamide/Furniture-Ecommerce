import type { JSX } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import HomePage, { loader as homeLoader } from './pages/HomePage'
import Layout from './component/Layout'

// Lazy imports
const Shop = lazy(() => import('./pages/Shop'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))
const Blog = lazy(() => import('./pages/Blog'))
const NotFound = lazy(() => import('./component/NotFound'))
const Cart = lazy(() => import('./pages/Cart'))
const Checkout = lazy(() => import('./pages/Checkout'))
const Loading = lazy(() => import('./component/Loading'))

function App(): JSX.Element {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route
      path="/"
      element={
          <Layout />
      }
    >
      <Route
        index
        element={
            <HomePage />
        }
        loader={homeLoader}
        errorElement={<p>Something went wrong, try again!</p>}
      />
      <Route
        path="/shop"
        element={
          <Suspense fallback={<Loading />}>
            <Shop />
          </Suspense>
        }
        loader={homeLoader}
        errorElement={<p>Something went wrong, try again!</p>}
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        }
      />
      <Route
        path="/services"
        element={
          <Suspense fallback={<Loading />}>
            <Services />
          </Suspense>
        }
        loader={homeLoader}
      />
      <Route
        path="/contactus"
        element={
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        }
      />
      <Route
        path="/blog"
        element={
          <Suspense fallback={<Loading />}>
            <Blog />
          </Suspense>
        }
      />
      <Route
        path="/cart"
        element={
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        }
      />
      <Route
        path="/checkout"
        element={
          <Suspense fallback={<Loading />}>
            <Checkout />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        }
      />
    </Route>
  ))

  return <RouterProvider router={router} />
}

export default App
