import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import HomeAuth from "./pages/HomeAuth"

import { ProtectedRoute } from "./components/ProtectedRoute"
import { useAuthStore } from "./context/auth/store"
import RegisterPage from "./pages/RegisterPage"
import CreateNotasPage from "./pages/CreateNotasPage"
import { ToastContainer } from "react-toastify"
import 'react-toastify/ReactToastify.css'
import ChangePassword from "./pages/ChangePassword"

function App() {

  const isAuth = useAuthStore((state) => state.isAuth)
  const user = useAuthStore(state => state.profile)
  const userRol = user.rol

  return (
    <>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>


   <Route element={<ProtectedRoute isAllowed={isAuth} />} >
            <Route path="/auth" element={<HomeAuth />} />
            {/* Para el usuario USER */}
            {userRol === 'USER' && (
              <>
                <Route path="/password" element={<ChangePassword />} />
              </>
            )}

            {/* Para el usuario ADMIN */}
            {userRol === 'ADMIN' && (
              <>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/createNotas" element={<CreateNotasPage />} />
                <Route path="/password" element={<ChangePassword />} />
              </>
            )}
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
