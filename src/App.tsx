import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import HomeAuth from "./pages/HomeAuth"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { useAuthStore } from "./context/auth/store"
import RegisterPage from "./pages/RegisterPage"
import CreateNotasPage from "./pages/CreateNotasPage"

function App() {

  const isAuth = useAuthStore((state) => state.isAuth)

  return (
    <>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>


  <Route element={<ProtectedRoute isAllowed={isAuth} />} >
  <Route path="/auth" element={<HomeAuth/>}/>
  <Route path="/register" element={<RegisterPage/>}/> 
  <Route path="/createNotas" element={<CreateNotasPage/>}/> 
  </Route>
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
