import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { Main } from './pages/Home'
import { PokeDetails } from './pages/PokeDetails'
import { PokeTeam } from './pages/PokeTeam'
import { PokemonsTeamsProvider } from './context/PokemonsTeamsProvider'

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
        element: <PokeDetails />
      },
      {
        path: 'poketeams',
        element: <PokeTeam />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PokemonsTeamsProvider>
      <RouterProvider router={router} />
    </PokemonsTeamsProvider>
  </StrictMode>,
)
