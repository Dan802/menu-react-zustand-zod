import Header from "../components/Header";
import { Outlet } from "react-router";
import Modal from "../components/Modal";
import Notification from "../components/Notification";
import { useEffect } from "react";
import { useAppStore } from "../stores/useAppStore";

export default function Layout() {

  const loadFromStorage = useAppStore((state) => state.loadFromStorage)

  useEffect( () => {
    loadFromStorage()
  }, [])

  return (
    <>
      <Header />
      
      <main className="container mx-auto py-16">

        {/* Outlet will show the other components */}
        <Outlet />

      </main>

      <Modal />
      <Notification />
    </>
  )
}
