import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeAuth from "./pages/HomeAuth";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useAuthStore } from "./context/auth/store";
import RegisterPage from "./pages/RegisterPage";
import CreateNotasPage from "./pages/CreateNotasPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css';
import ChangePassword from "./pages/ChangePassword";
import PostContentPage from "./pages/PostContentPage";
import { useEffect } from 'react';
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { useLocation } from "react-router-dom"; 
import FolderById from "./components/Modal/FolderById";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  const isAuth = useAuthStore((state) => state.isAuth);



  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<ProtectedRoute isAllowed={isAuth} />}>
        <Route path="/auth" element={<HomeAuth />} />
        <Route path="/:id" element={<PostContentPage />} />
        <Route path="/folder/:postId/:folderId" element={<FolderById />} />
      
            <Route path="/password" element={<ChangePassword />} />
      
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/createNotas" element={<CreateNotasPage />} />
            <Route path="/password" element={<ChangePassword />} />
        
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContent />
        <ToastContainer 
          position="top-right"
          pauseOnHover={false}
          pauseOnFocusLoss={false}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
