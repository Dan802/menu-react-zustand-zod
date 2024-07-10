import Header from "../components/Header";
import { Outlet } from "react-router";
import Modal from "../components/Modal";


export default function Layout() {
  return (
    <>
      <Header />
      
      <main className="container mx-auto py-16">

        {/* Outlet will show the other components */}
        <Outlet />

      </main>

      <Modal />
    </>
  )
}
