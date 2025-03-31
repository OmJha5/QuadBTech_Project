import Home from '@/components/GuestComponents/Home'
import Login from '@/components/GuestComponents/Login'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Home/>
    },
    {
        path : "/login",
        element : <Login/>
    },
])

export default function App() {
  return (
    <div >
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}
