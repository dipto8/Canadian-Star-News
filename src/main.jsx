import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'
import AuthProviders from './Providers/AuthProviders/AuthProviders'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders><RouterProvider router={routes}></RouterProvider></AuthProviders>
  </StrictMode>,
)
