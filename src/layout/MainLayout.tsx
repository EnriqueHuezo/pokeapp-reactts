import { Outlet } from "react-router"
import { TopBar } from "../components/TopBar"

export const MainLayout = () => {
  return (
    <main>
        <TopBar />
        <Outlet />
    </main>
  )
}
