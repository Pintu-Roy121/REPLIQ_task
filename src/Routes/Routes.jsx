import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Shared/Login/Login";
import Register from "../Shared/Register/Register";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Cart from "../Pages/Cart/Cart";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Customer from "../Pages/Customer/Customer";
import OrderList from "../Pages/OrderList/OrderList";
import ProductList from "../Pages/ProductList/ProductList";
import AddCustomer from "../Pages/AddCustomer/AddCustomer";
import AddProduct from "../Pages/AddProduct/AddProduct";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/allproduct',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/customer',
                element: <Customer></Customer>
            },
            {
                path: '/dashboard/orderlist',
                element: <OrderList></OrderList>
            },
            {
                path: '/dashboard/productlist',
                element: <ProductList></ProductList>
            },
            {
                path: '/dashboard/addcustomer',
                element: <AddCustomer></AddCustomer>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            }
        ]
    }
])