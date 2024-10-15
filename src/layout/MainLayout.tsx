import { Outlet } from "react-router"
import { TopBar } from "../components/TopBar"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

export const MainLayout = () => {
  return (
    <main>
        <TopBar />
        <ToastContainer />
        <Outlet />
    </main>
  )
}
