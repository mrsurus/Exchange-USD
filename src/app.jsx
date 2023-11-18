import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Navbar from './Components/Shared/Navbar/Navbar'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Routes/Routes'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}
