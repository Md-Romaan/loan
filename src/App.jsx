import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@mui/material'
import { createBrowserRouter, NavLink, RouterProvider } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/about'
import ExchangeRates from './pages/ExchangeRates'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/exchange-rates",
          element: <ExchangeRates />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "*",
          element: <div>404 Not Found <Button variant='contained' onClick={() => window.location.replace("/")}>GO HOME</Button></div>,
        }
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
