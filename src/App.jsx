import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { createBrowserRouter, NavLink, RouterProvider } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ExchangeRates from './pages/ExchangeRates'
import { useSelector } from 'react-redux'

function App() {

  let mode = useSelector(state => state.util.mode);

  console.log({ mode });


  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

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
          element: <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}>
            <div>
              Something went wrong <Button variant='contained' onClick={() => window.location.replace("/")}>GO HOME</Button>
            </div>
          </div>
          ,
        }
      ]
    },
  ])

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
