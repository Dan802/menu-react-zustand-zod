import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Layout from "./Layouts/Layout"
const FavoritesPage = lazy(() => import('./views/FavoritesPage'))
const IndexPage = lazy(() => import('./views/IndexPage'))

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* We can define a template with a header, it's called Layout */}
        {/* And inside this we can have different components */}
        <Route element={<Layout />}> 
          <Route index path="/" element={

            // Suspense is for performance
            <Suspense fallback="Loading...">
              <IndexPage />
            </Suspense>
            
          } />
          
          <Route path="/favorites" element={
            
            // Suspense is for performance
            <Suspense fallback="Loading...">
              <FavoritesPage />
            </Suspense>

          } />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}
