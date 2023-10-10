import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";


import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


function App() {


  const Layout = ()=> {
    return (
      <div className="main">
        <Navbar />
        <div className="menuContainer"></div>
        <Menu />
        <div className="contentContainer">
      <Outlet/>
        </div>
      <Footer />
      </div>
    )
  }


  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, // pasamos directamente el layout obvio
    children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/products",
          element: <Products />
        }
      ]
    },
  ]);

  return <RouterProvider router={router} /> ;
  
}

export default App


// 13:51
// yarn para instalar
// yarn run dev