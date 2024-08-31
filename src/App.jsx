import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import Product from "./pages/Product/Product";
import Products from "./pages/products/Products";
import "./styles/main.scss";
import { useState } from "react";

const Layout = () => {
  const [appHidden, setAppHidden] = useState(false);
  return (
    <div className={appHidden ? "app app--hidden" : "app"}>
      <Header setAppHidden={setAppHidden} />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/categories/:id", element: <Products /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
