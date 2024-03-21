import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import HomeAuth from "./pages/HomeAuth"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { useAuthStore } from "./context/auth/store"

function App() {

  const isAuth = useAuthStore((state) => state.isAuth)

  return (
    <>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route element={<ProtectedRoute isAllowed={isAuth} />} >
  <Route path="/auth" element={<HomeAuth/>}/>

  </Route>
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
