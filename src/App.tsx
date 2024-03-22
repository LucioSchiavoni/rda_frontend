import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import HomeAuth from "./pages/HomeAuth"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { useAuthStore } from "./context/auth/store"
import RegisterPage from "./pages/RegisterPage"
import CreateNotas from "./pages/CreateNotas"

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
  <Route path="/createNotas" element={<CreateNotas/>}/> 
  </Route>
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
