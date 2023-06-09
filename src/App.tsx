import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PrivateRoutes from "./routes/PrivateRoutes"
import Blog from "./pages/blogs/Blog"
import Login from "./pages/auth/Login"
import Home from "./pages/home/Home"
import Shop from "./pages/auth/shop/Shop"
import AuthRoutes from "./routes/AuthRoutes"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/blog" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Route>
          <Route element={<AuthRoutes />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
