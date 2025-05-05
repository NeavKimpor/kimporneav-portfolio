import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Einvitation from "./pages/Einvitation"
import Engineernest from "./pages/Engineernest"
import Kendoshirt from "./pages/Kendoshirt"
import KIT from "./pages/Kit"
import Home from "./pages/Home"

function App() {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // When the app first loads, redirect if not on "/"
    if (location.pathname !== '/') {
      navigate('/');
    }
  }, [])
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/Engineernest' element={<Engineernest/>}/>
        <Route path='/Einvitation' element={<Einvitation/>}/>
        <Route path='/Kit' element={<KIT/>}/>
        <Route path='/Kendoshirt' element={<Kendoshirt/>}/>

        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  )
}

export default App;