import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Router/Router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './Provider/AuthProvider.jsx'
import { ThemeProvider } from './Provider/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ThemeProvider>
    <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
   </ThemeProvider>
  </StrictMode>,
)
