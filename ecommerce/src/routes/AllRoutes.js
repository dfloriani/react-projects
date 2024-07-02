import { Routes, Route } from "react-router-dom";
import { HomePage, ProductsList, ProductDetail } from "../pages";
import Login from "../pages/Login";
import {Register} from "../pages/Register";
import { CartPage } from "../pages/Cart/CartPage";
import ProtectedRoutes from "./ProtectedRoutes";
import {OrderPage} from "../pages/Order/OrderPage";
import { DashboardPage } from "../pages/Dashboard/DashboardPage";
import { PageNotFound } from "../pages/PageNotFound";

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage title="Home" />} />
        <Route path="products" element={<ProductsList title="Products"/>} />
        <Route path="products/:id" element={<ProductDetail title="Product Detail" />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />
        <Route path="order-summary" element={<ProtectedRoutes><OrderPage /></ProtectedRoutes>} />
        <Route path="dashboard" element={<ProtectedRoutes><DashboardPage  title="Dashboard"/></ProtectedRoutes>} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  )
}