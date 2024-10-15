import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { Main } from './pages/Home'
import { PokeDetails } from './pages/PokeDetails'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: 'pokemon/:pokemonId',
        element: <div>pokemon</div>
      },
      {
        path: 'poketeams',
        element: <div>Team</div>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
