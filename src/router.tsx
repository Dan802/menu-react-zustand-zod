import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import FavoritesPage from "./views/FavoritesPage"
import Layout from "./Layouts/Layout"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* We can define a template with a header, it's called Layout */}
        {/* And inside this we can have different components */}
        <Route element={<Layout />}> 
          <Route path="/" element={<IndexPage />} index />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}
