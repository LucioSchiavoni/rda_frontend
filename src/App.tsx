import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import HomeAuth from "./pages/HomeAuth"
import EditNotas from "./pages/EditNotas"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { useAuthStore } from "./context/auth/store"
import RegisterPage from "./pages/RegisterPage"
import CreateNotasPage from "./pages/CreateNotasPage"
import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'

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
 <Route path="/editNotas" element={<EditNotas/>}/> 
  </Route>
 </Routes>
    <ToastContainer 
      position="top-right"
      pauseOnHover={false}
      pauseOnFocusLoss={false}
    />
 </BrowserRouter>
    </>
  )
}

export default App
